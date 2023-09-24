<script>
  export default {
    async asyncData({ $content, params }) {
      const compositor = await $content('compositors', params.slug).fetch()
      const books = await $content('albums').where({ compositorId: params.slug }).fetch()
      return { compositor, books }
    }
  }
</script>

<template>
  <div class="container">
   <HeaderView />
   <div class="row">
     <div class="three columns">
       <img class="u-max-full-width" :src="'/images/'+compositor.image" alt="Italian Trulli">
     </div>
     <div class="six columns">
      <h1>hola</h1>
       <h4>{{compositor.name}}</h4>
	   Nationality: {{compositor.nationality}}; Born: {{compositor.birth_year}}
	   Fields: {{compositor.fields}}
	   Biography
	    <nuxt-content :document="compositor" />
	 </div>
  </div>
	 <div class="three columns">
	   <h5>Books</h5>
	   <ul>
	     <li v-for="book of books" :key="book.slug">
	       <NuxtLink :to="{ name: 'compositors-slug', params: { slug: book.slug } }">{{book.title}}</NuxtLink>
	     </li>
	   </ul>
   </div>
   <FooterView />
 </div>
</template>

<style scoped>
@import url('../../static/css/details.css');
</style>
