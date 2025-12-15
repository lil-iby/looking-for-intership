'use client';

import { useState } from 'react';
import Header from '../components/layout/Header';
import { FaSearch, FaFilePdf, FaEnvelope, FaMapMarkerAlt, FaBriefcase } from 'react-icons/fa';

// Données de démonstration - À remplacer par une API réelle
type CV = {
  id: number;
  name: string;
  title: string;
  location: string;
  experience: string;
  skills: string[];
  match: number;
  date: string;
};

const mockCVs: CV[] = [
  {
    id: 1,
    name: 'Marie Dupont',
    title: 'Développeuse Full Stack',
    location: 'Paris, France',
    experience: '3 ans d\'expérience',
    skills: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
    match: 92,
    date: 'Mis à jour il y a 2 jours'
  },
  {
    id: 2,
    name: 'Thomas Martin',
    title: 'Data Scientist',
    location: 'Lyon, France',
    experience: '5 ans d\'expérience',
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'],
    match: 88,
    date: 'Mis à jour hier'
  },
  {
    id: 3,
    name: 'Sophie Lambert',
    title: 'UX/UI Designer',
    location: 'Toulouse, France',
    experience: '4 ans d\'expérience',
    skills: ['Figma', 'Adobe XD', 'UI Design', 'Prototypage'],
    match: 85,
    date: 'Mis à jour il y a 1 semaine'
  },
  {
    id: 4,
    name: 'Alexandre Petit',
    title: 'DevOps Engineer',
    location: 'Bordeaux, France',
    experience: '6 ans d\'expérience',
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
    match: 91,
    date: 'Mis à jour aujourd\'hui'
  },
  {
    id: 5,
    name: 'Camille Leroy',
    title: 'Product Manager',
    location: 'Lille, France',
    experience: '4 ans d\'expérience',
    skills: ['Agile', 'Scrum', 'Product Strategy', 'User Research'],
    match: 83,
    date: 'Mis à jour il y a 3 jours'
  },
  {
    id: 6,
    name: 'Nicolas Bernard',
    title: 'Mobile Developer',
    location: 'Marseille, France',
    experience: '3 ans d\'expérience',
    skills: ['React Native', 'iOS', 'Android', 'Redux'],
    match: 89,
    date: 'Mis à jour il y a 5 jours'
  }
];

export default function SearchCV() {
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [skillFilter, setSkillFilter] = useState('');

  const filteredCVs = mockCVs.filter(cv => {
    const matchesSearch = cv.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         cv.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         cv.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLocation = !locationFilter || 
                          cv.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    const matchesExperience = !experienceFilter || 
                            cv.experience.toLowerCase().includes(experienceFilter.toLowerCase());
    
    const matchesSkill = !skillFilter || 
                        cv.skills.some(skill => 
                          skill.toLowerCase().includes(skillFilter.toLowerCase())
                        );
    
    return matchesSearch && matchesLocation && matchesExperience && matchesSkill;
  });

  const handleContact = (cvId: number) => {
    // Logique pour contacter le candidat
    console.log(`Contacting candidate with ID: ${cvId}`);
    alert('Fonctionnalité de contact à implémenter');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Trouver des CV</h1>
          <p className="mt-2 text-gray-600">Parcourez les profils des candidats et trouvez les talents qui correspondent à vos besoins.</p>
        </div>
        
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="col-span-1 md:col-span-2">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700">Recherche par mot-clé</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Développeur, Designer, Marketing..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">Localisation</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaMapMarkerAlt className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Paris, Lyon..."
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">Expérience</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaBriefcase className="h-5 w-5 text-gray-400" />
                </div>
                <select
                  id="experience"
                  name="experience"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  value={experienceFilter}
                  onChange={(e) => setExperienceFilter(e.target.value)}
                >
                  <option value="">Tous les niveaux</option>
                  <option value="débutant">Débutant</option>
                  <option value="1 an">1 an d'expérience</option>
                  <option value="2 ans">2 ans d'expérience</option>
                  <option value="3 ans">3 ans d'expérience</option>
                  <option value="4 ans">4 ans d'expérience</option>
                  <option value="5 ans">5+ ans d'expérience</option>
                </select>
              </div>
            </div>
          </div>
          
          <div className="mt-4">
            <label htmlFor="skills" className="block text-sm font-medium text-gray-700">Compétences</label>
            <input
              type="text"
              name="skills"
              id="skills"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
              placeholder="React, Python, Design..."
              value={skillFilter}
              onChange={(e) => setSkillFilter(e.target.value)}
            />
          </div>
        </div>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {filteredCVs.length > 0 ? (
              filteredCVs.map((cv) => (
                <li key={cv.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                          <span className="text-indigo-600 font-medium">
                            {cv.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-indigo-600">{cv.name}</div>
                          <div className="text-sm text-gray-500">{cv.title}</div>
                        </div>
                      </div>
                      <div className="ml-2 flex-shrink-0 flex">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {cv.match}% de correspondance
                        </span>
                      </div>
                    </div>
                    
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <div className="mr-6 flex items-center text-sm text-gray-500">
                          <FaMapMarkerAlt className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                          {cv.location}
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                          <FaBriefcase className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />
                          {cv.experience}
                        </div>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        {cv.date}
                      </div>
                    </div>
                    
                    <div className="mt-2">
                      <div className="flex flex-wrap gap-2">
                        {cv.skills.map((skill, index) => (
                          <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-end space-x-3">
                      <button
                        type="button"
                        className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <FaFilePdf className="-ml-0.5 mr-2 h-4 w-4" />
                        Voir le CV
                      </button>
                      <button
                        type="button"
                        onClick={() => handleContact(cv.id)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <FaEnvelope className="-ml-1 mr-2 h-4 w-4" />
                        Contacter
                      </button>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="px-4 py-12 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun résultat trouvé</h3>
                <p className="mt-1 text-sm text-gray-500">Essayez de modifier vos critères de recherche.</p>
              </li>
            )}
          </ul>
        </div>
        
        {filteredCVs.length > 0 && (
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Précédent
              </a>
              <a
                href="#"
                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Suivant
              </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Affichage de <span className="font-medium">1</span> à <span className="font-medium">{filteredCVs.length}</span> sur{' '}
                  <span className="font-medium">{filteredCVs.length}</span> résultats
                </p>
              </div>
              <div>
                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Précédent</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    1
                  </a>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    2
                  </a>
                  <a
                    href="#"
                    className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                  >
                    3
                  </a>
                  <a
                    href="#"
                    className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <span className="sr-only">Suivant</span>
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
