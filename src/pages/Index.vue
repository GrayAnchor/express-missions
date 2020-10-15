<template>
  <Layout>
    <!-- Hero -->
    <section class="py-4">
      <div class="max-w-large mx-auto flex justify-between items-center lg:px-4 px-2 relative">
          <div class="sm:w-43 w-full text-right px-2 leading-none" >
              <h1 class="font-display text-43 mb-4">{{ $page.post.heroTitle }}<span class="block text-24 font-body font-normal pt-1 leading-tight">{{ $page.post.heroSubtitle }}</span></h1>
              <a href="#" class='text-20 text-white bg-red px-4 py-1 inline-block'>Get Involved</a>
          </div>

          <div class="w-76 md:-mr-16">
             <g-image alt="Hero Image" :src="$page.post.heroImage" width="760" />
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
