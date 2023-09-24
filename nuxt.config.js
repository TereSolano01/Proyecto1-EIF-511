import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    modules: ['@nuxt/content'],
		app: {
    head: {
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Meta description' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Raleway:400,300,600' },
        { rel: 'icon', type:"image/png", href: '/static/images/favicon.png'}
      ]
    },
    build: {
      publish: 'static',
      assets: [
        'static/css/main.css',
        'static/js/main.js',
        'static/images'
      ]
    },
  },
})
