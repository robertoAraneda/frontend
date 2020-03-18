<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      :mini-variant.sync="mini"
      permanent
    >
      <v-list>
        <v-list-item>
          <v-list-item-title class="title">{{ user.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list nav dense>
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
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="primary" app dark flat>
      <v-toolbar-title>Vuetify</v-toolbar-title>
    </v-app-bar>
    <v-content>
      <v-container fluid> </v-container>
    </v-content>
    <v-footer inset app>
      <span class="px-4">&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  mounted() {
    axios
      .get('//localhost:8000/api/v1/state')
      .then(response => console.log(response))
  },
  computed: {
    ...mapGetters(['user'])
  },
  data: () => ({
    drawer: true,
    items: [
      { icon: 'mdi-trending-up', text: 'Most Popular' },
      { icon: 'mdi-youtube-subscription', text: 'Subscriptions' },
      { icon: 'mdi-history', text: 'History' },
      { icon: 'mdi-playlist-play', text: 'Playlists' },
      { icon: 'mdi-clock', text: 'Watch Later' }
    ],
    mini: true
  })
}
</script>

<style></style>
