import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/images/imageSlice';

// Componente do botão de favoritos
const FavoriteButton = ({ image }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.images.favorites);
  const isFavorite = favorites.some(fav => fav.id === image.id);

  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(image));
    } else {
      dispatch(addFavorite(image));
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`p-4 rounded-full border-2 transition-all duration-300 ease-in-out ${
        isFavorite ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white border-yellow-600 shadow-lg' : 
        'bg-gray-300 text-gray-700 border-gray-400 shadow-md'
      } hover:shadow-xl hover:scale-105`}
      style={{ fontSize: '1.5rem' }} // Tamanho do ícone
    >
      {isFavorite ? '★' : '☆'}
    </button>
  );
};

export default FavoriteButton;
