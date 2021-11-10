<template>
  <div class="main-container">

    <Header />

    <Breadcrumb :items="items" title="Détail du projet" bg="assets/img/projects/bg_detail.jpg"/>

    <ProjectDetailsWrapper />

    <BrandCarousel addClass="grey-bg" />

    <Footer />

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
  import Breadcrumb from '../components/Breadcrumb'
  import ProjectDetailsWrapper from '../components/sections/ProjectDetailsWrapper'
  import BrandCarousel from '../components/BrandCarousel'
  import Footer from '../components/Footer'
  import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
  export default {
    components: {
      Header,
      Breadcrumb,
      ProjectDetailsWrapper,
      BrandCarousel,
      Footer,
      OffCanvasMobileMenu
    },
    data() {
      return {
        items: [
          {
            text: 'Home',
            to: "/"
          },
          {
            text: 'Détail du projet',
            active: true
          }
        ]
      }
    },
    metaInfo: {
      title: 'ASNS - Détail du projet',
      htmlAttrs: {
        lang: 'fr',
        amp: true
      }
    }
  }
</script>

