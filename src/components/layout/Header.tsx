import Link from 'next/link';
import { FaUserTie, FaSearch } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center
          
          ">
            <Link href="/" className="flex items-center">
              <FaUserTie className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">CV Connect</span>
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/search" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
            >
              <FaSearch className="mr-2" />
              Trouver un CV
            </Link>
            <Link
              href="/upload"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Déposer mon CV
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
