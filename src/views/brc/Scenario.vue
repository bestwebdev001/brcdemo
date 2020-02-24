<template>
  <v-content class="bg-dark-blue white--text">
    <v-container>
      <h1>Choose a scenario</h1>
      <h3>
        To begin with, choose an example event type. Each of these
        event types represents a different variety of problems that
        might disrupt your business.
      </h3>
      <a class="d-flex align-center">
        <v-icon color="white" size="80">mdi-weather-hurricane</v-icon>
        <h2 class="white--text">hurricane</h2>
      </a>
      <a class="d-flex align-center">
        <v-icon color="white" size="80">mdi-earth-off</v-icon>
        <h2 class="white--text">earthquake</h2>
      </a>
      <a class="d-flex align-center">
        <v-icon color="white" size="80">mdi-power-plug-off</v-icon>
        <h2 class="white--text">power grid failure</h2>
      </a>
      <a class="d-flex align-center">
        <v-icon color="white" size="80">mdi-fire</v-icon>
        <h2 class="white--text">fire</h2>
      </a>
      <a class="d-flex align-center">
        <v-icon color="white" size="80">mdi-home-flood</v-icon>
        <h2 class="white--text">flood</h2>
      </a>
      <a class="d-flex align-center">
        <v-icon color="white" size="80">mdi-skull-outline</v-icon>
        <h2 class="white--text">zombie apocalypse</h2>
      </a>
      <div class="d-flex justify-center mt-12">
        <v-btn
          class="white margin-auto"
          color="primary darken-4"
          :style="{
            'text-transform': 'unset'
          }"
          outlined
          rounded
          @click="$router.push('/brc/hurricane')"
        >
          <h2>Next</h2>
        </v-btn>
      </div>
    </v-container>
  </v-content>
</template>
