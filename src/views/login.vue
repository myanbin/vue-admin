<template>
  <v-app>
    <v-container fluid fill-height class="login">
      <v-layout align-center justify-center>
        <v-card raised width="400">
          <v-card-title class="headline">登录</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field solo single-line v-model="username" :rules="usernameRules" label="邮箱或手机号" append-icon="person"></v-text-field>
              <v-text-field solo single-line v-model="password" :rules="passwordRules" label="密码" type="password" append-icon="vpn_key"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="handleLogin">登录</v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'home',
  data: () => {
    return {
      valid: true,
      username: '',
      usernameRules: [
        v => !!v || '邮箱或手机号不能为空'
      ],
      password: '',
      passwordRules: [
        v => !!v || '密码不能为空'
      ]
    }
  },
  methods: {
    handleLogin () {
      if (this.$refs.form.validate()) {
        console.log('login:', this.username, this.password)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.login {
  background-color: lightyellow;
}
</style>
