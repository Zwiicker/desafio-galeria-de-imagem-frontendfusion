import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import '../index.css'; // Importa o arquivo CSS

// Componente para exibir detalhes de uma imagem
const ImageCard = ({ image }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 image-card">
      <img 
        src={image.download_url} 
        alt={image.author} 
        className="custom-img-size rounded-md mb-4 transform hover:scale-105 transition-transform duration-300" // Usar a classe personalizada
      />
      <h2 className="text-lg font-semibold text-gray-800 mb-2 text-left">{image.author}</h2>
      <div className="flex items-center mb-2">
        <FavoriteButton image={image} />
        <Link 
          to={`/image/${image.id}`} 
          className="text-blue-600 hover:text-blue-800 font-medium ml-4"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ImageCard;
