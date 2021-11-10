<template>
  <div>
    <figure
      class="image is-square cursor-pointer"
      @click="clickImage">
      <img
        v-if="!photo"
        class="is-rounded"
        src="@/assets/imgs/default-user.jpg">
      <img
        v-else
        class="is-rounded"
        :src="photo">
    </figure>

    <b-upload
      class="file-label is-height-100p is-width-100p"
      @input="resizeImage"
      v-show="false"
      ref="inputFile">
      <div class="card is-height-100p is-width-100p is-card-plus">
        <b-icon
          icon="plus"
          size="is-large"
          class="icon-plus"
          type="is-white">
        </b-icon>
      </div>
    </b-upload>

    <b-modal
      :active.sync="modalCropper"
      :width="840"
      scroll="keep">
      <div class="card">
        <div class="card-content">
          <h4 class="is-size-6 has-text-weight-bold has-text-grid-1 mb-2">
            Rogner l'image
          </h4>
          <div class="columns">
            <div class="column is-8">
              <vue-cropper
                ref="cropper"
                :aspect-ratio="1/1"
                alt="Source Image"
                preview=".preview"
                :container-style="{
                  height: '220px'
                }">
              </vue-cropper>
            </div>
            <div class="column">
              <div class="preview"></div>
              <p class="is-size-7 has-text-centered">
                Prévisualisation
              </p>
            </div>
          </div>
          <div class="level">
            <div class="level-left">
              <div class="buttons">
                <b-button
                  type="is-primary"
                  icon-left="magnify-minus"
                  class="perfect-round"
                  @click.prevent="zoom(-0.2)"/>
                <b-button
                  type="is-primary"
                  icon-left="magnify-plus"
                  class="perfect-round"
                  @click.prevent="zoom(0.2)"/>
              </div>
            </div>
          </div>
          <div class="buttons">
            <b-button
              type="is-transparent"
              class="has-text-grid-2"
              @click="modalCropper = false;">
              Annuler
            </b-button>
            <b-button
              type="is-primary"
              class="has-text-weight-bold"
              @click="getFileAfterResize">
              Rogner
            </b-button>
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import VueCropper from 'vue-cropperjs'
import 'cropperjs/dist/cropper.css'

const MAX_TAILLE = 2048

export default {
  components: {
    VueCropper
  },
  props: {
    photo: String
  },
  data () {
    return {
      modalCropper: false
    }
  },
  methods: {
    clickImage () {
      this.$refs.inputFile.$refs.input.click()
    },
    resizeImage (e) {
      this.modalCropper = true
      const reader = new FileReader()
      reader.readAsDataURL(e)
      reader.onload = event => {
        this.$refs.cropper.replace(event.target.result)
      }
    },
    getFileAfterResize () {
      const loadingComponent = this.$buefy.loading.open({
        container: this.$el
      })
      const dataUrl = this.$refs.cropper.getCroppedCanvas().toDataURL()
      this.$emit('update:photo', dataUrl)
      this.$refs.cropper.getCroppedCanvas({
        maxWidth: MAX_TAILLE,
        maxHeight: MAX_TAILLE
      }).toBlob((blob) => {
        const file = new File(
          [blob],
          `${new Date().getTime()}.png`,
          {
            type: blob.type,
            lastModified: new Date().getTime()
          }
        )
        this.$emit('update-file', file)
        loadingComponent.close()
        this.modalCropper = false
      })
    }
  }
}
</script>
