<template>
  <div class="">
    <section class="hero is-secondary is-fullheight">
      <div class="hero-body align_items_none">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-4">
              <figure class="logo">
                <img src="@/assets/imgs/logo_white.png" class="image is-128xauto mx"/>
              </figure>
              <p class="title has-text-centered has-text-white is-size-5-mobile">
                Connexion
              </p>
              <div class="box width-600">
                <MsgError :msgs="msgs" v-if="showMsgsError" @close="msgsErrorClose"/>
                <section>
                  <b-field label="Adresse email" :type="champs.erremail ? 'is-danger' : ''">
                    <b-input
                      placeholder="exemple@test.com"
                      v-model.trim="champs.email"
                      @keyup="login"/>
                  </b-field>

                  <b-field label="Mot de passe"  :type="champs.errpassword ? 'is-danger' : ''">
                    <b-input
                      type="password"
                      placeholder="Votre mot de passe"
                      v-model="champs.password"
                      @keyup="login"/>
                  </b-field>
                </section>
                <b-button
                  type="is-primary"
                  expanded
                  class="my-5"
                  @click="login">
                  <span class="has-text-weight-bold">
                    Se connecter
                  </span>
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hero-foot">
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MsgError from '@/components/general/MsgError.vue'
import * as ping from '@/api/ping'

export default {
  components: {
    MsgError
  },
  data: () => ({
    champs: {
      email: '',
      password: '',
      erremail: '',
      errpassword: ''
    },
    msgs: [],
    showMsgsError: false
  }),
  methods: {
    ...mapActions({
      actionLogin: 'login'
    }),
    msgsErrorClose () {
      this.msgs = []
      this.showMsgsError = false
      this.champs.erremail = false
      this.champs.errpassword = false
    },
    validation () {
      let isValid = true
      if (!this.champs.email) {
        this.msgs.push('Le champs <b>Adresse email</b> est obligatoire')
        isValid = false
        this.champs.erremail = true
      }
      if (!(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.champs.email))) {
        this.msgs.push('L\'<b>Adresse email</b> entrée est invalide')
        isValid = false
        this.champs.erremail = true
      }
      if (!this.champs.password) {
        this.msgs.push('Le champs <b>Mot de passe</b> est obligatoire')
        isValid = false
        this.champs.errpassword = true
      }
      return isValid
    },
    async login () {
      const loadingComponent = this.$buefy.loading.open({ container: null })
      try {
        if (!this.validation()) {
          this.showMsgsError = true
          loadingComponent.close()
          return
        }
        await this.actionLogin({
          email: this.champs.email.toLowerCase(),
          password: this.champs.password
        })
        this.$buefy.toast.open({
          message: 'Connexion réussi',
          type: 'is-success'
        })
        this.champs.email = ''
        this.champs.password = ''
        this.$router.push({ name: 'Dashboard' })
        loadingComponent.close()
      } catch (error) {
        if (error.response) {
          this.msgs.push(error.response.data.error)
          this.showMsgsError = true
        }
        loadingComponent.close()
      }
    }
  },
  async mounted () {
    ping.Post()
    ping.Put()
    ping.Get()
    ping.Delete()
  }
}
</script>
