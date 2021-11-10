<template>
  <div class="main-container">

    <Header />

    <!-- <Breadcrumb :items="items" title="Service Details" /> -->

    <ServiceDetailsWrapper />

    <!-- <BrandCarousel addClass="grey-bg" /> -->

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
// import Breadcrumb from '@/components/Breadcrumb';
import ServiceDetailsWrapper from '@/components/sections/ServiceDetailsWrapper';
// import BrandCarousel from '@/components/BrandCarousel';
import Footer from '@/components/Footer';
import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
import i18n from '@/i18n';
export default {
  components: {
    Header,
    // Breadcrumb,
    ServiceDetailsWrapper,
    // BrandCarousel,
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
          text: 'activités',
          active: true
        }
      ]
    }
  },
  metaInfo: {
    title: i18n.t('title_page.activite'),
    htmlAttrs: {
      lang: 'fr',
      amp: true
    }
  }
}
</script>

