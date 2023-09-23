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
                  <p> Director: {{doc.Director}}</p>
                  <p>Año: {{doc.year}}</p>
                  <p>Genero: {{doc.genero}}</p>
              </div>
              <div class="info-section">
                      <pre></pre>
                      <ContentRenderer :value="doc" />
                      <ul>
                        <ContentQuery path="/albums" :where="{ movieId: doc.id }" v-slot="{ data }">
                        <li v-for="compositor in data" :key="compositor._path">
                        <NuxtLink :to="compositor._path">{{ compositor.title }}</NuxtLink>
                        </li>
                        </ContentQuery>
                      </ul>
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
@import url('https://fonts.googleapis.com/css2?family=Neuton:ital,wght@0,300;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Serif&display=swap');
</style>
