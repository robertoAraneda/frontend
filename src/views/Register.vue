<template>
  <div>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-card class="elevation-12 mt-5">
            <v-form @submit.prevent="register">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>REGISTER</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-text-field
                  label="Nombre"
                  type="text"
                  prepend-icon="mdi-account-circle"
                  v-model="user.name"
                  value
                />
                <v-text-field
                  label="Email"
                  type="email"
                  prepend-icon="mdi-account-circle"
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
                  value
                />
              </v-card-text>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn type="submit" color="primary" text>Entrar</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import User from '../models/User'

export default {
  name: 'Login',
  data: () => ({
    showPassword: false,
    user: new User('', '')
  }),
  methods: {
    register() {
      this.$store.dispatch('register', this.user)
    }
  }
}
</script>

<style></style>
