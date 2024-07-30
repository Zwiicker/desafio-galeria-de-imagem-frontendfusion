import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Estado inicial da aplicação
const initialState = {
  images: [], // Array para armazenar as imagens
  favorites: [], // Array para armazenar as imagens favoritas
  status: 'idle', // Status da requisição (idle, loading, succeeded, failed)
  error: null, // Armazena possíveis erros
  authorFilter: '', // Novo estado para o filtro de autor
};

// Thunk assíncrono para buscar imagens da API
export const fetchImages = createAsyncThunk('images/fetchImages', async () => {
  const response = await axios.get('https://picsum.photos/v2/list');
  return response.data; // Retorna os dados da resposta da API
});

// Slice para gerenciar o estado das imagens
const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    // Redutor para adicionar uma imagem aos favoritos
    addFavorite: (state, action) => {
      const image = action.payload;
      // Adiciona a imagem aos favoritos se não estiver já presente
      if (!state.favorites.some(fav => fav.id === image.id)) {
        state.favorites.push(image);
      }
    },
    // Redutor para remover uma imagem dos favoritos
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(fav => fav.id !== action.payload.id);
    },
    // Redutor para definir o filtro de autor
    setAuthorFilter: (state, action) => {
      state.authorFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.status = 'loading'; // Atualiza o status para 'loading' quando a requisição é iniciada
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.status = 'succeeded'; // Atualiza o status para 'succeeded' quando a requisição é concluída com sucesso
        state.images = action.payload; // Armazena as imagens retornadas pela API
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.status = 'failed'; // Atualiza o status para 'failed' quando a requisição falha
        state.error = action.error.message; // Armazena a mensagem de erro
      });
  },
});

// Exporta as ações para serem usadas nos componentes
export const { addFavorite, removeFavorite, setAuthorFilter } = imageSlice.actions;

// Exporta o redutor para ser usado na configuração da store
export default imageSlice.reducer;
