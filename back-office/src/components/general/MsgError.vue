<template>
  <b-message type="is-danger" auto-close :duration="5000" @close="$emit('close')">
    <li v-for="(msg, i) in msgs" :key="i" v-html="msg" class="is-size-7"></li>
  </b-message>
</template>

<script>
export default {
  props: {
    msgs: Array
  }
}
</script>
