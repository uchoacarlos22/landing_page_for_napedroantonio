import React from 'react';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  role: 'user' | 'model';
  text: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ role, text }) => {
  const isUser = role === 'user';

  return (
    <div className={`flex w-full mb-4 ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`flex max-w-[80%] ${isUser ? 'flex-row-reverse' : 'flex-row'} items-start gap-2`}>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isUser ? 'bg-blue-600' : 'bg-gray-200'}`}>
          {isUser ? <User size={16} className="text-white" /> : <Bot size={16} className="text-gray-600" />}
        </div>
        <div className={`p-3 rounded-lg text-sm ${
          isUser 
            ? 'bg-blue-600 text-white rounded-br-none' 
            : 'bg-white border border-gray-200 text-gray-800 rounded-bl-none shadow-sm'
        }`}>
          {text}
        </div>
      </div>
    </div>
  );
};
