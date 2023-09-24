<template>
  <div id="app">
    <h1>Compositores</h1>
    <ContentList path="/compositors" v-slot="{ list }">
      {
        this.compositores.length === 0 &&
        <div class="not-found">
          <h2>No se encontraron compositores</h2>
          <p>Por favor, intenta con un compositor diferente.</p>
        </div>
      }
    </ContentList>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import ContentList from '@/components/ContentList'

export default defineComponent({
  name: 'App',
  components: {
    ContentList
  },
  asyncData({ $content }) {
    const compositores = $content('compositors').fetch()

    return {
      compositores
    }
  },
  render() {
    return (
      <div>
        <h1>Compositores</h1>
        <ContentList path="/compositors" v-slot="{ list }">
          {
            this.compositores.length === 0 &&
            <div class="not-found">
              <h2>No se encontraron compositores</h2>
              <p>Por favor, intenta con un compositor diferente.</p>
            </div>
          }
        </ContentList>
      </div>
    )
  }
})
</script>

<style scoped>
@import url('../static/css/indexCompositores.css');

.fila {
  display: flex;
}
</style>
