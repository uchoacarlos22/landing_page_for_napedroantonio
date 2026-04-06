import React, { useEffect, useRef } from 'react';
import { ChatMessage } from './ChatMessage';

interface Message {
  role: 'user' | 'model';
  parts: string;
}

interface ChatWindowProps {
  messages: Message[];
  isLoading: boolean;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ messages, isLoading }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto p-4 h-full bg-transparent">
      {messages.length === 0 && (
        <div className="text-center text-gray-500 mt-10 text-sm p-4 bg-white/50 rounded-lg mx-4 backdrop-blur-sm">
          <p>Olá! Sou o assistente virtual da Na Pedro Antonio.</p>
          <p className="mt-2">Posso te ajudar com orçamentos, dúvidas sobre serviços ou agendamentos.</p>
        </div>
      )}
      
      {messages.map((msg, index) => (
        <ChatMessage key={index} role={msg.role} text={msg.parts} />
      ))}
      
      {isLoading && (
        <div className="flex justify-start mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></span>
            </div>
            <span className="text-gray-500 text-sm">Digitando...</span>
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};
