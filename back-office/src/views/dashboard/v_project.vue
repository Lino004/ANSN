<template>
  <div v-if="projet" ref="projetDetail">
    <HeaderPage :image="require('@/assets/imgs/project/bg_detail.jpg')" :title="title"/>
    <div class="container">
      <div class="level my-3 mx-3">
        <div class="level-left">
          <div class="level-item" v-if="$route.name === 'ViewProject'">
            <b-button type="is-primary" @click="$router.back()">
              <strong>
                Retour
              </strong>
            </b-button>
          </div>
        </div>
        <div class="level-right">
          <div class="level-item" v-if="$route.name !== 'ViewProject'">
            <b-button @click="$router.back()">
              <strong>
                Annuler
              </strong>
            </b-button>
          </div>
          <div class="level-item" v-if="$route.name !== 'ViewProject'">
            <b-button type="is-primary" @click="save">
              <strong>
                Enregistrer
              </strong>
            </b-button>
          </div>
          <div class="level-item" v-if="$route.name === 'ViewProject'">
            <b-button @click="$buefy.toast.open('En cours de développement...')">
              <strong>
                Supprimer
              </strong>
            </b-button>
          </div>
          <div class="level-item" v-if="$route.name === 'ViewProject'">
            <b-button type="is-primary" tag="router-link" :to="{ name: 'EditProject', params: { id: $route.params.id } }">
              <strong>
                Modifer
              </strong>
            </b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="is-height-100p-161px is-scroll">
      <div class="container px-6 py-6">
        <div
          class="project-image mb-5"
          :class="{
            'error': projet.errorImage
          }">
          <img :src="projet.image.data"/>
          <div class="action-img" v-if="$route.name !== 'ViewProject'">
            <div class="level px-2 py-2 mb-0">
              <div class="level-left"></div>
              <div class="level-right">
                <div class="level-item">
                  <b-button
                    type="is-success"
                    icon-right="pencil"
                    @click="$refs.imgProject.click()"/>
                </div>
              </div>
            </div>
            <input
              type="file"
              accept="image/png, image/jpeg"
              class="is-hidden"
              ref="imgProject"
              @change="getDatatUrlImgProject($event)">
          </div>
        </div>
        <div class="columns">
          <div class="column is-narrow" v-if="projet.projectDetailsInfo">
            <div class="card no-box-shadow has-background-dark has-text-white">
              <div class="project-information" v-if="$route.name === 'ViewProject'">
                <h3>{{ projet.projectDetailsInfo.title }}</h3>
                <ul>
                  <li v-for="list in projet.projectDetailsInfo.lists" :key="list.id">
                    <strong>{{ list.label }}</strong>
                    <span v-if="list.label === 'Date du projet:'">{{ formatDate(list.desc) }}</span>
                    <span v-else>{{ list.desc }}</span>
                  </li>
                </ul>
              </div>
              <div class="project-information" v-else>
                <h3>{{ projet.projectDetailsInfo.title }}</h3>
                <ul>
                  <li v-for="list in projet.projectDetailsInfo.lists" :key="list.id">
                    <strong>{{ list.label }}</strong>
                    <b-field
                      :type="list.error ? 'is-danger' : ''"
                      :message="list.error">
                      <b-datepicker
                        v-model="list.desc"
                        locale="fr-FR"
                        placeholder="Click to select..."
                        trap-focus
                        v-if="list.label === 'Date du projet:'">
                      </b-datepicker>
                      <b-input
                        v-model="list.desc"
                        placeholder="Entrez la date du projet"
                        custom-class="has-background-dark has-text-white"
                        v-else>
                      </b-input>
                    </b-field>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="column">
            <div v-if="$route.name === 'ViewProject'">
              <h2>{{ projet.title }}</h2>
              <p v-html="projet.desc">{{ projet.desc }}</p>
            </div>
            <div v-else>
              <b-field
                :type="projet.errorTitle ? 'is-danger' : ''"
                :message="projet.errorTitle">
                <b-input
                  v-model="projet.title"
                  placeholder="Entrez le titre du projet"
                  custom-class="has-text-weight-bold is-size-4">
                </b-input>
              </b-field>
              <b-field
                :type="projet.errorDesc ? 'is-danger' : ''"
                :message="projet.errorDesc">
                <b-input
                  v-model="projet.desc"
                  type="textarea"
                  placeholder="Entrez la description du projet"
                  rows="12">
                </b-input>
              </b-field>
            </div>
          </div>
        </div>
        <div>
          <div class="columns is-multiline">
            <div class="column is-3 is-min-height-250px" v-if="$route.name !== 'ViewProject'">
              <div
                class="card is-height-100p is-card-plus"
                @click="imgGalerryIsClick(-1)">
                <b-icon
                  icon="plus"
                  size="is-large"
                  class="icon-plus"
                  type="is-white">
                </b-icon>
              </div>
            </div>
            <div class="column is-3" v-for="(gallery, index) in projet.projectDetailsGallery" :key="index">
              <div class="card">
                <div class="card-image">
                  <b-image :src="gallery.image.data" ratio="1by1" class="mx-0 mb-0"></b-image>
                  <div class="action-img" v-if="$route.name !== 'ViewProject'">
                    <div class="level px-2 py-2 mb-0">
                      <div class="level-left"></div>
                      <div class="level-right">
                        <div class="level-item">
                          <b-button
                            type="is-primary"
                            icon-right="delete"
                            @click="projet.projectDetailsGallery.splice(index, 1)"/>
                        </div>
                        <div class="level-item">
                          <b-button
                            type="is-success"
                            icon-right="pencil"
                            @click="imgGalerryIsClick(index)"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <input
            type="file"
            accept="image/png, image/jpeg"
            class="is-hidden"
            ref="imgGalleryProject"
            @change="getDatatUrlImgGalleryProject($event)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import HeaderPage from '@/components/general/HeaderPage.vue'
import { PROJET_DEFAULT } from '@/configuration/projet'
import { Create, GetOne } from '@/api/projet'

export default {
  components: {
    HeaderPage
  },
  data () {
    return {
      projet: PROJET_DEFAULT,
      imageProject: null,
      currIndexImgGallery: 0
    }
  },
  computed: {
    title () {
      if (this.$route.name === 'EditProject') return 'Modification du projet'
      return 'Détail du projet'
    }
  },
  methods: {
    async save () {
      if (!this.projet.validate()) return
      const loadingComponent = this.$buefy.loading.open({ container: this.$refs.projetDetail.$el })
      try {
        const projet = await this.projet.getDataProjet()
        await Create(projet)
        loadingComponent.close()
        this.$router.back()
      } catch (error) {
        loadingComponent.close()
      }
    },
    formatDate: (date) => moment(date).format('DD/MM/YYYY'),
    imgGalerryIsClick (index) {
      this.currIndexImgGallery = index
      this.$refs.imgGalleryProject.click()
    },
    getDatatUrlImgProject (e) {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = event => {
        this.projet.image = {
          data: event.target.result,
          file: e.target.files[0]
        }
      }
    },
    getDatatUrlImgGalleryProject (e) {
      const reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = event => {
        if (this.currIndexImgGallery === -1) {
          this.projet.projectDetailsGallery.push({
            image: {
              data: event.target.result,
              file: e.target.files[0]
            }
          })
        } else {
          this.projet.projectDetailsGallery[this.currIndexImgGallery].image = {
            data: event.target.result,
            file: e.target.files[0]
          }
        }
      }
    },
    async getDataProjet () {
      const loadingComponent = this.$buefy.loading.open()
      try {
        const res = (await GetOne(this.$route.params.id)).data
        this.projet.setDataProjet(res.projet)
        loadingComponent.close()
      } catch (error) {
        loadingComponent.close()
      }
    }
  },
  async mounted () {
    if (this.$route.params.id !== undefined) {
      await this.getDataProjet()
    } else {
      this.projet.initDataProjet()
    }
  }
}
</script>
