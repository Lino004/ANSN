<template>
  <div>
    <b-field v-show="asFocus || !data">
      <b-input
        v-model="data"
        @blur="asFocus = false"
        ref="inputTab"
        :type="json ? 'textarea' : 'text'"
      />
    </b-field>
    <div
      class="cursor-pointer"
      v-show="!asFocus && !!data"
      @click="isClick">
      <pre v-if="json">
        {{data}}
      </pre>
      <div v-else>
        {{data}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String
    },
    json: {
      type: Boolean
    }
  },
  data () {
    return {
      asFocus: false
    }
  },
  computed: {
    data: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  },
  methods: {
    isClick () {
      this.asFocus = true
      this.$refs.inputTab.focus()
    }
  }
}
</script>

<style>

</style>
