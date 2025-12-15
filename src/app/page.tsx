import Header from '@/components/layout/Header';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Trouvez votre prochain talent
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            La plateforme qui connecte les talents aux opportunités professionnelles. Déposez votre CV ou découvrez des profils prometteurs.
          </p>
          
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Link
                href="/upload"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Déposer mon CV
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link
                href="/search"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
              >
                Voir les CV
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Comment ça marche ?
          </h2>
          
          <div className="mt-10">
            <div className="relative">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                        <span className="text-white text-2xl">1</span>
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Créez votre profil</h3>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-base text-gray-500">
                        Téléchargez votre CV et complétez votre profil en quelques minutes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                        <span className="text-white text-2xl">2</span>
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Soyez visible</h3>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-base text-gray-500">
                        Votre profil est visible par des milliers de recruteurs à la recherche de talents comme vous.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                        <span className="text-white text-2xl">3</span>
                      </div>
                      <div className="ml-5">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Recevez des offres</h3>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-base text-gray-500">
                        Les recruteurs vous contactent directement pour des opportunités correspondant à votre profil.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white mt-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-500">
            &copy; 2025 CV Connect. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
