<template>
  <div class="sidebar-page">
    <section class="sidebar-layout">
      <b-sidebar
        position="static"
        type="is-white"
        open
        fullheight>
        <div class="p-1">
          <div class="block">
            <img
              src="@/assets/imgs/logo_red.png"
              alt="Lightweight UI components for Vue.js based on Bulma"
            />
          </div>
          <b-menu class="is-custom-mobile">
            <b-menu-list label="Menu">
              <b-menu-item
                v-for="(item, i) in menu"
                :key="i"
                :icon="item.icon"
                :label="item.name"
                tag="router-link"
                :to="{ name: item.to }"
                :active="$route.name === item.to"></b-menu-item>
            </b-menu-list>
            <b-menu-list label="Actions">
              <b-menu-item
                icon="logout"
                label="Déconnexion"
                tag="a"
                @click="logout"></b-menu-item>
            </b-menu-list>
          </b-menu>
        </div>
      </b-sidebar>

      <div class="content">
        <router-view></router-view>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      menu: [
        {
          name: 'Projets',
          to: 'Dashboard',
          icon: 'view-list'
        },
        {
          name: 'Partenaires',
          to: 'ListPartenaires',
          icon: 'view-list'
        },
        {
          name: 'Equipe',
          to: 'ListEquipe',
          icon: 'view-list'
        },
        {
          name: 'Parametre',
          to: 'ViewParametre',
          icon: 'view-list'
        }
      ]
    }
  },
  methods: {
    ...mapActions({
      actionLogout: 'logout'
    }),
    logout () {
      this.actionLogout()
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style lang="scss">
</style>
