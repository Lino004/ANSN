<template>
  <aside>
    <div class="sidebar-widget">
      <h3 class="sidebar-title">{{ $t('activite.title') }}</h3>
      <ul class="sidebar-list">
        <li v-for="item in liste" :key="item.id">
          <a @click="setIdCurrActivite(item.id)" :class="{active: idCurrActivite === item.id}">
            <i :class="item.icon"></i> 
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
    <div class="sidebar-widget">
      <h3 class="sidebar-title">{{ $t('activite.titleFile') }}</h3>
      <ul class="sidebar-list">
        <li>
          <a href="#">
            <i class="fa fa-file-pdf-o"></i>
            Brochures.PDF
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const Activite = createNamespacedHelpers('activite');

export default {
  computed: {
    ...Activite.mapState({
      idCurrActivite: 'idCurrActivite'
    }),
    ...Activite.mapGetters({
      liste: 'liste'
    }),
  },
  methods: {
    ...Activite.mapMutations({
      setIdCurrActivite: 'ID_CURR_ACTIVITE'
    })
  }
};
</script>