import React from 'react';
import { useSelector } from 'react-redux';
import ImageCard from './ImageCard';

// Componente para exibir imagens favoritas
const Favorites = () => {
  const favorites = useSelector(state => state.images.favorites); // Hook para acessar a lista de favoritos no estado Redux

  return (
    <div className="p-4 bg-gray-800 min-h-screen flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg">
        {favorites.length > 0 ? (
          // Mapeia as imagens favoritas e renderiza um ImageCard para cada uma
          favorites.map(image => <ImageCard key={image.id} image={image} />)
        ) : (
          // Exibe uma mensagem caso não haja favoritos
          <p className="text-center text-gray-400">No favorites added yet</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
