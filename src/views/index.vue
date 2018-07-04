<template>
  <v-app>
    <sidebar/>
    <headbar/>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
// @ is an alias to /src
import { Headbar, Sidebar } from '@/layout/index'

export default {
  name: 'app-main',
  components: {
    Headbar,
    Sidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
