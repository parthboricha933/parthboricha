'use client';

import { MessageCircle, Send } from 'lucide-react';

export default function MobileChatButtons() {
  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/918347185730"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-chat-btn whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} color="#fff" />
      </a>

      {/* Telegram */}
      <a
        href="https://t.me/parthboricha"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-chat-btn telegram"
        aria-label="Chat on Telegram"
      >
        <Send size={22} color="#fff" />
      </a>
    </>
  );
}
