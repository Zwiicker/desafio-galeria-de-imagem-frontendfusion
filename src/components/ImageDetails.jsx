import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Componente para exibir os detalhes de uma imagem
const ImageDetails = () => {
  // Obtém o ID da imagem da URL
  const { id } = useParams();
  // Hook para navegação programática
  const navigate = useNavigate();
  // Seleciona a imagem do estado global usando o ID da URL
  const image = useSelector(state => state.images.images.find(img => img.id === id));

  // Verifica se a imagem foi encontrada
  if (!image) {
    // Se a imagem não for encontrada, exibe uma mensagem de erro
    return <div className="text-center text-gray-300">Image not found</div>;
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-900 bg-opacity-90 p-6 rounded-lg shadow-lg max-w-lg mx-auto relative">
        {/* Exibe o autor da imagem */}
        <h2 className="text-3xl font-semibold text-gray-200 mb-4">{image.author}</h2>
        <img 
          src={image.download_url} 
          alt={image.author} 
          className="w-[500px] h-[400px] object-cover rounded-lg mb-4" 
        />
        {/* Exibe as dimensões da imagem */}
        <p className="text-gray-400 mb-2">Width: {image.width}</p>
        <p className="text-gray-400 mb-4">Height: {image.height}</p>
        {/* Botão para fechar a visualização e retornar à galeria */}
        <button 
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors duration-300 absolute bottom-4 right-4"
          onClick={() => navigate('/')} // Navega de volta para a página inicial
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ImageDetails;
