<template>
  <div>
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :clipped="primaryDrawer.clipped"
      app
      :mini-variant.sync="mini"
      permanent
    >
      <v-list-item class="px-3 py-1">
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-title>John Leider</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item v-for="item in items" :key="item.text" link>
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.text }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-navigation-drawer>

    <v-app-bar
      color="primary"
      :clipped-left="primaryDrawer.clipped"
      app
      dark
      flat
    >
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
    items: [
      { icon: 'mdi-trending-up', text: 'Most Popular' },
      { icon: 'mdi-youtube-subscription', text: 'Subscriptions' },
      { icon: 'mdi-history', text: 'History' },
      { icon: 'mdi-playlist-play', text: 'Playlists' },
      { icon: 'mdi-clock', text: 'Watch Later' }
    ],
    footer: {
      inset: false
    },
    mini: true
  })
}
</script>

<style></style>
