<template>
  <div class="footer-widget text-center">
    <h4 class="footer-widget__title">Réseaux Sociaux</h4>
    <ul class="footer-widget__navigation">
      <li v-for="list in List" :key="list.Title">
        <a :href="list.Url" :class="list.addClass" target="_blank"><i :class="list.icon"></i> {{ list.Title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        List: [
    {
      Title: "Facebook",
      Url: "https://www.facebook.com",
      icon: "fa fa-facebook",

    },
    {
      Title: "Twitter",
      Url: "//twitter.com",
      icon: "fa fa-twitter"
    },
    {
      Title: "LinkedIn",
      Url: "//linkedIn.com",
      icon: "fa fa-linkedin"
    },
    {
      Title: "Instagram",
      Url: "//instagram.com",
      icon: "fa fa-instagram"
    }
  ],
      }
    }
  };
</script>

<style lang="scss">

</style>