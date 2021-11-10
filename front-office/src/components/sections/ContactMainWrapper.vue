<template>
  <div class="page-wrapper section-space--inner--80">
    <!--Contact section start-->
    <div class="contact-section">
      <div class="container">
          <div class="section-title-area text-center">
            <h2 class="section-title section-space--bottom--50">Mon Don <span class="title-icon"></span></h2>
          </div>

        <div class="row section-space--bottom--50">
          <div class="col">
            <!-- google map component -->
            <!-- <GoogleMap /> -->
               <b-card-group deck class="text-center section-space--bottom--50">
                <b-card bg-variant="primary" text-variant="white" header="JE DONNE MAINTENANT" class="text-center">
                  <b-card-text>Pour apporter une aide financière immédiate, vous trouverez plus bas dans nos contacts
                    les informations nécessaire a un virement ponctuel.<br> (montant minimum 1€).</b-card-text>
                </b-card>

                <b-card bg-variant="Default"  header="JE DONNE TOUS LES MOIS" class="text-center">
                  <b-card-text>Pour apporter mon soutien tout au long de l’année, <br> j'ajoute ASNS comme bénéficiaire
                  d'un virement récurent. <br>  (montant minimum 8€). </b-card-text>
                </b-card>

                <b-card bg-variant="danger" text-variant="white" header="JE DONNE EN NATURE" class="text-center">
                  <b-card-text>Pour faire un don en nature, <br> Je laisse une message plus bas indiquant la nature de 
                  mon don et mes coordonnés pour me joindre. <br>Nous nous ferons un olaisir de vous contacter sous 24h a ce sujet.</b-card-text>
                </b-card>
              </b-card-group>
              <div class="section-title-area text-center">
                <h2 class="section-title section-space--bottom--40">Utilisation Des Dons<span class="title-icon"></span></h2>
              </div>
              <p class="text-center" >Sur<b> 100€ dépensés </b>par Action Solidaire Nord Sud</p>
              
              <div class="row">
                <div class="col-lg-2"></div>
                <div class="col-lg-4 col-12 small">
                  <doughnut-chart :chart-data="datacollection" :options="options"></doughnut-chart>
                </div>
                <div class="col-lg-4 col-12 my-auto">
                  <p class="">
                    <b>85€</b> consacrés aux missions sociales <br><br>
                    <b>9€</b> financent les frais de recherche de fonds <br><br>
                    <b>6€</b> couvrent les frais de fonctionnement incluant les coûts fixes de structures inhérents à notre capacité d’action
                  </p>
                </div>
                
              </div>
              
          </div>
        </div>

        <div class="section-title-area text-center">
          <h2 class="section-title section-space--bottom--50">Contact<span class="title-icon"></span></h2>
        </div>

        <div class="row">
          <div class="col-lg-4 col-12">
            <div class="contact-information">
              <h3>Contact Information</h3>
              <ul>
                <li>
                  <span class="icon">
                    <i class="ion-android-map"></i>
                  </span>
                  <span class="text">
                    23 IMPASSE DE CHARROUX, 49300 CHOLET FRANCE
                  </span>
                </li>
                <li>
                  <span class="icon">
                    <i class="ion-ios-telephone-outline"></i>
                  </span>
                  <span class="text">
                    <a href="tel:+33758610273">+33 7 58 61 02 73</a>
                    <a href="tel:+33671158859">+33 6 71 15 88 59</a>
                  </span>
                </li>
                <li>
                  <span class="icon"><i class="ion-ios-email-outline"></i></span>
                  <span class="text">
                    <a href="mailto:asnordsud@yahoo.com">asnordsud@yahoo.com</a>
                  </span>
                </li>
                <li>
                  <span class="icon"><i class="ion-card"></i></span>
                  <span class="text">
                    <a>International Banking Account Number (IBAN) </a>
                    <a href="#">FR 76 1790 6000 3296 3990 3186 615</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-8 col-12">
            <div class="contact-form">
              <b-alert v-model="showError" variant="danger">
                <ul>
                  <li v-for="(msg, i) in msgError" :key="i"> {{msg}} </li>
                </ul>
              </b-alert>
              <b-alert v-model="showSuccess" variant="success">
                Votre message à bien été envoyé!!!
              </b-alert>
              <h3>Laissez un message</h3>
              <div id="contact-form">
                <div class="row row-10">
                  <div class="col-md-6 col-12 section-space--bottom--20">
                    <b-form-input
                      v-model="message.nom"
                      :state="error.nom"
                      placeholder="Votre nom"></b-form-input>
                  </div>
                  <div class="col-md-6 col-12 section-space--bottom--20">
                    <b-form-input
                      v-model="message.email"
                      :state="error.email"
                      placeholder="Votre Email"></b-form-input>
                  </div>
                  <div class="col-12 section-space--bottom--20">
                    <b-form-textarea
                      id="textarea-state"
                      v-model="message.contenu"
                      :state="error.contenu"
                      placeholder="Votre Message"
                      rows="3"
                    ></b-form-textarea>
                  </div>
                  <div class="col-12">
                    <button @click="envoyer">Envoyer</button>
                  </div>
                </div>
              </div>
              <p class="form-message"></p>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!--Contact section end-->
  </div>
</template>

<script>
  import data from '../../data/contact.json'
  import db from '@/plugins/firebase'
  import { v4 as uuidv4 } from 'uuid'
  import DoughnutChart from '@/chart/doughnutChart.js'

  export default {
    components: {
      DoughnutChart
    },
    data () {
      return {
        data, 
        datacollection: {} ,
        options: {
          legend: {
            display: false
          },
        },
        message: {
          nom: '',
          email: '',
          contenu: ''
        },
        error: {
          nom: null,
          email: null,
          contenu: null
        },
        showError: false,
        showSuccess: false,
        msgError: []
      };
    },
    watch: {
      showError (val) {
        if (val) {
          setTimeout(() => {
            this.showError = false
            this.error = {
              nom: null,
              email: null,
              contenu: null
            }
            this.msgError = []
          }, 5000)
        }
      },
      showSuccess (val) {
        if (val) {
          this.message = {
            nom: '',
            email: '',
            contenu: ''
          }
          setTimeout(() => {
            this.showSuccess = false
          }, 3000)
        }
      }
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ['Missions', 'Recherche', 'Fonctionnement'],
          datasets: [
            {
              backgroundColor: ["#007bff","light-grey","#dc3545"],
              data: [85,9,6]
            },
          ]
        }
      },
      isError () {
        let error = false
        if (!this.message.nom) {
          error = true
          this.error.nom = false
          this.msgError.push('Le champ nom est obligatoire')
        }
        if (!/.+@.+\..+/.test(this.message.email)) {
          error = true
          this.error.email = false
          this.msgError.push('L\'email entré n\'est pas valide')
        }
        if (!this.message.contenu) {
          error = true
          this.error.contenu = false
          this.msgError.push('Le champ message est obligatoire')
        }
        if (error) this.showError = true
        return error
      },
      async envoyer () {
        if (!this.isError()) {
          const id = uuidv4()
          await db.ref('messagerie/' + id).update({
            ...this.message,
            email: this.message.email.toLowerCase(),
            date: new Date(),
            dateVue: null,
            vue: false,
            id
          })
          this.showSuccess = true
        }
      }
    },
    mounted () {
      this.fillData()
    }
  };
</script>

<style scoped>
.small {
  max-width: 300px;
  margin-left: 50px;
  };
</style>