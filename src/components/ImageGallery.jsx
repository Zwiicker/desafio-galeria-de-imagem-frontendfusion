import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages, setAuthorFilter } from '../features/images/imageSlice';
import ImageCard from './ImageCard';

// Componente para exibir a galeria de imagens
const ImageGallery = () => {
  // Hook para despachar ações para o Redux store
  const dispatch = useDispatch();
  // Seleciona o estado global para obter imagens, filtro de autor, status e erro
  const { images, authorFilter, status, error } = useSelector(state => state.images);

  // Efeito colateral para buscar imagens quando o componente é montado ou quando o status é 'idle'
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchImages());
    }
  }, [status, dispatch]);

  // Manipula as mudanças no campo de filtro de autor
  const handleFilterChange = (event) => {
    dispatch(setAuthorFilter(event.target.value));
  };

  // Filtra imagens com base no filtro de autor
  const filteredImages = images.filter(image => 
    image.author.toLowerCase().includes(authorFilter.toLowerCase())
  );

  return (
    <div>
      {/* Campo de entrada para filtrar imagens por autor */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Filter by author..."
          value={authorFilter}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-lg w-80 text-gray-900"
        />
      </div>
      {/* Exibe status de carregamento, erro ou as imagens filtradas */}
      {status === 'loading' && <p className="text-center text-gray-500">Loading...</p>}
      {status === 'failed' && <p className="text-center text-red-500">{error}</p>}
      {status === 'succeeded' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {filteredImages.length > 0 ? (
            filteredImages.map(image => <ImageCard key={image.id} image={image} />)
          ) : (
            <p className="text-center text-gray-500">No images found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
