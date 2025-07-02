import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page non trouvée - DMS",
  description: "La page que vous recherchez n'existe pas",
};

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Page non trouvée
          </h2>
          <p className="text-gray-600 mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>
        
        <div className="space-x-4">
          <Link
            href="/"
            className="inline-block bg-primary px-6 py-3 text-white font-semibold rounded-lg hover:bg-primary/80 transition-colors"
          >
            Retour à l'accueil
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-gray-200 px-6 py-3 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
} 