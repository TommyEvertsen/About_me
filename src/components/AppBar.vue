<template>
  <v-app-bar :elevation="1" color="secondaryBackground">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="show"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>{{ $route.meta.title || "Home" }} </v-app-bar-title>

    <v-spacer></v-spacer>
    <v-btn
      icon
      class="theme-toggle-btn"
      @click="toggleTheme"
      :color="$vuetify.theme.current.dark ? 'yellow' : 'orange'"
    >
      <v-icon>
        {{
          $vuetify.theme.current.dark
            ? "mdi-white-balance-sunny"
            : "mdi-weather-night"
        }}
      </v-icon>
    </v-btn>
  </v-app-bar>

  <v-navigation-drawer width="220" v-if="drawer" v-model="drawer">
    <v-list>
      <v-list-item
        prepend-avatar="@/assets/images/tommyAvatar.jpg"
        class="me"
        subtitle="Fullstack developer"
        title="Tommy Evertsen"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list color="navLinks" density="compact" nav>
      <v-list-item
        v-for="link in mainlinks"
        :key="link.title"
        :disabled="link.disabled"
        :prepend-icon="link.icon"
        :title="link.title"
        :value="link.value"
        @click="link.click"
        :active="$route.name === link.value"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list-item
        v-for="link in subLinks"
        :key="link.title"
        :disabled="link.disabled"
        :prepend-icon="link.icon"
        :title="link.title"
        :value="link.value"
        @click="link.click"
        :active="$route.name === link.value"
      ></v-list-item>

      <v-divider></v-divider>

      <v-list-item
        v-for="link in otherLinks"
        :key="link.title"
        :disabled="link.disabled"
        :prepend-icon="link.icon"
        :title="link.title"
        :value="link.value"
        :href="link.href"
        :target="link.target"
        :rel="link.rel"
        :active="$route.name === link.value"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref, defineAsyncComponent } from "vue";
import { useRouter } from "vue-router";
import { useTheme } from "vuetify";

const drawer = ref(false);
const router = useRouter();
const theme = useTheme();

const show = () => {
  drawer.value = !drawer.value;
};

const toggleTheme = () => {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
};

const navigateToCertificates = () => {
  router.push({ name: "certificates" }).then(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const navigateToAboutMe = () => {
  router.push({ name: "about" }).then(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const navigateToHome = () => {
  router.push({ name: "home" }).then(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const navigateToGames = () => {
  router.push({ name: "video-games" }).then(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const navigateToProjects = () => {
  router.push({ name: "projects" }).then(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const navigateToEducation = () => {
  router.push({ name: "education" }).then(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const navigateToContact = () => {
  router.push({ name: "contact" }).then(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const navigateToBlog = () => {
  router.push({ name: "blog" }).then(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};

const mainlinks = [
  {
    title: "Home",
    icon: "mdi-home-outline",
    value: "home",
    click: navigateToHome,
  },
  {
    title: "About me",
    icon: "mdi-face-man-shimmer-outline",
    value: "about",
    click: navigateToAboutMe,
  },
  {
    title: "Contact me",
    icon: "mdi-email-outline",
    value: "contact",
    click: navigateToContact,
  },
  {
    title: "Education",
    icon: "mdi-school-outline",
    value: "education",
    click: navigateToEducation,
  },
];

const subLinks = [
  {
    title: "Projects",
    icon: "mdi-application-braces-outline",
    value: "projects",
    click: navigateToProjects,
  },
  {
    title: "Certificates",
    icon: "mdi-certificate-outline",
    value: "certificates",
    click: navigateToCertificates,
  },
  /*   {
    title: "Game dev",
    icon: "mdi-gamepad-variant-outline",
    value: "Game development",
    click: navigateToGames,
  }, */
  {
    title: "Blog",
    icon: "mdi-head-dots-horizontal-outline",
    value: "blog",
    click: navigateToBlog,
  },
];

const otherLinks = [
  {
    title: "Github",
    icon: "mdi-github",
    value: "github",
    href: "https://github.com/TommyEvertsen",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    title: "LinkedIn",
    icon: "mdi-linkedin",
    value: "linkedIn",
    href: "https://www.linkedin.com/in/tommy-evertsen/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
</script>

<style>
.v-list-item
  v-list-item--active
  > v-list-item--link
  > v-list-item--nav
  > v-theme--light
  > v-list-item--density-compact
  > v-list-item--one-line
  > v-list-item--rounded
  > v-list-item--variant-text {
  color: "secondaryText";
}

.v-btn.v-btn--icon.v-theme--dark .v-btn__overlay {
  background: rgba(255, 255, 0, 0.2) !important;
}
</style>
