<template>
  <div class="p-3 rounded bg-light shadow"  style="height: 100%">
    <header class="mb-3">
      <h4>MON RÈGLEMENT</h4>
    </header>
    <div class="accordion" id="accordionReglement">
      <div class="accordion-item">
        <h2 class="accordion-header" id="iban/bic">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#iban_bic"
            aria-expanded="true"
            aria-controls="iban_bic">
            IBAN / BIC
          </button>
        </h2>
        <div id="iban_bic" class="accordion-collapse collapse" aria-labelledby="iban/bic" data-bs-parent="#accordionReglement">
          <div class="accordion-body">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Votre numéro IBAN">
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Votre code BIC">
            </div>
            <div class="text-center">
              <a class="ht-btn ht-btn--default d-inline-block rounded text-white">
                Je valide mon don
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="carteBancaire">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#carte_bancaire"
            aria-expanded="false"
            aria-controls="carte_bancaire">
            Carte bancaire
          </button>
        </h2>
        <div id="carte_bancaire" class="accordion-collapse collapse" aria-labelledby="carteBancaire" data-bs-parent="#accordionReglement">
          <div class="accordion-body">
            <div class="form-check form-check-inline" v-for="(carte, i) in cartes" :key="i">
              <input class="form-check-input" type="radio" name="ratioCarteCredit" :id="`inlineRadio1${i}`" :value="i">
              <label class="form-check-label" :for="`inlineRadio1${i}`"> 
                <img :src="carte.logo" width="30px" class="rounded">  
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            Accordion Item #3
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionReglement">
          <div class="accordion-body">
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import americanExpress from '@/assets/images/cate_credit/logo_american_express.jpeg'
import cb from '@/assets/images/cate_credit/logo_cb.jpg'
import masterCard from '@/assets/images/cate_credit/logo_master_card.jpg'
import visa from '@/assets/images/cate_credit/logo_visa.png'

export default {
  data() {
    return {
      cartes: [
        {
          name: 'americanExpress',
          logo: americanExpress
        },
        {
          name: 'cb',
          logo: cb
        },
        {
          name: 'masterCard',
          logo: masterCard
        },
        {
          name: 'visa',
          logo: visa
        },
      ]
    }
  }
}
</script>

<style>

</style>