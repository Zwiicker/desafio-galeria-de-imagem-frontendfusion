import React, { useState } from 'react';
import FavoriteButton from './FavoriteButton';

// Componente para exibir detalhes de uma imagem
const ImageCard = ({ image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div 
        className="bg-gray-700 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        onClick={handleOpenModal}
      >
        <img 
          src={image.download_url} 
          alt={image.author} 
          className="custom-img-size rounded-md mb-4 transform hover:scale-105 transition-transform duration-300"
        />
        <h2 className="text-lg font-semibold mb-2 text-center">{image.author}</h2>
      </div>

      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4 z-50"
          onClick={handleCloseModal}
        >
          <div 
            className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto relative flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{image.author}</h2>
              <FavoriteButton image={image} />
            </div>
            <img 
              src={image.download_url} 
              alt={image.author} 
              className="w-full h-auto object-cover rounded-lg mb-4"
            />
            <p className="text-gray-700 mb-2">Width: {image.width}</p>
            <p className="text-gray-700 mb-4">Height: {image.height}</p>
            <button 
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition-colors duration-300 self-center"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
