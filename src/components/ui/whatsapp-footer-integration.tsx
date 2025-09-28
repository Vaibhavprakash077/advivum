import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/message/ZRHHEDVWJE66F1";

export default function WhatsAppFooterIntegration() {
  const handleClick = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && 'gtag' in window && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'footer_integration',
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
    <li className="flex items-center group">
      <div className="
        mr-2 p-1 rounded-full
        bg-gradient-to-r from-[#25D366]/20 to-[#128C7E]/20
        group-hover:from-[#25D366]/40 group-hover:to-[#128C7E]/40
        transition-all duration-200
      ">
        <MessageCircle className="h-4 w-4 text-[#25D366] group-hover:scale-110 transition-transform duration-200" />
      </div>
      <a 
        href="#"
        onClick={(e) => {
          e.preventDefault();
          handleClick();
        }}
        className="
          text-muted-foreground hover:text-[#25D366] 
          transition-colors duration-200
          relative
          after:content-[''] after:absolute after:w-full after:scale-x-0 
          after:h-0.5 after:bottom-0 after:left-0 
          after:bg-gradient-to-r after:from-[#25D366] after:to-[#128C7E]
          after:origin-bottom-right after:transition-transform after:duration-300 
          hover:after:scale-x-100 hover:after:origin-bottom-left
        "
      >
        WhatsApp Business
      </a>
    </li>
  );
}