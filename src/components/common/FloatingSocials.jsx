export default function FloatingSocials({
  whatsappLink = "https://wa.me/213553374615",
  instagramLink = "https://www.instagram.com/hk.3.5/",
}) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="
          group
          flex h-14 w-14 items-center justify-center
          rounded-full
          bg-[#25D366]
          shadow-lg
          transition-all duration-300
          hover:scale-110 hover:shadow-2xl
          active:scale-95
        "
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffffff" className="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
      </a>

      
      <a
        href={instagramLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="
          group
          flex h-14 w-14 items-center justify-center
          rounded-full
          bg-gradient-to-tr
          from-yellow-400
          via-pink-500
          to-purple-600
          shadow-lg
          transition-all duration-300
          hover:scale-110 hover:shadow-2xl
          active:scale-95
        "
      >
        <svg
          viewBox="0 0 24 24"
          className="h-9 w-9 fill-white"
        >
          <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 1.8h8.5c2.18 0 3.95 1.77 3.95 3.95v8.5c0 2.18-1.77 3.95-3.95 3.95h-8.5c-2.18 0-3.95-1.77-3.95-3.95v-8.5C3.8 5.57 5.57 3.8 7.75 3.8zm8.95 1.35a1.08 1.08 0 100 2.16 1.08 1.08 0 000-2.16zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.8A3.2 3.2 0 1112 15.2 3.2 3.2 0 0112 8.8z" />
        </svg>
      </a>
    </div>
  );
}