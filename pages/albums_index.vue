<!-- pages/albums_index.vue -->
<template>
  <div>
    <HeaderView />
    <h2 style="margin-top: 15px">Álbumes</h2>
    <p>Esta sección te sumerge en el fascinante mundo de los álbumes, ofreciendo detalles y datos intrigantes sobre cada uno de ellos.</p>
    <div class="container centered-content">
      <ul>
        <ContentList path="/albums" v-slot="{ list }">
          <div class="grid-container">
            <span v-for="album in list" :key="album._path" class="grid-item">
  <NuxtLink :to="album._path">
    <NuxtLink :to="album._path">{{ album.title }}</NuxtLink>
    <p class="goto"><NuxtLink :to="album._path">Ver album<i class="fa-solid fa-chevron-right" style="color: #000000;"></i></NuxtLink></p>
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
@import url('../static/css/index.css');

.fila {
  display: flex;
}
</style>
