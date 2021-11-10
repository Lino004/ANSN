<template>
  <div>
    <HeaderPage :image="require('@/assets/imgs/project/bg_detail.jpg')" :title="title"/>
    <form @submit.prevent="actionCreate" class="container px-6 py-6">
      <div class="columns">
        <div class="column is-2">
          <Photo
            :photo.sync="photo"
            @update-file="file = $event"
          />
        </div>
        <div class="column columns is-multiline">
          <div class="column is-6">
            <b-field label="Nom">
              <b-input
                v-model="equipe.nom"
                required/>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field label="Prenom">
              <b-input
                v-model="equipe.prenom"
                required/>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field label="Email">
              <b-input
                v-model="equipe.email"
                required
                type="email"/>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field label="Poste">
              <b-select
                v-model="equipe.post"
                required
                expanded>
                <option
                  v-for="poste in postes"
                  :value="poste"
                  :key="poste">
                  {{ poste }}
                </option>
              </b-select>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field label="LinkedIn">
              <b-input
                v-model="equipe.linkedin"/>
            </b-field>
          </div>
          <div class="column is-6">
            <b-field label="Facebook">
              <b-input
                v-model="equipe.facebook"/>
            </b-field>
          </div>
        </div>
      </div>
      <hr>
      <div class="level">
        <div class="level-left"></div>
        <div class="level-right">
          <div class="buttons">
            <a
              class="button"
              @click="$router.push({ name: 'ListEquipe' })">
              Annuler
            </a>
            <b-button
              type="is-primary"
              :label="$route.name === 'EditEquipe' ? 'Modifier' : 'Ajouter'"
              native-type="submit"
            />
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import HeaderPage from '@/components/general/HeaderPage.vue'
import { GetOne } from '@/api/parametre'
import { Create, GetOne as GetOneEquipe, Update } from '@/api/equipe'
import Photo from '@/components/equipe/Photo'
import { UploadFile } from '@/api/file'

export default {
  components: {
    HeaderPage,
    Photo
  },
  data () {
    return {
      equipe: {
        photo: '',
        nom: '',
        prenom: '',
        email: '',
        post: '',
        linkedin: '',
        facebook: ''
      },
      postes: [],
      photo: '',
      file: null
    }
  },
  computed: {
    title () {
      if (this.$route.name === 'AddEquipe') return 'Ajouter un collaborateur'
      if (this.$route.name === 'EditEquipe') return 'Modifier un collaborateur'
      return 'Détail'
    }
  },
  methods: {
    async actionGetPoste () {
      const loadingComponent = this.$buefy.loading.open({
        container: this.$el
      })
      try {
        const res = (await GetOne('listeDesPostes')).data
        this.postes = res.data.valeurJson.data
        loadingComponent.close()
      } catch (error) {
        loadingComponent.close()
      }
    },
    async actionCreate () {
      const loadingComponent = this.$buefy.loading.open({
        container: this.$el
      })
      try {
        let url = ''
        if (this.file) [url] = (await UploadFile([this.file], 'equipe')).data
        if (this.$route.name === 'AddEquipe') {
          await Create({
            ...this.equipe,
            photo: url
          })
        }
        if (this.$route.name === 'EditEquipe') {
          await Update({
            ...this.equipe,
            photo: url
          }, this.$route.params.id)
        }
        loadingComponent.close()
        this.$router.push({ name: 'ListEquipe' })
      } catch (error) {
        loadingComponent.close()
      }
    }
  },
  async mounted () {
    await this.actionGetPoste()
    if (this.$route.name === 'EditEquipe') {
      const res = await GetOneEquipe(this.$route.params.id)
      Object.keys(this.equipe).forEach(key => {
        this.equipe[key] = res.data.data[key]
      })
      this.photo = this.equipe.photo
    }
  }
}
</script>

<style>

</style>
