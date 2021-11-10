<template>
  <div class="service-grid-item service-grid-item--style2">
    <div class="service-grid-item__image">
      <div class="service-grid-item__image-wrapper">
        <a @click="goTo">
          <!-- <img :src="project.image" class="img-fluid" alt="thumbnail"> -->
          <b-img-lazy v-bind="mainProps" :src="project.image" :alt="project.title"></b-img-lazy>
        </a>
      </div>

    </div>
    <div class="service-grid-item__content">
        <p class="post-date">{{ formatDate(project.projectDetailsInfo.lists[0].desc) }}</p>
      <h3 class="title">
        <a @click="goTo">
          {{ project.title }}
        </a>
      </h3>
      <p class="subtitle">{{ project.desc.split(" ").splice(0, 10).join(' ') }} ...</p>
      <a class="see-more-link" @click="goTo"> {{$t('general.readMore')}} </a>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
  import { createNamespacedHelpers } from 'vuex';

  const Projets = createNamespacedHelpers('projets');

  export default {
    props: ['project'],
    data() {
      return {
        mainProps: {
          center: true,
          fluidGrow: true,
          blank: true,
          blankColor: '#bbb',
          class: 'img-fluid'
        }
      }
    },
    methods: {
      ...Projets.mapMutations({
        actionSetCurrProjet: 'SET_CURR_PROJET'
      }),
      goTo() {
        this.actionSetCurrProjet(this.project)
        this.$router.push('/project-details')
      },
      formatDate: (date) => moment(date).format('DD/MM/YYYY')
    }
  };
</script>

<style lang="scss">

</style>