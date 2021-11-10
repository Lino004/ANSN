<template>
  <div class="my-5">
    <div class="container">
      <div class="row row-25 gx-5">
        <div class="col-lg-4 col-12 mb-3">
          <paiement-section-1></paiement-section-1>
        </div>
        <div class="col-lg-4 col-12 mb-3">
          <paiement-section-2></paiement-section-2>
        </div>
        <div class="col-lg-4 col-12 mb-3">
          <paiement-section-3></paiement-section-3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PaiementSection1 from './PaiementSection1.vue'
import PaiementSection2 from './PaiementSection2.vue'
import PaiementSection3 from './PaiementSection3.vue'

export default {
  components: {
    PaiementSection1,
    PaiementSection2,
    PaiementSection3
  }
}
</script>

