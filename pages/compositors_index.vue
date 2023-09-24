<!-- pages/albums_index.vue -->
<template>
  <div class="grid-container">
    <span v-for="album in list" :key="album._path" class="grid-item">
  <NuxtLink :to="album._path">
    <img class="u-max-full-width" :src="'/images/'+album.image" alt="Descripción de la imagen">
    <NuxtLink :to="album._path">{{ album.title }}</NuxtLink>
    <p class="goto"><NuxtLink :to="album._path">Ver album<i class="fa-solid fa-chevron-right" style="color: #000000;"></i></NuxtLink></p>
  </NuxtLink>
</span>
            
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
};
</script>
