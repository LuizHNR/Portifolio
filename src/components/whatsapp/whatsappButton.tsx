import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511973076649?text=Olá%20vim%20pelo%20seu%20portfólio"
      target="_blank"
      rel="noopener noreferrer"
        className="
        fixed bottom-6 right-6
        w-16 h-16
        bg-[#25D366]
        rounded-full
        shadow-[0_10px_30px_rgba(255, 255, 255, 0.35)]
        flex items-center justify-center
        z-[999]
        "

      aria-label="WhatsApp"
    >
      <FaWhatsapp className="text-white text-2xl animate-bounce hover:animate-none" />


    </a>
  );
}
