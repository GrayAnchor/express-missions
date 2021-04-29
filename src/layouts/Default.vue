<template>
  <div class="relative" >
    <header :class="[bgTransparent ? 'bg-opacity-0' : 'bg-opacity-1']"  class="transition-bg-opacity duration-100 bg-beige px-2 py-1 fixed top-0 left-0 w-full z-50"> 
      <nav class="block w-full flex items-center mx-auto max-w-large mx-auto justify-between">
          <a class="inline-block sm:w-14 w-6 h-6" href="/"><img class="w-full h-full sm:block hidden object-contain" src="/images/logo.png"><img class="w-full h-full sm:hidden object-contain" src="/images/logo-small.png"></a>
          <div class="ml-auto max-w-nav w-full flex items-center justify-between font-display-sans uppercase sm:text-20 text-16 sm:pl-0 pl-4 tracking-wider" >
              <a @click="bgTransparent = !bgTransparent" href="#the-need" class="hover:opacity-75 duration-200 transition-opacity" >About Us</a>
              <a href="#the-need" class="hover:opacity-75 duration-200 transition-opacity" >Contact</a>
              <a href="#the-need" class="text-red hover:opacity-75 duration-200 transition-opacity" >Give</a>
          </div>
      </nav>
    </header>
    <slot/>
    <footer class="py-2 px-2">
      <div class="max-w-large mx-auto justify-between items-center flex flex-col mb-4" >
          <div class="w-full mx-auto justify-between items-center flex sm:flex-row flex-col mb-4" >
            <a class="inline-block w-16" href="/"><img class="w-full h-full object-contain sm:mb-0 mb-4" src="/images/logo.png"></a>
            <a href="#" class="inline-block text-24 uppercase hover:text-red transition-all duration-200 tracking-wide font-display-sans">Donate</a>
          </div>
          <div>
            <a href="#facebook" class="h-5 w-5 p-1 fill-current text-white bg-red rounded-full inline-block hover:opacity-75 transition-opacity duration-200" >
                <svg class="w-full h-full object-contain" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 438 817.78" style="enable-background:new 0 0 438 817.78;" xml:space="preserve">
                <g>
                  <path d="M130,817.78V460H0V312h130V199.2C130,70.88,206.44,0,323.39,0C379.41,0,438,10,438,10v126h-64.56
                    c-63.6,0-83.44,39.47-83.44,79.96V312h142l-22.7,148H290v357.78C290,817,130,817,130,817.78z"/>
                </g>
                </svg>
            </a>
            <a href="#twitter" class="h-5 w-5 p-1 fill-current text-white bg-red rounded-full inline-block ml-2 hover:opacity-75 transition-opacity duration-200">
              <svg class="w-full h-full object-contain" version="1.1" id="Logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 248 204" style="enable-background:new 0 0 248 204;" xml:space="preserve">
                <g id="Logo_1_">
                  <path id="white_background" d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
                    C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
                    c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
                    c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
                    c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
                    c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"/>
                </g>
                </svg>
            </a>
            <a href="#email" class="h-5 w-5 p-1 fill-current text-white bg-red rounded-full inline-block ml-2 hover:opacity-75 transition-opacity duration-200">
              <svg class="w-full h-full object-contain" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 484.01 280.08" style="enable-background:new 0 0 484.01 280.08;" xml:space="preserve">
                <g>
                  <path d="M318,155.7L484.01,51.08c-0.01,61.98-0.02,167.08-0.04,200.05c0,3.46-3.78,5.57-6.73,3.77l-152-93.09
                    C322.41,160.09,320,158.02,318,155.7z"/>
                </g>
                <g>
                  <path d="M158.78,161.82l-152,93.09c-2.95,1.8-6.73-0.32-6.73-3.77C0.02,218.16,0.01,113.06,0,51.08L166.01,155.7
                    C164.01,158.02,161.6,160.09,158.78,161.82z"/>
                </g>
                <g>
                  <path d="M289,177.08l-38.14,23.25c-5.12,3.12-11.49,3.12-16.61,0l-39.24-23.93L39.8,271.51c-3.98,2.44-2.25,8.57,2.42,8.57h397.12
                    c4.66,0,6.4-6.11,2.43-8.57L289,177.08z"/>
                </g>
                  <g>
                    <path d="M466.91,0H16C7.08,0,2.22,6.01,0.64,11.64c-1.58,5.63-0.56,13.29,7.05,17.93l225.46,137.46c5.12,3.12,11.49,3.12,16.61,0
                      L475.21,29.58c7.61-4.64,8.63-12.31,7.05-17.93C480.69,6.01,475.82,0,466.91,0z"/>
                  </g>
                </svg>
            </a>
          </div>
      </div>
      <div class="text-center font-semibold text-14 tracking-widest" >&copy; 2021 Express Missions International</div>
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
