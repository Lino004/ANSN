<template>
  <!--====================  blog grid area ====================-->
  <div class="blog-grid-area section-space--inner--120" :class="addClass">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <!-- section title -->
          <div class="section-title-area text-center">
            <h2 class="section-title section-space--bottom--50">{{ $t('projets.last') }}<span class="title-icon"></span></h2>
          </div>
        </div>

        <div class="col-lg-12">
          <div class="blog-grid-wrapper">
            <div class="row">
              <div class="col-lg-4 col-md-6" v-for="project in projets" :key="project.id">
                <ProjectGrid :project="project" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--====================  End of blog grid area  ====================-->
</template>

<script>
  import { GetAll } from '@/api/projet'
  import ProjectGrid from '../ProjectGrid'
  import data from '../../data/project.json'
  export default {
    components: {
      ProjectGrid
    },
    props: ['addClass'],
    data () {
      return {
        data,
        projets: [],
      }
    },
    async mounted() {
      const res = (await GetAll({ limit: 3, offset: 0 })).data;
      this.projets = res.projets;
    },
  };
</script>

<style lang="scss">

</style>