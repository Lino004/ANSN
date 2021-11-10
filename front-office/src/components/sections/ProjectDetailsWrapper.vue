<template>
  <div class="page-wrapper section-space--inner--120" v-if="project">
    <!--Projects section start-->
    <div class="project-section">
      <div class="container">
        <div class="row">

          <div class="col-12 section-space--bottom--40">
            <div class="project-image">
              <b-img-lazy v-bind="mainProps" :src="project.image" :alt="project.title"></b-img-lazy>
            </div>
          </div>

          <div class="col-lg-4 col-12 section-space--bottom--30">
            <div class="project-information">
              <h3>{{ project.projectDetailsInfo.title }}</h3>
              <ul>
                <li v-for="list in project.projectDetailsInfo.lists" :key="list.id">
                  <strong>{{ list.label }}</strong>
                    <span v-if="list.label === 'Date du projet:'">{{ formatDate(list.desc) }}</span>
                    <span v-else>{{ list.desc }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-8 col-12 section-space--bottom--30 pl-30 pl-sm-15 pl-xs-15">
            <div class="project-details">
              <h2>{{ project.title }}</h2>
              <p v-html="project.desc">{{ project.desc }}</p>
            </div>
          </div>

          <div class="col-12">
            <div class="row row-5 image-popup">
              <div class="col-xl-3 col-lg-4 col-sm-6 col-12 section-space--top--10" v-for="gallery in project.projectDetailsGallery" :key="gallery.id">
                <router-link to="/project-details" class="single-gallery-thumb">
                  <img :src="gallery.image" class="img-fluid" alt="thumbnail">
                </router-link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!--Projects section end-->
  </div>
</template>

<script>
  import moment from 'moment'
  import db from '@/plugins/firebase'
  import { createNamespacedHelpers } from 'vuex';
  import data from '../../data/project.json';

  const Projets = createNamespacedHelpers('projets');
  export default {
    data () {
      return {
        data,
        mainProps: {
          center: true,
          fluidGrow: true,
          blank: true,
          blankColor: '#bbb',
          class: 'img-fluid'
        }
      }
    },
    computed: {
      ...Projets.mapState({
        project: 'currProjet'
      })
    },
    methods: {
      ...Projets.mapMutations({
        actionSetCurrProjet: 'SET_CURR_PROJET'
      }),
      formatDate: (date) => moment(date).format('DD/MM/YYYY')
    },
    mounted() {
      db.ref('projets').orderByChild('id').equalTo(this.project.id).on('child_changed', (data) => {
        this.actionSetCurrProjet(data.val())
      });
    },
    destroyed() {
      db.ref('projets').off()
    },
  };
</script>