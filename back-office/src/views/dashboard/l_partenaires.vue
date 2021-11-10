<template>
  <div>
    <HeaderPage :image="require('@/assets/imgs/partenariat.png')" title="Liste des partenaires"/>
    <div class="is-height-100p-161px is-scroll">
      <div class="container px-6 py-6">
        <div class="columns is-multiline">
          <div class="column is-2">
            <b-upload v-model="file" class="file-label is-height-100p is-width-100p" @input="resizeImage">
              <div class="card is-height-100p is-width-100p is-card-plus">
                <b-icon
                  icon="plus"
                  size="is-large"
                  class="icon-plus"
                  type="is-white">
                </b-icon>
              </div>
            </b-upload>
          </div>
          <div class="column is-2" v-for="item in partenaires" :key="item.id">
            <div class="card" v-if="item.logo" :ref="item.id">
              <img :src="item.logo"/>
              <div class="card-action-img">
                <div class="level">
                  <div class="level-left"></div>
                  <div class="level-right">
                    <a @click="deletePartenaire(item.id)">
                      <b-icon icon="delete" type="is-primary"/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="card" v-else>
              <img src="@/assets/imgs/collaboration.svg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal :active.sync="modalAddPartenaire" :width="840" scroll="keep">
      <div class="card">
        <div class="card-content">
          <h4 class="is-size-6 has-text-weight-bold has-text-grid-1 mb-2">
            Ajouter un partenaire
          </h4>
          <div class="columns">
            <div class="column is-8">
              <vue-cropper
                ref="cropper"
                :aspect-ratio="1/1"
                alt="Source Image"
                preview=".preview"
                :container-style="{
                  height: '220px'
                }">
              </vue-cropper>
            </div>
            <div class="column">
              <div class="preview"></div>
              <p class="is-size-7 has-text-centered">
                Prévisualisation
              </p>
            </div>
          </div>
          <div class="level">
            <div class="level-left">
              <div class="buttons">
                <b-button
                  type="is-primary"
                  icon-left="magnify-minus"
                  class="perfect-round"
                  @click.prevent="zoom(-0.2)"/>
                <b-button
                  type="is-primary"
                  icon-left="magnify-plus"
                  class="perfect-round"
                  @click.prevent="zoom(0.2)"/>
              </div>
            </div>
            <div class="level-right">
              <b-field label="Nom" horizontal :type=" errorNom ? 'is-danger' : ''">
                <b-input v-model.trim="partenaire.nom" placeholder="nom du partenaire"></b-input>
              </b-field>
            </div>
          </div>
          <div class="buttons">
            <b-button
              type="is-transparent"
              class="has-text-grid-2"
              @click="modalAddPartenaire = false; file = null">
              Annuler
            </b-button>
            <b-button
              type="is-primary"
              class="has-text-weight-bold"
              @click="savePartenaire">
              Ajouter
            </b-button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'
import HeaderPage from '@/components/general/HeaderPage.vue'
import {
  GetAll,
  Create,
  Delete
} from '@/api/partenaire'
import { UploadFile } from '@/api/file'

const MAX_TAILLE = 2048

export default {
  components: {
    HeaderPage,
    VueCropper
  },
  data () {
    return {
      partenaires: [],
      modalAddPartenaire: false,
      partenaire: {
        nom: ''
      },
      file: null,
      errorNom: false
    }
  },
  watch: {
    'partenaire.nom' (val) {
      if (val) this.errorNom = false
      else this.errorNom = true
    }
  },
  computed: {},
  methods: {
    resizeImage (e) {
      this.modalAddPartenaire = true
      const reader = new FileReader()
      reader.readAsDataURL(e)
      reader.onload = event => {
        this.$refs.cropper.replace(event.target.result)
      }
    },
    getFileAfterResize () {
      return new Promise(resolve => {
        this.$refs.cropper.getCroppedCanvas({
          maxWidth: MAX_TAILLE,
          maxHeight: MAX_TAILLE
        }).toBlob((blob) => {
          const file = new File(
            [blob],
            `${this.partenaire.nom}-${new Date().getTime()}.png`,
            {
              type: blob.type,
              lastModified: new Date().getTime()
            }
          )
          resolve(file)
        })
      })
    },
    async savePartenaire () {
      if (this.file === null || !this.partenaire.nom) {
        this.errorNom = true
        return
      }
      const loadingComponent = this.$buefy.loading.open({ container: this.$el })
      try {
        const fileResize = await this.getFileAfterResize()
        const [url] = (await UploadFile([fileResize], 'partenaires')).data
        await Create({
          nom: this.partenaire.nom,
          logo: url
        })
        loadingComponent.close()
        this.modalAddPartenaire = false
        this.actionGetData()
      } catch (error) {
        loadingComponent.close()
      }
    },
    zoom (percent) {
      this.$refs.cropper.relativeZoom(percent)
    },
    deletePartenaire (id) {
      this.$buefy.dialog.confirm({
        type: 'is-danger',
        message: 'Êtes vous sur de vouloir effectuer cette action?',
        onConfirm: async () => {
          await Delete(id)
          this.actionGetData()
        }
      })
    },
    async actionGetData () {
      const loadingComponent = this.$buefy.loading.open({ container: this.$el })
      try {
        const res = (await GetAll()).data
        this.partenaires = res.partenaires
        loadingComponent.close()
      } catch (error) {
        loadingComponent.close()
      }
    }
  },
  async mounted () {
    await this.actionGetData()
  }
}
</script>

<style>

</style>
