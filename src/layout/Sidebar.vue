<template>
  <v-navigation-drawer app clipped floating :value="drawer" width="250">
    <v-list>
      <v-list-tile v-for="item in navigationItems" :key="item.title" :to="item.to">
        <v-list-tile-action><v-icon>{{ item.icon }}</v-icon></v-list-tile-action>
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'sidebar',
  data () {
    return {
      navigationItems: [
        { icon: 'home', title: '首页', to: '/' },
        { icon: 'person', title: '关于', to: '/about' }
      ]
    }
  },
  computed: {
    ...mapState({
      drawer: state => state.app.drawer
    })
  }
}
</script>

<style scoped lang="scss">

</style>
