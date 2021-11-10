<template>
  <div>
    <HeaderPage :image="require('@/assets/imgs/project/bg_business.jpg')" title="Liste des projets"/>
    <div class="is-height-100p-161px is-scroll">
      <div class="container px-6 py-6">
        <div class="columns is-marginless is-multiline">
          <div class="column is-4">
            <div
              style="min-height: 300px"
              class="card is-height-100p is-card-plus"
              @click="$router.push({ name: 'AddProject' })">
              <b-icon
                icon="plus"
                size="is-large"
                class="icon-plus"
                type="is-white">
              </b-icon>
            </div>
          </div>
          <div class="column is-4" v-for="(item, i) in currProjets" :key="i">
            <div class="card is-height-100p">
              <div class="card-image">
                <figure class="image mx-0">
                  <img :src="item.image" style="height: 200px" :alt="item.title">
                </figure>
              </div>
              <div class="card-content">
                <div class="level is-mobile mb-2">
                  <div class="level-left">
                    <p class="subtitle is-6">{{ formatDate(item.date) }}</p>
                  </div>
                  <div class="level-right">
                    <div class="level-item">
                      <a @click="deleteProjet(item.id)">
                        <b-icon icon="delete" type="is-primary"/>
                      </a>
                    </div>
                    <div class="level-item">
                      <router-link :to="{ name: 'EditProject', params: { id: item.id } }">
                        <b-icon icon="pencil" type="is-success"/>
                      </router-link>
                    </div>
                    <div class="level-item">
                      <router-link :to="{ name: 'ViewProject', params: { id: item.id } }">
                        <b-icon icon="eye" type="is-secondary"/>
                      </router-link>
                    </div>
                  </div>
                </div>
                <p class="title is-4 mb-2">{{item.title}}</p>

                <div class="content">
                  {{item.desc.split(" ").splice(0, 10).join(' ')}} ...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="level">
          <div class="level-left"></div>
          <div class="level-right">
            <b-pagination
              :total="projets.length"
              v-model="currPage"
              :per-page="perPage">
            </b-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import HeaderPage from '@/components/general/HeaderPage.vue'
import { GetAll, Delete } from '@/api/projet'

export default {
  components: {
    HeaderPage
  },
  data () {
    return {
      projets: [],
      currPage: 1,
      perPage: 5
    }
  },
  computed: {
    currProjets () {
      return this.projets.slice((this.currPage - 1) * this.perPage, this.currPage * this.perPage)
    }
  },
  methods: {
    formatDate: (date) => moment(date).format('DD/MM/YYYY'),
    deleteProjet (id) {
      const that = this
      this.$buefy.dialog.confirm({
        type: 'is-danger',
        message: 'Êtes vous sur de vouloir effectuer cette action?',
        onConfirm: async () => {
          const loadingComponent = that.$buefy.loading.open()
          try {
            await Delete(id)
            loadingComponent.close()
            await that.getData()
          } catch (error) {
            loadingComponent.close()
          }
        }
      })
    },
    async getData () {
      const loadingComponent = this.$buefy.loading.open()
      try {
        const res = await GetAll()
        this.projets = res.data.projets
        loadingComponent.close()
      } catch (error) {
        loadingComponent.close()
      }
    }
  },
  async mounted () {
    await this.getData()
  }
}
</script>

<style>

</style>
