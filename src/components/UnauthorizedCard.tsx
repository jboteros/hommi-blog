import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import React, { useCallback } from "react";

interface UnauthorizedCardProps {
  title?: string;
  message?: string;
  buttonText?: string;
  supportEmail?: string;
}

export default function UnauthorizedCard({
  title = "Sin autorización",
  message = "No estas autorizado para ingresar a este modulo.",
  buttonText = "Continuar",
  supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL,
}: UnauthorizedCardProps) {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = useCallback(() => {
    logout();
    router.push("/login");
  }, [logout, router]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-white">
      <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center w-full max-w-md">
        {/* Cloud with lightning icon (SVG) */}
        <svg
          width="64"
          height="64"
          fill="none"
          viewBox="0 0 64 64"
          className="mb-4"
        >
          <path d="M32 48l6-10h-4l4-8-6 10h4l-4 8z" fill="#38bdf8" />
          <path
            d="M48 40a12 12 0 10-24 0H16a8 8 0 100 16h32a8 8 0 100-16h-8z"
            fill="#a5b4fc"
          />
          <path
            d="M32 8a16 16 0 00-16 16c0 1.1.1 2.2.3 3.2A12 12 0 0016 40h32a12 12 0 00-.3-3.2A16 16 0 0032 8z"
            fill="#bae6fd"
          />
        </svg>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{title}</h2>
        <p className="text-gray-500 mb-6">{message}</p>
        <button
          onClick={handleLogout}
          className="mb-4 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {buttonText}
        </button>
        <hr className="w-full my-4 border-gray-200" />
        <a
          href={`mailto:${supportEmail}`}
          className="text-sm text-blue-600 hover:underline"
        >
          ¿Necesitas ayuda?
        </a>
      </div>
    </div>
  );
}
