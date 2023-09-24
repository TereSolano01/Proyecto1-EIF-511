<script>
async function fetchCompositor(params) {
  const compositor = await $content('compositors', params.slug).fetch()

  if (!compositor) {
    return {
      error: true
    }
  }

  return {
    compositor
  }
}
</script>

<template>
  <div>
    <HeaderView />
    <div>
      <ContentDoc v-slot="{doc}">
        <h4>{{doc.name}}</h4>
        <div class="content-section">
          <div class="image-and-title">
            <div class="image-column">
              <img :src="'/images/'+doc.image">
            </div>
            <div class="title-column">
              <div>
                  <p> Nacionalidad: {{doc.nationality}}</p>
                  <p>Año de nacimiento: {{doc.birth_year}}</p>
                  <p>Fields: {{doc.fields}}</p>
              </div>
                  <div class="info-section">
                      <pre></pre>
                      <ContentRenderer :value="doc" />
                      <ul>
                        <ContentQuery path="/albums" :where="{ compositorId: doc.id }" v-slot="{ data }">
                        <li v-for="album in data" :key="album._path">
                        <NuxtLink :to="album._path">{{ album.title }}</NuxtLink>
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
</style>
