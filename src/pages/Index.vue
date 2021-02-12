<template>
  <Layout>
    <!-- Hero -->
    <section class="h-68 overflow-hidden relative z-0 mb-8">
      <div class="max-w-large mx-auto flex justify-between h-full items-center lg:px-4 px-2">

           <div class="absolute w-full h-full top-0 left-0 z-0 bg-blue">
             <g-image alt="Hero Image" class="w-full h-full object-cover object-bottom" :src="$page.post.heroImage" position="bottom" />
             <span class="absolute top-0 left-0 w-full h-full bg-blue opacity-50" ></span>
          </div>

          <div class="sm:w-78 mx-auto px-1 w-full text-center leading-none relative" >
              <h1 class="font-display text-regular tracking-wide text-43 text-white mb-4">{{ $page.post.heroTitle }} {{ $page.post.heroSubtitle }} </h1>
              <a :href="$page.post.heroLinkUrl" class='text-24 uppercase font-display-sans text-red bg-white bg-opacity-75 hover:bg-opacity-100 transition-all duration-200 px-1 pt-2px pb-0 leading-none tracking-wide inline-block'>{{ $page.post.heroLinkText }} ></a>
          </div>

         
      </div>

    </section>
    
  <!-- Overview Section -->
    <section class="py-8 lg:px-0 px-2 relative" >
        <div class="w-full mx-auto flex lg:flex-row flex-col justify-between items-center" >
            <div class="xl:w-auto lg:w-screen50 w-56 lg:px-0 px-4 lg:relative lg:absolute xl:static left-0 top-0 lg:mb-0 mb-4" >
              <div class="xl:w-76 w-full bg-blue" >
                <g-image alt="Our Mission Image" class="w-full object-cover object-bottom" :src="$page.post.ourMissionImage" position="bottom" />
              </div>
            </div>
            
            <div class="lg:w-screen50 flex items-center justify-start" >
              <div class="md:w-48 text-left lg:ml-6" >
                <h2 class="font-display text-43 mb-1" >{{ $page.post.ourMissionTitle }}</h2>
                <p class="text-16 font-semibold leading-loose pr-2 mb-2_5" >{{ $page.post.ourMissionOverview }}</p>
                <a :href="$page.post.heroLinkUrl" class='text-24 uppercase text-red font-display-sans bg-white bg-opacity-75 hover:bg-opacity-100 transition-all duration-200 pt-2px pb-0 leading-none tracking-wide inline-block'>{{ $page.post.heroLinkText }} ></a>
              </div>
            </div>
            
        </div>
    </section>

  <!-- Full Width Image Section -->
  <section>
    <div class="w-full h-screen">
        <div class="w-full bg-yellow" >
          <g-image alt="Our Mission Image" class="w-full h-full object-cover object-center" :src="$page.post.ourMissionImage" position="bottom" />
        </div>
    </div>
  
  </section>

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
        heroImage(width: 1920, quality: 75)
        heroTitle
        heroSubtitle
        heroLinkText
        heroLinkUrl
        ourMissionTitle
        ourMissionOverview
        ourMissionImage
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

</style>
