<script>
  export default {
    async asyncData({ $content, params }) {
      const authors = await $content('compositors').fetch()
      return {
        compositors
      }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <h3 style="margin-top: 15px">Authors Information</h3>
     <p>This section presents information about authors</p>
   <ul>
     <li v-for="author of authors" :key="author.slug">
       <NuxtLink :to="{ name: 'compositors-slug', params: { slug: author.slug } }">{{author.name}}</NuxtLink>
     </li>
   </ul>
   <FooterView />
 </div>
</template>
<style scoped>
@import url('../static/css/indexCompositores.css');

.fila {
  display: flex;
}
</style>

