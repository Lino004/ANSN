<template>
  <div>
    <HeaderPage :image="require('@/assets/imgs/partenariat.png')" title="Messagerie"/>
    <div class="is-height-100p-161px is-scroll">
      <div class="container px-6 py-6">
        <b-table
          :data="messages"
          striped
          hoverable
          paginated
          :loading="isLoading"
          :per-page="perPage"
          :current-page="currentPage"
          pagination-simple
          detailed
          detail-key="id"
          @details-open="msgOpen">
          <template v-for="column in columns">
            <b-table-column :key="column.id" v-bind="column">
              <template
                v-if="column.searchable && !column.numeric"
                slot="searchable"
                slot-scope="props">
                <b-input
                  v-model="props.filters[props.column.field]"
                  placeholder="Recherche..."
                  icon="magnify"/>
              </template>
              <template v-slot="props" v-if="['date', 'dateVue'].includes(column.field)">
                <span :class="{'has-text-weight-bold': !props.row.vue}">
                  {{ formatDate(props.row[column.field]) }}
                </span>
              </template>
              <template v-slot="props" v-else>
                <span :class="{'has-text-weight-bold': !props.row.vue}">
                  {{ props.row[column.field] }}
                </span>
              </template>
            </b-table-column>
            </template>
            <template slot="detail" slot-scope="props">
                <article class="level pb-0">
                  <div class="level-left">
                    <div class="content" v-html="props.row.contenu"></div>
                  </div>
                  <div class="level-right">
                    <b-button
                      type="is-primary"
                      tag="a"
                      :href="'mailto:' + props.row.email">Repondre</b-button>
                  </div>
                </article>
            </template>
        </b-table>
      </div>
    </div>
  </div>
</template>

<script>
import 'cropperjs/dist/cropper.css'
import { db } from '@/plugin/firebase'
import moment from 'moment'
import HeaderPage from '@/components/general/HeaderPage.vue'

export default {
  components: {
    HeaderPage
  },
  data () {
    return {
      messages: [],
      currentPage: 1,
      perPage: 10,
      isLoading: false,
      columns: [
        {
          field: 'nom',
          label: 'Expéditeur',
          searchable: true
        },
        {
          field: 'email',
          label: 'Email',
          searchable: true
        },
        {
          field: 'date',
          label: 'Envoi le'
        },
        {
          field: 'dateVue',
          label: 'Vu le'
        }
      ]
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
    formatDate (date) {
      return moment(date).local().format('DD/MM/YYYY HH:mm:ss')
    },
    msgOpen (data) {
      db.ref('messagerie/' + data.id).update({
        ...data,
        dateVue: new Date(),
        vue: true
      })
    }
  },
  mounted () {
    this.isLoading = true
    db.ref('messagerie').on('value', (data) => {
      this.messages = []
      if (data.val()) {
        this.messages = Object.values(data.val()).sort((a, b) => {
          return moment(b.date) - moment(a.date)
        })
      }
      this.isLoading = false
    })
  },
  destroyed () {
    db.ref('messagerie').off()
  }
}
</script>

<style>

</style>
