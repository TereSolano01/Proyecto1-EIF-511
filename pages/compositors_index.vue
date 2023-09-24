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
@import url('../static/css/indexCompositores.css');


.fila {
  display: flex;
}
</style>