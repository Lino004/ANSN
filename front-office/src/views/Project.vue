<template>
  <div class="main-container">

    <Header />

    <Breadcrumb :items="items" :title="$t('projets.title')" bg="assets/img/projects/bg_business.jpg"/>

    <!-- Projects section start -->
    <div class="page-wrapper section-space--inner--120">
      <div class="project-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="project-item-wrapper">
                <div class="row">
                  <div class="col-lg-4 col-sm-6 col-12 section-space--bottom--30" v-for="project in currProjets" :key="project.id">
                    <ProjectGrid :project="project" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row section-space--top--60">
            <div class="col">
              <ul class="page-pagination">
                <li>
                  <a @click="prev">
                    <i class="fa fa-angle-left">
                    </i> {{$t('general.prev')}} 
                  </a>
                </li>
                <li
                  v-for="n in totalPage"
                  :key="n"
                  :class="n === currPage ? 'active' : ''">
                  <a @click="currPage = n">{{n}}</a>
                </li>
                <li>
                  <a @click="next">
                    <i class="fa fa-angle-right"></i> {{$t('general.next')}}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Projects section end -->

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
  import moment from 'moment'
  import db from '@/plugins/firebase'
  import Header from '@/components/Header';
  import { GetAll } from '@/api/projet'
  import Breadcrumb from '../components/Breadcrumb'
  import ProjectGrid from '../components/ProjectGrid'
  import BrandCarousel from '../components/BrandCarousel'
  import Footer from '../components/Footer'
  import OffCanvasMobileMenu from '@/components/OffCanvasMobileMenu';

  export default {
    components: {
      Header,
      Breadcrumb,
      ProjectGrid,
      BrandCarousel,
      Footer,
      OffCanvasMobileMenu
    },
    data() {
      return {
        items: [
          {
            text: this.$t('menu.home'),
            to: "/"
          },
          {
            text: this.$t('menu.projet'),
            active: true
          }
        ],
        projets: [],
        currPage: 1,
        perPage: 3
      }
    },
    computed: {
      totalPage() {
        if (this.perPage > this.projets.length) return this.projets.length
        return Math.ceil(this.projets.length / this.perPage)
      },
      currProjets() {
        return this.projets.slice((this.currPage - 1) * this.perPage, this.currPage * this.perPage)
      }
    },
    methods: {
      next() {
        if (this.currPage + 1 === this.projets.length) return
        this.currPage += 1
      },
      prev() {
        if (this.currPage - 1 === 0) return
        this.currPage -= 1
      }
    },
    async mounted() {
      /* db.ref('projets').on('value', (data) => {
        this.projets = Object.values(data.val())
        this.projets.sort((a, b) => {
          const ma = moment(a.date)
          const mb = moment(b.date)
          return mb.diff(ma)
        })
      }); */
      const res = await GetAll()
      this.projets = res.data.projets
    },
    metaInfo: {
      title: 'ASNS - All Projects',
      htmlAttrs: {
        lang: 'fr',
        amp: true
      }
    },
  }
</script>

