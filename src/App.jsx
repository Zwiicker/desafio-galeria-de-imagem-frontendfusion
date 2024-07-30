import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import ImageGallery from './components/ImageGallery';
import Favorites from './components/Favorites';
import ImageDetails from './components/ImageDetails.jsx';

const App = () => {
  return (
    // Provider do Redux para fornecer a store a todos os componentes
    <Provider store={store}>
      {/* Configuração do React Router para gerenciar as rotas da aplicação */}
      <Router>
        <div className="min-h-screen bg-gray-100">
          {/* Cabeçalho da aplicação */}
          <header className="bg-blue-600 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
              <h1 className="text-2xl font-bold">Image Gallery</h1>
              <nav className="nav text-2xl font-bold">
                {/* Link para a página de favoritos */}
                <Link to="/favorites">Favorites</Link>
              </nav>
            </div>
          </header>
          {/* Conteúdo principal da aplicação */}
          <main className="p-4">
            <Routes>
              {/* Rota para a galeria de imagens */}
              <Route path="/" element={<ImageGallery />} />
              {/* Rota para a página de favoritos */}
              <Route path="/favorites" element={<Favorites />} />
              {/* Rota para os detalhes de uma imagem específica */}
              <Route path="/image/:id" element={<ImageDetails />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
