<template>
  <div class="main-container">

    <Header />

    <paiement-secion></paiement-secion>

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
  import BrandCarousel from '../components/BrandCarousel'
  import Footer from '../components/Footer'
  import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';
  import PaiementSecion from '../components/paiement/PaiementSecion.vue';

  export default {
    components: {
      Header,
      Breadcrumb,
      BrandCarousel,
      Footer,
      OffCanvasMobileMenu,
      PaiementSecion
    },
    data() {
      return {
      }
    },
    metaInfo: {
      title: 'ASNS - Faire un don',
      htmlAttrs: {
        lang: 'fr',
        amp: true
      }
    }
  }
</script>

