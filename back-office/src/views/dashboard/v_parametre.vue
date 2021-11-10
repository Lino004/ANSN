<template>
  <div>
    <div class="container p-6">
      <div class="box">
        <div class="level">
          <div class="level-left"></div>
          <form
            @submit.prevent="actionCreate"
            class="level-right">
            <b-field>
              <b-input
                v-model="cleParametre"
                placeholder="Ajouter un parametre"
                required
              />
              <p class="control">
                <b-button
                  type="is-link"
                  label="Ajouter"
                  native-type="submit"
                />
              </p>
            </b-field>
          </form>
        </div>
        <b-table
          :data="data"
          detailed
          detail-key="cle"
          :show-detail-icon="false"
          ref="tableParams">
          <b-table-column
            field="cle"
            label="Cle"
            v-slot="props">
            <!-- <InputTable
              v-model="props.row.cle"
            /> -->
            {{props.row.cle}}
          </b-table-column>
          <b-table-column
            field="valeurString"
            label="Valeur String"
            v-slot="props">
            <InputTable
              v-model="props.row.valeurString"
            />
          </b-table-column>
          <b-table-column
            field="valeurJson"
            label="Valeur Json"
            v-slot="props">
            <a
              class="button is-success is-justify-content-flex-end"
              @click="$refs.tableParams.toggleDetails(props.row)">
              <b-icon
                icon="eye"
                size="is-small">
              </b-icon>
            </a>
          </b-table-column>
          <b-table-column
            field="valeurBoolean"
            label="Valeur Boolean"
            v-slot="props">
            <b-switch v-model="props.row.valeurBoolean"></b-switch>
          </b-table-column>
          <b-table-column
            field="public"
            label="Paramètre Public"
            v-slot="props">
            <b-switch v-model="props.row.public"></b-switch>
          </b-table-column>
          <b-table-column
            field=""
            label="Actions"
            numeric
            v-slot="props">
            <a
              class="button is-primary is-justify-content-flex-end"
              @click="actionDelete(props.row.id)">
              <b-icon
                icon="delete"
                size="is-small">
              </b-icon>
            </a>
          </b-table-column>
          <template #detail="props">
            <InputTable
              v-model="props.row.valeurJson"
              json
            />
          </template>
        </b-table>
        <hr>
        <div class="level">
          <div class="level-left"></div>
          <div class="level-right">
            <a
              class="button is-link"
              @click="enregistrer">
              Enregistrer
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputTable from '@/components/parametre/InputTable'
import {
  Create,
  GetAll,
  Delete,
  UpdateMany
} from '@/api/parametre'

export default {
  components: {
    InputTable
  },
  data () {
    return {
      data: [],
      cleParametre: ''
    }
  },
  methods: {
    async actionGetAll () {
      const loadingComponent = this.$buefy.loading.open({
        container: this.$el
      })
      try {
        this.data = []
        const res = (await GetAll()).data
        res.data.forEach(item => {
          const string = JSON.stringify(item.valeurJson)
          this.data.push({
            ...item,
            valeurJson: string
          })
        })
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
        await Create({
          cle: this.cleParametre
        })
        loadingComponent.close()
        this.actionGetAll()
      } catch (error) {
        loadingComponent.close()
      }
    },
    async actionDelete (id) {
      this.$buefy.dialog.confirm({
        type: 'is-danger',
        message: 'Êtes vous sur de vouloir effectuer cette action?',
        onConfirm: async () => {
          await Delete(id)
          this.actionGetAll()
        }
      })
    },
    async enregistrer () {
      const loadingComponent = this.$buefy.loading.open({
        container: this.$el
      })
      try {
        this.data.forEach(item => {
          item.valeurJson = JSON.parse(item.valeurJson)
        })
        await UpdateMany(this.data)
        loadingComponent.close()
        this.actionGetAll()
      } catch (error) {
        loadingComponent.close()
      }
    }
  },
  mounted () {
    this.actionGetAll()
  }
}
</script>

<style>

</style>
