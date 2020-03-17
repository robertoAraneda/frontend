<template>
  <div>
    <Navbar />
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-card class="elevation-12 mt-5">
            <v-form @submit.prevent="login">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>LOGIN</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-text-field
                  label="Username"
                  prepend-icon="mdi-account-circle"
                  type="email"
                  v-model="user.email"
                  value
                />
                <v-text-field
                  :type="showPassword ? 'text' : 'password'"
                  label="Password"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click="showPassword = !showPassword"
                  v-model="user.password"
                />
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" type="submit" text>Entrar</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import User from '../models/User'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default {
  name: 'Login',
  components: {
    Navbar,
    Footer
  },
  data: () => ({
    showPassword: false,
    user: new User('', '')
  }),
  methods: {
    login() {
      this.$store.dispatch('login', this.user).then(() => {
        this.$router.replace({ name: 'Dashboard' })
      })
    }
  }
}
</script>

<style></style>
