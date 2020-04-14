<template>
  <Layout>
    <!-- Hero -->
    <section class="px-4">
      <div class="max-w-large mx-auto">
        <div class="max-w-medium">
          <h1>We want these girls to be free...<span>and to live the life they were created for.</span></h1>
        </div>
      </div>

    </section>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" :src="$page.post.thumbnail" width="400" />

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
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
