import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,38%)] text-[hsl(0,0%,100%)] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 animate-bounce"
      aria-label="WhatsApp"
      style={{ animationDuration: "2s", animationIterationCount: "3" }}
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;
