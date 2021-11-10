<template>
  <div class="p-3 rounded bg-light shadow" style="height: 100%">
    <header class="mb-3">
      <h4>MES COORDONNÉES</h4>
    </header>
    <div class="row">
      <div class="input-group col-12 mb-2">
        <span class="input-group-text default-bg text-white">@</span>
        <input type="email" class="form-control" placeholder="Email*">
      </div>
      <div class="col-12 mb-2">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" v-model="organisation" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Je fais un don au nom d'une organisation ou d'une société
          </label>
        </div>
      </div>
      <div class="input-group col-12 mb-2" v-if="organisation">
        <input type="text" class="form-control" placeholder="Raison social">
      </div>
      <div class="input-group col-5 mb-2">
        <input type="text" class="form-control" placeholder="Civilite*">
      </div>
      <div class="input-group col-7 mb-2">
        <input type="text" class="form-control" placeholder="Prenom*">
      </div>
      <div class="input-group col-12 mb-2">
        <input type="text" class="form-control" placeholder="Nom *">
      </div>
      <div class="input-group col-12 mb-2">
        <input type="text" class="form-control" placeholder="Entrez votre adress... *">
      </div>
      <div class="input-group col-12 mb-2">
        <input type="text" class="form-control" placeholder="Complement adress">
      </div>
      <div class="input-group col-6 mb-2">
        <input type="text" class="form-control" placeholder="Code postal *">
      </div>
      <div class="input-group col-6 mb-2">
        <input type="text" class="form-control" placeholder="Ville">
      </div>
      <div class="col-12 mb-3">
        <select class="form-select">
          <option value="1">France</option>
        </select>
      </div>
      <div>
        * Champs obligatoires (ces informations sont indispensables pour recevoir votre reçu fiscal)
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      organisation: false
    }
  }
}
</script>

<style>

</style>