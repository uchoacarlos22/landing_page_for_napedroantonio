import React, { useState, FormEvent } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, disabled }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input.trim() && !disabled) {
      onSendMessage(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-3 border-t border-gray-100 bg-gray-50">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite sua mensagem..."
        className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:bg-gray-100 placeholder-gray-400 text-gray-800"
        disabled={disabled}
      />
      <button
        type="submit"
        disabled={!input.trim() || disabled}
        className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center w-10 h-10"
      >
        <Send size={18} />
      </button>
    </form>
  );
};
