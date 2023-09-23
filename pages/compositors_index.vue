<!-- pages/albums_index.vue -->





<template>
  <div>
    <HeaderView />
    <h2 style="margin-top: 15px">Compositores</h2>
    <p>Esta sección presenta información sobre compositores.</p>
    <div class="container centered-content">
      <ul>
        <ContentList path="/compositors" v-slot="{ list }">
          <div class="grid-container">
            <span v-for="compositor in list" :key="compositor._path" class="grid-item">
              <NuxtLink :to="compositor._path">
                <img class="u-max-full-width" :src="'/images/'+compositor.image" alt="Descripción de la imagen">
                <NuxtLink :to="compositor._path">{{ compositor.name }}</NuxtLink>
                <p class="goto"><NuxtLink :to="compositor._path">Ver compositor<i class="fa-solid fa-chevron-right" style="color: #000000;"></i></NuxtLink></p>
              </NuxtLink>
            </span>
          </div>
        </ContentList>
      </ul>
    </div>
    <FooterView />
  </div>
</template>
<style scoped>
@import url('../public/css/indexCompositores.css');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Martel:wght@800&family=Playfair+Display:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Neuton:ital@1&display=swap');

.fila {
  display: flex;
}
</style>