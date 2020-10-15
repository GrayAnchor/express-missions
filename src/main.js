// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import global styles
require('~/main.css')

// Import fonts
require('typeface-fjalla-one')
require('typeface-dm-serif-display')

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

   // Add Netlify Identity widget
   head.script.push({
    src: 'https://identity.netlify.com/v1/netlify-identity-widget.js'
  })


}
