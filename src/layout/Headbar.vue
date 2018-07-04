<template>
  <v-toolbar app clipped-left dark color="primary">
    <v-toolbar-side-icon @click.stop="toggleDrawer"></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Vue-admin</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon><v-icon>refresh</v-icon></v-btn>
    <v-btn icon><v-icon>notifications</v-icon></v-btn>
    <v-btn icon><v-icon>settings</v-icon></v-btn>
    <v-btn icon><v-icon @click="openFeedback">mood</v-icon></v-btn>
    <feedback/>
  </v-toolbar>
</template>

<script>
import Feedback from '@/components/Feedback'

import { mapActions } from 'vuex'

export default {
  name: 'Headbar',
  components: {
    Feedback
  },
  methods: {
    ...mapActions([
      'toggleDrawer',
      'openFeedback'
    ])
  }
}
</script>

<style scoped lang="scss">

</style>
