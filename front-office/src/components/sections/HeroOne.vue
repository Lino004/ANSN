<template>
  <div class="hero-alider-area">
    <div class="hero-slider__container-area">
      <div class="swiper-container hero-slider__container">
        <div class="swiper-wrapper hero-slider__wrapper">
          <swiper :options="swiperOption">
            <!--=======  single slider item  =======-->
            <div class="swiper-slide hero-slider__single-item" :style="{ backgroundImage: `url(${item.image})` }" v-for="item in sliderData" :key="item.id">
              <div class="hero-slider__content-wrapper">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="hero-slider__content" :class="[item.addClass]">
                        <h2 class="hero-slider__title">{{ item.title }}</h2>
                        <p class="hero-slider__text">{{ item.desc }}</p>
                         <!-- <router-link to="/paiement" class="hero-slider__btn"> {{$t('general.makeDonation')}} </router-link> -->
                         <BtnDon custum-class="hero-slider__btn"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--=======  End of single slider item  =======-->
            <div class="ht-swiper-button-prev ht-swiper-button-prev-13 ht-swiper-button-nav d-none d-xl-block"><i class="ion-ios-arrow-left"></i></div>
            <div class="ht-swiper-button-next ht-swiper-button-next-13 ht-swiper-button-nav d-none d-xl-block"><i class="ion-ios-arrow-forward"></i></div>
          </swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BtnDon from '@/components/paiement/BtnDon'

  export default {
  components: {
    BtnDon
  },
    props: ['sliderData'],
    data() {
      return {
        swiperOption: {
          speed: 1500,
          loop: true,
          effect: 'fade',
          autoplay: false,
          spaceBetween : 30,
          navigation: {
            nextEl: '.ht-swiper-button-next',
            prevEl: '.ht-swiper-button-prev'
          },
        },
      };
    },
  };
</script>

<style lang="scss">

</style>