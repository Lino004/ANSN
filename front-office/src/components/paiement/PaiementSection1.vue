<template>
  <div class="rounded bg-light shadow"  style="height: 100%">
    <header class="p-3">
      <h4>LE MONTANT DE MON DON</h4>
    </header>
    <ul class="nav nav-tabs nav-fill">
      <li class="nav-item">
        <a
          class="nav-link"
          :class="{
            'active': currentTabs === 0
          }"
          @click="currentTabs = 0">DON PONCTUEL</a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          :class="{
            'active': currentTabs === 1
          }"
          @click="currentTabs = 1">DON MENSUEL</a>
      </li>
    </ul>
    <div class="p-3 bg-white" v-if="currentTabs === 0">
      <div class="row g-2">
        <div class="col-3" v-for="(m, i) in montants" :key="i">
          <a
            class="text-center rounded p-2"
            style="width: 100%"
            :class="{
              'default-bg text-white': montant === m,
              'bg-light': montant !== m
            }"
            @click="montant = m; currentSlider = i">
            <strong>{{m}}€</strong>
          </a>
        </div>
      </div>
      <div class="input-group my-3">
        <span class="input-group-text default-bg text-white" id="basic-addon1">€</span>
        <input type="text" class="form-control" v-model="montant">
      </div>
      <div class="my-3">
        <img width="100%" :src="mySlider" alt="image">
      </div>
      <div class="p-1 bg-light shadow-sm">
        Votre don ne vous coûte réellement que
        <strong class="text-danger h6">{{reduction}} €</strong>
        après réduction fiscale (réduction de
        <span class="text-danger h6">{{montant - reduction}} €</span>
        à hauteur de 20% du revenu imposable*)
      </div>
    </div>
    <div class="p-3 bg-white" v-if="currentTabs === 1">
      <div class="row g-2">
        <div class="col-3" v-for="(m, i) in montantsMensuel" :key="i">
          <a
            class="text-center rounded p-2"
            style="width: 100%"
            :class="{
              'default-bg text-white': montant === m,
              'bg-light': montant !== m
            }"
            @click="montant = m; currentSlider = i">
            <strong>{{m}}€</strong>
          </a>
        </div>
      </div>
      <div class="input-group my-3">
        <span class="input-group-text default-bg text-white" id="basic-addon1">€</span>
        <input type="text" class="form-control" v-model="montant">
      </div>
      <div class="my-3">
        <img width="100%" :src="mySlider" alt="image">
      </div>
      <div class="p-1 bg-light shadow-sm">
        Votre don ne vous coûte réellement que
        <strong class="text-danger h6">{{reduction}} €</strong>
        après réduction fiscale (réduction de
        <span class="text-danger h6">{{montant - reduction}} €</span>
        à hauteur de 20% du revenu imposable*)
      </div>
    </div>
  </div>
</template>

<script>
import mySilder1 from '@/assets/images/slider/my_slider1.jpg'
import mySilder2 from '@/assets/images/slider/my_slider2.jpg'
import mySilder3 from '@/assets/images/slider/my_slider3.jpg'
import mySilder4 from '@/assets/images/slider/my_slider4.jpg'

export default {
  data() {
    return {
      currentTabs: 0,
      montant: 50,
      montants: [
        50,
        100,
        150,
        500
      ],
      montantsMensuel: [
        5,
        10,
        15,
        20
      ],
      currentSlider: 0,
    }
  },
  computed: {
    reduction() {
      if (!this.montant) return 0
      return this.montant * 20 / 100
    },
    mySlider() {
      if (this.currentSlider === 1) return mySilder2
      if (this.currentSlider === 2) return mySilder3
      if (this.currentSlider === 3) return mySilder4
      return mySilder1
    }
  }
}
</script>

<style scoped>
</style>