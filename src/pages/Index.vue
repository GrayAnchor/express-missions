<template>
  <Layout>
    <!-- Hero -->
    <section class="sm:h-screen-h90 h-screen overflow-hidden relative z-0 mb-8">
      <div class="max-w-large mx-auto flex justify-between h-full items-center lg:px-4 px-2">

           <div class="absolute w-full h-full top-0 left-0 z-0 bg-blue">
             <g-image alt="Hero Image" class="w-full h-full object-cover object-bottom" :src="$page.post.heroImage" position="bottom" />
             <span class="absolute top-0 left-0 w-full h-full bg-blue opacity-50" ></span>
          </div>

          <div class="sm:w-78 mx-auto px-1 w-full sm:text-center leading-snug relative" >
              <h1 class="font-display text-regular tracking-wide xs:text-43 text-36 text-white mb-4">{{ $page.post.heroTitle }} {{ $page.post.heroSubtitle }} </h1>
              <a :href="$page.post.heroLinkUrl" class='text-24 uppercase font-display-sans text-red bg-white bg-opacity-75 hover:bg-opacity-100 transition-all duration-200 px-1 pt-2px pb-0 leading-none tracking-wide inline-block'>{{ $page.post.heroLinkText }} ></a>
          </div>

         
      </div>

    </section>
    
  <!-- Overview Section -->
    <section class="py-8 lg:px-0 px-2 relative" >
        <div class="w-full mx-auto flex md:flex-row flex-col justify-between items-center" >
            <div class="xl:w-auto md:w-screen50 sm:w-56 flex-shrink-0 w-full md:px-0 sm:px-4 md:relative xl:static left-0 top-0 lg:mb-0 mb-4" >
              <div class="xl:w-76 w-full bg-blue" >
                <g-image alt="Our Mission Image" class="w-full object-cover object-bottom" :src="$page.post.ourMissionImage" position="bottom" />
              </div>
            </div>
            
            <div class="lg:w-screen50 flex items-center justify-start" >
              <div class="lg:w-48 text-left md:ml-4 lg:ml-6" >
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
        <div class="w-full h-full bg-yellow relative flex items-center justify-center" >
          <g-image alt="Our Mission Image" class="w-full h-full object-cover object-center opacity-50 absolute top-0 left-0" :src="$page.post.featureImage" position="bottom" />
          <div class="relative" >
              <h2 class="font-display text-white text-64 sm:text-center leading-none sm:pl-0 sm:pr-0 sm:px-1 pl-2 pr-1" >{{ $page.post.featureTitle }}</h2>
          </div>
        </div>
    </div>
  
  </section>

<!-- Stats -->
   <section class="tracking-widest mb-12"  >
    <div class="w-full h-screen" v-for="row in $page.post.theNeedContent">
        <div class="w-full h-full bg-blue relative flex items-center justify-center" >
          <g-image alt="Our Mission Image" class="w-full h-full object-cover object-center opacity-25 absolute top-0 left-0" :src="row.theNeedRow.image" position="bottom" />
          <div class="relative max-w-stat sm:pl-0 sm:pr-0 sm:px-1 pl-2 pr-1" >
              <h2 class="font-body text-white text-36 sm:text-center leading-tight" >
                <span class="font-bold block mb-1_5">{{ row.theNeedRow.text1 }}</span>
                <span class="font-display-sans font-regular text-64 text-orange block" >{{ row.theNeedRow.orangeStats }}</span>
                <span class="font-bold block">{{ row.theNeedRow.text2 }}</span>
              </h2>
          </div>
        </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="mb-12 sm:px-0 px-1" >
    <div class="max-w-cta mx-auto bg-blue shadow-large tracking-widest py-6">
      <div class="max-w-stat mx-auto text-white text-center" >
        <h2 class="font-display sm:text-43 text-36 mb-1_5 sm:px-2 px-1 leading-none" >{{ $page.post.donateTitle }}</h2>
        <h3 class="uppercase text-20 font-display-sans mb-1_5 px-1" >{{ $page.post.donateSubtitle }}</h3>
        <p class="text-16 font-semibold mb-4 px-1" >{{ $page.post.donateText }}</p>
        <div class="flex sm:flex-row flex-col justify-center leading-none sm:px-0 px-2 w-full" >
          <a :href="$page.post.donateSecondaryButton.buttonUrl" class="px-4 py-1 sm:mb-0 mb-2 border-white border-4 uppercase font-display-sans text-24 text-white secondary">{{ $page.post.donateSecondaryButton.buttonText }}</a>
          <a :href="$page.post.donatePrimaryButton.buttonUrl" class="px-4 py-1  bg-white border-white border-4 uppercase font-display-sans text-24 text-blue btn sm:ml-2">{{ $page.post.donatePrimaryButton.buttonText }}</a>
        </div>
      </div>
        

    </div>
  </section>

    <!-- <h1>{{ $page.post.heroTitle }}</h1>
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
    </p> -->

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
        featureTitle
        featureImage
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
