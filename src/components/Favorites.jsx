import React from 'react';
import { useSelector } from 'react-redux';
import ImageCard from './ImageCard';

// Componente para exibir imagens favoritas
const Favorites = () => {
  const favorites = useSelector(state => state.images.favorites); // Hook para acessar a lista de favoritos no estado Redux

  return (
    <div className="image-grid rounded-md mb-4 transform hover:scale-105 transition-transform duration-300">
      {favorites.length > 0 ? (
        // Mapeia as imagens favoritas e renderiza um ImageCard para cada uma
        favorites.map(image => <ImageCard key={image.id} image={image} />)
      ) : (
        // Exibe uma mensagem caso não haja favoritos
        <p className="text-center text-gray-700">No favorites added yet</p>
      )}
    </div>
  );
};

export default Favorites;
