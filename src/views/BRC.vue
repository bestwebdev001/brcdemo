<template>
  <v-app dark>
    <v-app-bar
      app
      color="white"
      class="elevation-0"
      height="80"
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="/images/brc-logo.png"
          transition="scale-transition"
          height="60"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        class="mr-2"
        icon
      >
        <v-icon color="primary" size="50">mdi-xbox-controller-menu</v-icon>
      </v-btn>
    </v-app-bar>

    <router-view />
  </v-app>
</template>

<script>
export default {
  watch: {
    '$route.fullPath': {
      handler: function () {
        if (this.$route.fullPath === '/brc') {
          this.$router.push('/brc/business')
        }
      },
      immediate: true
    }
  }
}
</script>
