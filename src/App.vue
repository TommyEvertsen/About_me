<template>
  <v-app>
    <v-layout class="fullHeight">
      <AppBar />
      <v-main
        :style="{
          backgroundColor: $vuetify.theme.current.colors.mainBackground,
        }"
      >
        <RouterView />
      </v-main>
    </v-layout>
    <Footer />
  </v-app>
</template>

<script setup>
import { RouterView } from "vue-router";
import { useDisplay } from "vuetify";
import "@/styles/styles.css";

const { mobile } = useDisplay();
</script>
