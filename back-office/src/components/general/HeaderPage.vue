<template>
  <section class="hero has-bg-img" :style="{'background-image':'url(' + image + ')'}">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-2 has-text-white">
          {{title}}
        </h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    image: String,
    title: String
  }
}
</script>
