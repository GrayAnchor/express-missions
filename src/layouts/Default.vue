<template>
  <div class="relative" >
    <header :class="[bgTransparent ? 'bg-opacity-0' : 'bg-opacity-1']"  class="transition-bg-opacity duration-100 bg-white px-2 py-1 fixed top-0 left-0 w-full z-50"> 
      <nav class="block w-full flex items-center mx-auto max-w-large mx-auto justify-between">
          <a class="inline-block w-14 h-6" href="/"><img class="w-full h-full object-contain" src="/images/logo.png"></a>
          <div class="ml-auto max-w-nav w-full flex items-center justify-between font-display-sans uppercase text-20 tracking-wider" >
              <a @click="bgTransparent = !bgTransparent" href="#the-need" class="hover:opacity-75 duration-200 transition-opacity" >About Us</a>
              <a href="#the-need" class="hover:opacity-75 duration-200 transition-opacity" >Contact</a>
              <a href="#the-need" class="text-red hover:opacity-75 duration-200 transition-opacity" >Give</a>
          </div>
      </nav>
    </header>
    <slot/>
    <footer class="w-full bg-blue-100 h-32">
      This is the footer
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data () {
    return {
      bgTransparent: true,
      message: ''
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    }
  }
}
</script>

<style>

</style>
