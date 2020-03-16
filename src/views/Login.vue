<template>
  <div>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" md="4">
          <v-card class="elevation-12 mt-5">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>LOGIN</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Username"
                  prepend-icon="mdi-account-circle"
                />
                <v-text-field
                  :type="showPassword ? 'text' : 'password'"
                  label="Password"
                  prepend-icon="mdi-lock"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click="showPassword = !showPassword"
                />
              </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text>Entrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    showPassword: false
  })
}
</script>

<style></style>
