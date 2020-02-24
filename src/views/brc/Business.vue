<template>
  <v-content
    class="bg-gray-2"
    dark
  >
    <v-container>
      <h1 class="text-dark-blue text-center mb-4">
        Please tell us about your business
      </h1>
      <v-row>
        <v-col
          class="d-flex align-center"
          cols="12"
          sm="6"
          md="3"
          xl="2"
        >
          <h3>Where are you located?</h3>
        </v-col>
        <v-col
          class="d-flex align-center"
          cols="12"
          sm="6"
          md="3"
          xl="2"
        >
          <v-text-field
            placeholder="zip"
            solo
            hide-details
          />
        </v-col>
        <v-col
          class="d-none d-md-block"
          cols="0"
          md="6"
          xl="8"
        />
        <v-col
          class="d-flex align-center"
          cols="12"
          md="6"
          lg="5"
          xl="3"
        >
          <h3>Which category best describes your business?</h3>
        </v-col>
        <v-col
          class="d-flex align-center"
          cols="12"
          md="6"
          lg="7"
          xl="5"
        >
          <v-select
            :items="[
              'Ag, Mining, Construction',
              'Transportation, Communication, Utilities',
              'Manufacturing',
              'Wholesale, Retail, Trade',
              'Finance, Insurance, Real Estate',
              'Service Sectors'
            ]"
            placeholder="select"
            solo
            hide-details
          />
        </v-col>
        <v-col
          class="d-none d-xl-block"
          cols="0"
          xl="4"
        />
        <v-col
          class="d-flex align-center"
          cols="12"
          md="6"
          lg="5"
          xl="3"
        >
          <h3>Which type best describes your business?</h3>
        </v-col>
        <v-col
          class="d-flex align-center"
          cols="12"
          md="6"
          lg="7"
          xl="5"
        >
          <v-select
            :items="[
              'Fortune 500',
              'Very small (0 - 9)',
              'Small (10 - 99)',
              'Medium (100 - 999)',
              'Large (1000 - 9999)',
              'Very Large (10000+)'
            ]"
            placeholder="select"
            solo
            hide-details
          />
        </v-col>
        <v-col
          cols="0"
          xl="4"
        />
        <v-col
          class="d-flex align-center"
          cols="12"
        >
          <h3 class="mr-8">Do you own your building?</h3>
          <v-checkbox />
          <h3>Yes</h3>
          <v-checkbox />
          <h3>No</h3>
        </v-col>
        <v-col
          class="d-flex align-center"
          cols="12"
          md="6"
          lg="5"
          xl="3"
        >
          <h3>What is your approximate annual sales revenue?</h3>
        </v-col>
        <v-col
          class="d-flex align-center"
          cols="12"
          md="3"
          xl="2"
        >
          <v-text-field
            prefix="$"
            solo
            hide-details
          />
        </v-col>
        <v-col
          class="d-none d-md-block"
          cols="0"
          md="3"
          xl="4"
        />
        <v-col
          cols="12"
          class="d-flex justify-center mt-12"
        >
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
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>
