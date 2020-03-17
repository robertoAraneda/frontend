<template>
  <v-app-bar app color="primary" dark>
    <v-spacer></v-spacer>
    <v-btn
      v-for="link in links"
      :key="`${link.label}-header-link`"
      :to="link.url"
      rounded
      text
      >{{ link.label }}</v-btn
    >
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    links: [
      {
        label: 'Home',
        url: '/'
      },
      {
        label: 'Login',
        url: '/login'
      },
      {
        label: 'Dashboard',
        url: '/dashboard'
      },
      {
        label: 'Register',
        url: '/register'
      }
    ]
  })
}
</script>

<style></style>
