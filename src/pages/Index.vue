<template>
  <Layout>
    <!-- Hero -->
    <section class="py-4 h-68 overflow-hidden relative z-0">
      <div class="max-w-large mx-auto flex justify-between h-full items-center lg:px-4 px-2">

           <div class="absolute w-full h-full top-0 left-0 z-0 bg-blue">
             <g-image alt="Hero Image" class="w-full h-full object-cover object-bottom" :src="$page.post.heroImage" position="bottom" />
             <span class="absolute top-0 left-0 w-full h-full bg-blue opacity-50" ></span>
          </div>

          <div class="sm:w-78 mx-auto px-1 w-full text-center leading-none relative" >
              <h1 class="font-display text-regular tracking-wide text-43 text-white mb-4">{{ $page.post.heroTitle }} {{ $page.post.heroSubtitle }} </h1>
              <a href="#" class='text-24 uppercase text-red bg-white bg-opacity-75 hover:bg-opacity-100 transition-all duration-200 px-1 pt-2px pb-0 leading-none tracking-wide inline-block'>Learn How You Can Help ></a>
          </div>

         
      </div>

    </section>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->

    <h1>{{ $page.post.heroTitle }}</h1>
    <div v-for="row in $page.post.theNeedContent" >
      <p>Row: {{ row.theNeedRow.text1 }}</p>
    </div>
    <div v-for="testimony in $page.post.testimonialSlider" >
      <p>Testimonial: {{ testimony.testimonial.quote }}</p>
    </div>
    <p>
      Test dolor sit amet, consectetur adipisicing elit. Pariatur excepturi labore tempore expedita, et iste tenetur suscipit explicabo! Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener">Gridsome Docs</a>
      <a href="https://github.com/gridsome/gridsome" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<page-query>
query post {
  post(id:"Home") {
        id
        title
        heroImage
        heroTitle
        heroSubtitle
        ourMissionTitle
        ourMissionOverview
        ourWorkTitle
        ourWorkOverview
        theNeedTitle
        theNeedSubtitle
        theNeedContent { 
         theNeedRow { 
           image
           text1
           orangeStats
           text2 
           }
        }
        donateTitle
        donateSubtitle
        donateText
        donatePrimaryButton {
          buttonText
          buttonUrl
        }
        donateSecondaryButton {
          buttonText
          buttonUrl
        }
        donateImage
        contactUsTitle
        contactUsText
        testimonialSlider {
          testimonial {
            quote
            attribution
          }
        }
    }
  }
</page-query>


<script>
export default {
  metaInfo: {
    title: 'Express Missions International | EMI'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
