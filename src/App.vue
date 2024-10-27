<template>
  <v-app>
    <v-layout>
      <AppBar />
      <v-main style="background-color: #ffff">
        <RouterView />
      </v-main>
    </v-layout>
    <Footer />
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
import { useDisplay } from "vuetify";

const { mobile } = useDisplay();
</script>
