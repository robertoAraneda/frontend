<template>
  <div>
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      app
      overflow
    />

    <v-app-bar :clipped-left="primaryDrawer.clipped" app>
      <v-app-bar-nav-icon
        @click.stop="primaryDrawer.model = !primaryDrawer.model"
      />
      <v-toolbar-title>Vuetify</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid> </v-container>
    </v-content>
    <v-footer :inset="footer.inset" app>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Dashboard',
  mounted() {
    axios
      .get('//localhost:8000/api/v1/state')
      .then(response => console.log(response))
  },
  data: () => ({
    primaryDrawer: {
      model: null,
      clipped: false
    },
    footer: {
      inset: false
    }
  })
}
</script>

<style></style>
