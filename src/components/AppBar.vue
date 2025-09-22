<template>
  <v-app-bar :elevation="1" color="secondaryBackground">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="show"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>{{ $route.meta.title || "Home" }} </v-app-bar-title>

    <v-spacer></v-spacer>

    <v-switch
      v-if="unlockSpacemode"
      v-model="spacemode"
      class="switch spacemode-active"
      :color="$vuetify.theme.current.dark ? 'yellow' : 'orange'"
      value="red"
      density="compact"
      prepend-icon="mdi-rocket-launch-outline"
      hide-details
      size="small"
    ></v-switch>
    <v-btn
      icon
      class="theme-toggle-btn spacemode-active"
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
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useTheme } from "vuetify";
import {
  allAchievementsUnlocked,
  checkUnlockSpacemode,
  unlockSpacemode,
} from "@/stores/achievements";
import { spacemode } from "@/stores/spacemode";

checkUnlockSpacemode();

const drawer = ref(false);
const router = useRouter();
const theme = useTheme();

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme && theme.global.name.value !== savedTheme) {
    theme.global.name.value = savedTheme;
  }

  if (sessionStorage.getItem("spacemodeUnlocked") === "true") {
    unlockSpacemode.value = true;
  }
});

const show = () => {
  drawer.value = !drawer.value;
};

const toggleTheme = () => {
  const newTheme = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = newTheme;
  localStorage.setItem("theme", newTheme);
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

const navigateToAchievements = () => {
  router.push({ name: "achievements" }).then(() => {
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
  {
    title: "Achievements",
    icon: "mdi-trophy-outline",
    value: "achievements",
    click: navigateToAchievements,
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

.v-input__prepend > .v-icon.mdi-rocket-launch-outline {
  color: orange;
  opacity: unset;
}
.v-theme--dark .v-input__prepend > .v-icon.mdi-rocket-launch-outline {
  color: yellow;
  opacity: unset;
}

.v-switch__track {
  background-color: unset;
  background-color: white !important;
}

.switch {
  margin-right: 10px;
}

@media (max-width: 600px) {
  .v-toolbar-title {
    font-size: 0.9rem !important;
    max-width: 40vw;
  }
  .switch {
    margin-right: 0px;
  }
  .theme-toggle-btn {
    min-width: 24px !important;
    height: 24px !important;
  }
  .v-input__prepend > .v-icon.mdi-rocket-launch-outline {
    font-size: 18px !important;
  }

  button > span.v-btn__content > i {
    font-size: 18px !important;
  }

  .v-switch__track {
    background-color: unset;
    background-color: white !important;
  }
}
</style>
