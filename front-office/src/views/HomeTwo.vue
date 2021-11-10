<template>
  <div class="main-container">
    <Header />

    <HeroOne :sliderData="sliderData" />

    <ActiviteTabs/>

    <ProjectSection />

    <BrandCarousel addClass="grey-bg" />

    <Footer/>

    <OffCanvasMobileMenu />

    <!-- back to top start -->
    <back-to-top class="scroll-top" bottom="60px">
      <i class="ion-android-arrow-up"></i>
    </back-to-top>
    <!-- back to top end -->
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import HeroOne from '@/components/sections/HeroOne';
  import ActiviteTabs from '@/components/sections/ActiviteTabs';
  import BrandCarousel from '@/components/BrandCarousel';
  import ProjectSection from '@/components/sections/ProjectSection';
  import Footer from '@/components/Footer';
  import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

  import i18n from '@/i18n';
  import sliderData from '@/data/slider';

  export default {
    data () {
      return {
        sliderData,
      }
    },
    components: {
      Header,
      HeroOne,
      ActiviteTabs,
      BrandCarousel,
      ProjectSection,
      Footer,
      OffCanvasMobileMenu
    },
    metaInfo: {
      title: i18n.t('title_page.home'),
      htmlAttrs: {
        lang: 'fr',
        amp: true
      }
    },
    methods: {},
    mounted() {},
    destroyed() {},
  }
</script>
