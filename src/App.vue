<template>
  <header>
    <input 
      type="text"
      class="header-input"
      placeholder="Search"
      v-model="keyword"
      @change="searchMovies"
    />
  </header>
  <main>
    <div v-for="movie of movies" :key="movie.imdbID" class="movie-item">
      <img :src="movie.Poster" :alt="movie.Title" class="movie-poster">
      <h3 class="py-3 text-lg text-center">{{ movie.Title }} ({{ movie.Year }})</h3>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue';
  import store from './store/index';

  const keyword = ref('');
  const movies = computed(() => store.state.movies);

  console.log(store.state.movies)

  function searchMovies() {
    store.dispatch('searchMovies', keyword.value);
    console.log(store.state.movies)
  }
</script>

<style scoped>
  header {
    height: 10rem;
  }

  .header-input {
    width: 20rem;
  }

  .movie-item {
    display: flex;
  }

  .movie-poster {
    width: 10rem;
  }
</style>
