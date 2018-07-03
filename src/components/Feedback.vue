<template>
  <v-dialog persistent v-model="feedback" width="600">
    <v-card>
      <v-card-title class="headline">告诉我们你的使用感受</v-card-title>
      <v-card-text>
        <v-container fluid>
          <v-radio-group v-model="mood" row>
            <v-radio label="感觉良好" value="happy" ></v-radio>
            <v-radio label="差强人意" value="unhappy"></v-radio>
          </v-radio-group>
          <v-textarea solo label="告诉我们原因"></v-textarea>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" flat @click="closeFeedback">取消</v-btn>
        <v-btn color="blue darken-1" flat @click="closeFeedback">提交</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Feedback',
  data () {
    return {
      mood: 'happy'
    }
  },
  computed: {
    ...mapState({
      feedback: state => state.app.feedback
    })
  },
  methods: {
    ...mapActions([
      'closeFeedback'
    ])
  }
}
</script>

<style scoped lang="scss">

</style>
