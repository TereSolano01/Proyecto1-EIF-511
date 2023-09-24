<template>
  <div>
    <HeaderView />
    <div>
      <ContentDoc v-slot="{doc}">
        <h4>{{doc.title}}</h4>
        <div class="content-section">
          <div class="image-and-title">
            <div class="image-column">
              <img :src="'/images/'+doc.image">
            </div>
            <div class="title-column">
              <div>
                <p>Compositores: <NuxtLink :to="'/compositors/'+doc.compositorId">{{doc.compositor}}</NuxtLink></p>   
                  <p> Año staticacion: {{doc.year}};</p>
                  <p>Generos: {{doc.fields}}</p>
                  <p>Pelicula: <NuxtLink :to="'/movies/'+doc.movieId">{{doc.movie}}</NuxtLink></p> 
              </div>
                  <div class="info-section">
                      <pre></pre>
                      <ContentRenderer :value="doc" />
                  </div>
               </div>
             </div>
            </div>
          <div>
        </div>
      </ContentDoc>
    </div>
    <FooterView />
  </div>
</template>

<style scoped>
@import url('../../static/css/details.css');
</style>
