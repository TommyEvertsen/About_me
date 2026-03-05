<template>
  <v-app>
    <Analytics />
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
import { Analytics } from '@vercel/analytics/vue';
import "@/styles/styles.css";

const { mobile } = useDisplay();
</script>
