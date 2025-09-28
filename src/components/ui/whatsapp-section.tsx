import { MessageCircle, QrCode, Smartphone } from "lucide-react";
import { Button } from "./button";
import { Card } from "./card";
import whatsappQR from "@/assets/whatsapp-qr.jpg";

const WHATSAPP_LINK = "https://wa.me/message/ZRHHEDVWJE66F1";

interface WhatsAppSectionProps {
  className?: string;
  showTitle?: boolean;
}

export default function WhatsAppSection({ className = "", showTitle = true }: WhatsAppSectionProps) {
  const handleLinkClick = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && 'gtag' in window && window.gtag) {
      window.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'direct_link',
        value: 1
      });
    }
    
    window.open(WHATSAPP_LINK, '_blank', 'noopener,noreferrer');
  };

  const handleQRView = () => {
    // Analytics tracking for QR code interaction
    if (typeof window !== 'undefined' && 'gtag' in window && window.gtag) {
      window.gtag('event', 'whatsapp_qr_view', {
        event_category: 'engagement',
        event_label: 'qr_code_section',
        value: 1
      });
    }
  };

  return (
    <div className={`space-y-8 ${className}`}>
      {showTitle && (
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Connect with AD Vivum
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss your project? Reach out to us instantly via WhatsApp for quick responses and personalized solutions.
          </p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Direct Message Card */}
        <Card className="
          p-8 text-center space-y-6
          bg-gradient-to-br from-background/50 to-muted/50
          border-gradient
          hover:shadow-lg hover:shadow-primary/10
          transition-all duration-300
          group
        ">
          <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <MessageCircle className="h-8 w-8 text-white" />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Message AD Vivum Now
            </h3>
            <p className="text-muted-foreground text-sm">
              Click below to start a conversation with our team. We'll respond quickly to discuss your needs.
            </p>
          </div>
          
          <Button 
            onClick={handleLinkClick}
            className="
              w-full bg-gradient-to-r from-[#25D366] to-[#128C7E]
              hover:from-[#128C7E] hover:to-[#25D366]
              text-white font-medium
              transition-all duration-300
              hover:shadow-lg hover:shadow-[#25D366]/25
              hover:scale-105 active:scale-95
            "
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Chat with us on WhatsApp
          </Button>
        </Card>

        {/* QR Code Card */}
        <Card className="
          p-8 text-center space-y-6
          bg-gradient-to-br from-background/50 to-muted/50
          border-gradient
          hover:shadow-lg hover:shadow-accent/10
          transition-all duration-300
          group
        ">
          <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <QrCode className="h-8 w-8 text-white" />
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Scan & Connect Instantly
            </h3>
            <p className="text-muted-foreground text-sm">
              Use your smartphone to scan the QR code below and start chatting with us on WhatsApp.
            </p>
          </div>

          {/* QR Code Container */}
          <div 
            className="
              relative mx-auto w-48 h-48 p-4
              bg-white rounded-2xl
              shadow-lg hover:shadow-xl
              transition-all duration-300
              hover:scale-105 group-hover:rotate-2
              overflow-hidden
            "
            onClick={handleQRView}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <img
              src={whatsappQR}
              alt="WhatsApp QR Code for AD Vivum"
              className="w-full h-full object-contain rounded-lg"
              loading="lazy"
            />
            
            {/* WhatsApp logo overlay */}
            <div className="absolute bottom-2 right-2 w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center">
              <MessageCircle className="h-4 w-4 text-white" />
            </div>
          </div>

          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Smartphone className="h-4 w-4" />
            <span>Open camera & point at QR code</span>
          </div>
        </Card>
      </div>
    </div>
  );
}