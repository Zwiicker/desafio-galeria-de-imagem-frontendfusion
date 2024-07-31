import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ImageGallery from './components/ImageGallery';
import Favorites from './components/Favorites';
import ImageDetails from './components/ImageDetails.jsx';
import { Bars3Icon, PhotoIcon, StarIcon, ChevronLeftIcon } from '@heroicons/react/24/outline'; // Importando ícones
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Ícones do Font Awesome
import './index.css'; // Importa o arquivo CSS com Tailwind

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar a visibilidade do menu

  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-900 text-gray-200 font-sans antialiased">
          <div className="flex flex-1">
            {/* Linha Vertical de Separação */}
            <div
              className={`transition-transform duration-300 ${isMenuOpen ? 'block w-2 bg-white' : 'hidden'} md:block`}
              style={{ height: '100vh' }}
            />

            {/* Menu Lateral */}
            <nav className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-4 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} w-64 border-r-4 border-gray-400 rounded-l-lg shadow-md`}>
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <button
                    className="text-gray-400 hover:text-white border border-gray-600 rounded-full p-2 transition-all duration-300 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 mr-4"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <ChevronLeftIcon className="h-6 w-6" />
                  </button>
                  <div className="text-white text-2xl font-bold">Menu</div>
                </div>
                <ul className="flex flex-col flex-grow">
                  <li>
                    <Link
                      to="/"
                      className="flex items-center p-2 text-lg font-semibold text-gray-200 hover:bg-gray-700 rounded"
                    >
                      <PhotoIcon className="h-6 w-6 mr-2 text-gray-300" />
                      Image Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/favorites"
                      className="flex items-center p-2 text-lg font-semibold text-gray-200 hover:bg-gray-700 rounded"
                    >
                      <StarIcon className="h-6 w-6 mr-2 text-gray-300" />
                      Favorites
                    </Link>
                  </li>
                  <div className="mt-auto">
                    <button
                      className="flex items-center p-2 text-gray-400 hover:text-white border border-gray-600 rounded-full w-full mt-4 transition-all duration-300 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <ChevronLeftIcon className="h-6 w-6" />
                      <span className="ml-2">Close</span>
                    </button>
                  </div>
                </ul>
              </div>
            </nav>

            {/* Conteúdo Principal */}
            <div className={`flex-1 flex flex-col transition-all duration-300 ${isMenuOpen ? 'ml-64' : 'ml-0'}`}>
              <header className="bg-gray-800 text-white p-4 shadow-md flex items-center">
                <button
                  className="flex items-center justify-center text-gray-400 hover:text-white border border-gray-600 rounded-full p-2 transition-all duration-300 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 mr-4"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Bars3Icon className="h-6 w-6" />
                </button>
                <h1 className="text-2xl font-bold">Image Gallery</h1>
              </header>

              <main className="flex-1 p-4 overflow-y-auto">
                <Routes>
                  <Route path="/" element={<ImageGallery />} />
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/image/:id" element={<ImageDetails />} />
                </Routes>
              </main>
            </div>
          </div>

          {/* Rodapé */}
          <footer className="bg-gray-800 text-gray-200 py-4 text-center flex flex-col items-center">
            <span className="text-sm mb-2">© 2024 Henrique Zwicker</span>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/henriquezgm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/henriquewz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
              </a>
            </div>
          </footer>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
