<template>
  <v-content
    class="bg-gray-2"
    dark
  >
    <v-container>
      <h1 class="text-dark-blue">
        Hurricane
      </h1>
      <h3 class="text-gray-9">
        The disruption caused by a hurricane is represented by this range of
        problems.<br />
        You can adjust the proportion of these problems now if you wish:
      </h3>
      <div class="d-flex justify-center mt-12">
        <v-btn
          class="white margin-auto"
          color="secondary lighten-4"
          :style="{
            'text-transform': 'unset'
          }"
          outlined
          rounded
          @click="$router.push('/brc/scenario')"
        >
          <h2>Next</h2>
        </v-btn>
      </div>
    </v-container>
  </v-content>
</template>
