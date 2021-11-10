<template>
  <a 
    v-if="urlDon"
    :class="custumClass"
    :href="urlDon"
    target="_blank">
    {{$t('general.makeDonation')}}
  </a>
</template>

<script>
import { GetOne } from '@/api/parametre'

export default {
  props: {
    custumClass: String
  },
  data () {
    return {
      urlDon: ''
    }
  },
  async mounted() {
    const res = (await GetOne('urlDesDon')).data
    this.urlDon = res.data.valeurString
  }
}
</script>

<style>

</style>