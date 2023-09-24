<!-- pages/index.vue -->
<template>
 <div id="blog" class="text-typography_primary, container">
   <HeaderView />
   <h2 class="titulo-principal">Soundtracks Populares</h2>
    <div class="carousel">
    <div class="carousel-inner">
        <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked">
        <div class="carousel-item">
          <img src="/static/images/movies/cruella-soundtrack.jpg" alt="Imagen de la noticia" />
        </div>
        <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item">
          <img src="/static/images/movies/maxresdefault.jpg" alt="Imagen de la noticia" />
        </div>
        <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="">
        <div class="carousel-item">
          <img src="/static/images/movies/Black-Panther-Wakanda-Forever-Soundtrack.jpg" alt="Imagen de la noticia" />
        </div>
        <label for="carousel-3" class="carousel-control ">‹</label>
        <label for="carousel-2" class="carousel-control ">›</label>
        <label for="carousel-1" class="carousel-control ">‹</label>
        <label for="carousel-3" class="carousel-control ">›</label>
        <label for="carousel-2" class="carousel-control ">‹</label>
        <label for="carousel-1" class="carousel-control ">›</label>
        <ol class="carousel-indicators">
            <li>
                <label for="carousel-1" class="carousel-bullet">•</label>
            </li>
            <li>
                <label for="carousel-2" class="carousel-bullet">•</label>
            </li>
            <li>
                <label for="carousel-3" class="carousel-bullet">•</label>
            </li>
        </ol>
    </div>
</div>
<div>
  <div class="list">
  <div>
    <NuxtLink style="flex: 1;" to="/albums_index">Álbumes</NuxtLink>
    <p>Descubre una variedad de soundtracks de películas que dan vida a tus escenas favoritas. Sumérgete en emocionantes mundos cinematográficos y embárcate en un viaje musical inolvidable.</p>
  </div>
  <div>
    <NuxtLink style="flex: 1;" to="/compositors_index">Compositores</NuxtLink>
    <p>Descubre los genios tras las bandas sonoras de tus películas favoritas. Conoce compositores que han enriquecido la experiencia cinematográfica, desde clásicos hasta contemporáneos. Explora su impacto en el cine a través de la música.</p>
  </div>
  <div>
    <NuxtLink style="flex: 1;" to="/movies_index">Películas</NuxtLink>
    <p>Descubre películas que te cautivarán. Nuestra selección abarca géneros y épocas, ofreciendo experiencias únicas. Desde clásicos hasta joyas contemporáneas, explora un mundo de emociones y aventuras.</p>
      </div>
    </div>
  </div>
  <FooterView />
 </div>
</template>

<style scoped>
@import url('../static/css/header.css');
@import url('../static/css/carroussel.css');


.fila {
  display: flex;
}
</style>

<script>
export default {
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
  },
};
</script>
