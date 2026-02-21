import { MessageCircle } from "lucide-react";
import whatsappIcon from "../assets/whatsapp.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5511958624537?text=Olá! Gostaria de solicitar um orçamento."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 right-6 z-40 bg-[#25D366] hover:bg-[#1ebe5d] w-20 h-20 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-20 h-20 object-contain" />
    </a>
  );
};

export default WhatsAppButton;
