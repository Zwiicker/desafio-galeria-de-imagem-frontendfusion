import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../features/images/imageSlice';

// Componente do botão de favoritos
const FavoriteButton = ({ image }) => {
  const dispatch = useDispatch(); // Hook para obter a função dispatch do Redux
  const favorites = useSelector(state => state.images.favorites); // Hook para acessar a lista de favoritos no estado Redux
  const isFavorite = favorites.some(fav => fav.id === image.id); // Verifica se a imagem já está nos favoritos

  // Função para lidar com o clique no botão
  const handleClick = () => {
    if (isFavorite) {
      dispatch(removeFavorite(image)); // Remove a imagem dos favoritos se já estiver presente
    } else {
      dispatch(addFavorite(image)); // Adiciona a imagem aos favoritos se não estiver presente
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-full transition-colors duration-300 ${
        isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'
      }`}
    >
      {isFavorite ? '★' : '☆'} {/* Ícone de estrela cheia para favoritos e estrela vazia para não-favoritos */}
    </button>
  );
};

export default FavoriteButton;
