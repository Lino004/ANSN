<template>
  <!--====================  service tab area ====================-->
  <div class="service-tab-area section-space--inner--120">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="section-title-area text-center">
            <h2 class="section-title section-space--bottom--50"> {{$t('activite.title')}} <span class="title-icon"></span></h2>
          </div>
        </div>
        <div class="col-lg-12">
          <!-- service tab wrapper -->
          <div class="service-tab-wrapper">
            <div class="row no-gutters">
              <div class="col-md-4">
                <div class="nav nav-tabs flex-column service-tab__link-wrapper">
                  <a class="nav-item nav-link"
                    v-for="item in menu"
                    :key="item.id"
                    @click.prevent="setActive(item.id)"
                    :class="{ active: isActive(item.id) }"
                    :href="`#${item.id}`">
                    <span class="icon"><i :class="item.icon"></i></span>
                    <span class="text"> {{item.title}} </span>
                  </a>
                </div>
              </div>
              <div class="col-md-8">
                <div class="tab-content service-tab__content-wrapper">
                  <div class="tab-pane fade" :class="{ 'active show': isActive(activeItem) }" :id="activeItem">
                    <div class="service-tab__single-content-wrapper bg-img" :style="{'background-image':`url(${currentMenu.img})`}">
                      <div class="service-tab__single-content">
                        <h3 class="service-tab__title"> {{currentMenu.title}} </h3>
                        <p class="service-tab__text"> {{currentMenu.desc}} </p>
                        <router-link
                          to="/activités"
                          class="see-more-link">
                          {{$t('general.readMore')}}
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--====================  End of service tab area  ====================-->
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import activites from '@/data/activite';

const Activite = createNamespacedHelpers('activite');

export default {
  data(){
    return {
      activites,
      activeItem: 0,
    }
  },
  computed: {
    currentMenu() {
      return this.menu.find(el => el.id === this.activeItem);
    },
    menu() {
      return this.activites.slice(0, 4);
    }
  },
  methods: {
    ...Activite.mapMutations({
      setIdCurrActivite: 'ID_CURR_ACTIVITE'
    }),
    isActive (menuItem) {
      return this.activeItem === menuItem;
    },
    setActive (menuItem) {
      this.activeItem = menuItem;
      this.setIdCurrActivite(menuItem);
    }
  }
};
</script>