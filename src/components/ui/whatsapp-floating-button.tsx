import { MessageCircle } from "lucide-react";
import { Button } from "./button";

const WHATSAPP_LINK = "https://wa.me/message/ZRHHEDVWJE66F1";

interface WhatsAppFloatingButtonProps {
  className?: string;
}

export default function WhatsAppFloatingButton({ className = "" }: WhatsAppFloatingButtonProps) {
  const handleClick = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && 'gtag' in window && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'floating_button',
        value: 1
      });
    }
    
    // Force open in new tab to bypass iframe restrictions
    const link = document.createElement('a');
    link.href = WHATSAPP_LINK;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button
      onClick={handleClick}
      className={`
        fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full p-0
        bg-gradient-to-r from-[#25D366] to-[#128C7E]
        hover:from-[#128C7E] hover:to-[#25D366]
        shadow-lg hover:shadow-xl
        transition-all duration-300 ease-out
        hover:scale-110 active:scale-95
        group
        ${className}
      `}
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle 
        className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-200" 
      />
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] opacity-30 blur -z-10" />
      
      {/* Tooltip */}
      <div className="
        absolute right-full mr-3 top-1/2 -translate-y-1/2
        bg-background border border-border rounded-lg px-3 py-2
        text-sm font-medium text-foreground
        opacity-0 group-hover:opacity-100
        transition-opacity duration-200
        whitespace-nowrap
        pointer-events-none
        shadow-lg
      ">
        Chat with us on WhatsApp
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-background" />
      </div>
    </Button>
  );
}