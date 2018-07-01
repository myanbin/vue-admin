<template>
  <v-app>
    <v-navigation-drawer app clipped floating v-model="showDrawer">
      <v-list>
        <v-list-tile v-for="item in navigationItems" :key="item.title" :to="item.to">
          <v-list-tile-action><v-icon>{{ item.icon }}</v-icon></v-list-tile-action>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app clipped-left dark color="primary">
      <v-toolbar-side-icon @click.stop="showDrawer = !showDrawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Vue-admin</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>refresh</v-icon></v-btn>
      <v-btn icon><v-icon>notifications</v-icon></v-btn>
      <v-btn icon><v-icon>settings</v-icon></v-btn>
      <v-btn icon><v-icon>mood</v-icon></v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Feedback from '@/components/Feedback.vue'

export default {
  name: 'app',
  components: {
    Feedback
  },
  data () {
    return {
      showDrawer: true,
      navigationItems: [
        { icon: 'home', title: 'Home', to: '/' },
        { icon: 'person', title: 'About', to: '/about' }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
