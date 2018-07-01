<template>
  <div class="home">
    <Broadcast message="Home Page"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Broadcast from '@/components/Broadcast.vue'

export default {
  name: 'home',
  components: {
    Broadcast
  }
}
</script>
