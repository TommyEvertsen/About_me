<template>
  <v-app-bar :elevation="1" color="#1A237E">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="show"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>{{ $route.meta.title || "Home" }} </v-app-bar-title>
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

    <v-list color="#6495ED" density="compact" nav>
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

const drawer = ref(false);

const router = useRouter();

const show = () => {
  drawer.value = !drawer.value;
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
  color: cornflowerblue;
}
</style>
