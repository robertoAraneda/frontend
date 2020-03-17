<template>
  <v-app-bar app color="primary" dark>
    <v-spacer></v-spacer>
    <template>
      <v-btn
        v-for="link in filterLink"
        :key="`${link.label}-header-link`"
        :to="link.url"
        rounded
        text
        >{{ link.label }}</v-btn
      >
    </template>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Navbar',
  data: () => ({
    links: [
      {
        label: 'Home',
        url: '/',
        authenticated: false
      },
      {
        label: 'Login',
        url: '/login',
        authenticated: false
      },
      {
        label: 'Dashboard',
        url: '/dashboard',
        authenticated: true
      },
      {
        label: 'Register',
        url: '/register',
        authenticated: false
      }
    ]
  }),
  computed: {
    ...mapGetters({
      authenticated: 'authenticated',
      user: 'user'
    }),
    filterLink() {
      return this.links.filter(link => {
        return link.authenticated === !!this.authenticated
      })
    }
  }
}
</script>

<style></style>
