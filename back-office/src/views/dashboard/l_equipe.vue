<template>
  <div>
    <HeaderPage :image="require('@/assets/imgs/equipe.png')" title="Equipes"/>
    <div class="is-height-100p-161px is-scroll">
      <div class="container px-6 py-6">
        <div class="box">
          <div class="level">
            <div class="level-left"></div>
            <div class="level-right">
              <b-button type="is-primary" @click="$router.push({ name: 'AddEquipe' })">
                <strong>
                  Ajouer
                </strong>
              </b-button>
              </div>
          </div>
        </div>
        <div class="box">
          <b-table
            :data="data">
            <template v-for="column in columns">
              <b-table-column :key="column.id" v-bind="column">
                <template
                  v-slot="props">
                  <div v-if="column.field === 'actions'">
                    <div class="buttons is-justify-content-flex-end">
                      <a
                        class="button is-secondary"
                        @click="$router.push({
                          name: 'EditEquipe',
                          params: {
                            id: props.row.id
                          }
                        })">
                        <b-icon
                          icon="pencil"
                          size="is-small">
                        </b-icon>
                      </a>
                      <a
                        class="button is-danger"
                        @click="deleteData(props.row.id)">
                        <b-icon
                          icon="delete"
                          size="is-small">
                        </b-icon>
                      </a>
                    </div>
                  </div>
                  <div v-else-if="column.field === 'photo'">
                    <figure
                      class="image is-48x48">
                      <img
                        v-if="!props.row.photo"
                        class="is-rounded"
                        src="@/assets/imgs/default-user.jpg">
                      <img
                        v-else
                        class="is-rounded"
                        :src="props.row.photo">
                    </figure>
                  </div>
                  <div v-else>
                    {{ props.row[column.field] }}
                  </div>
                </template>
              </b-table-column>
            </template>
          </b-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderPage from '@/components/general/HeaderPage.vue'
import {
  GetAll,
  Delete
} from '@/api/equipe'

export default {
  components: {
    HeaderPage
  },
  data () {
    return {
      data: [],
      columns: [
        {
          field: 'photo',
          label: 'Photo',
          width: 50
        },
        {
          field: 'nom',
          label: 'Nom'
        },
        {
          field: 'post',
          label: 'Poste'
        },
        {
          field: 'email',
          label: 'Email'
        },
        {
          field: 'actions',
          label: 'Actions',
          numeric: true
        }
      ]
    }
  },
  watch: {},
  computed: {},
  methods: {
    deleteData (id) {
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
        this.data = res.data
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
