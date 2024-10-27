//Routing
import AboutMe from "@/pages/About-me.vue";
import Certificates from "@/pages/Certificates.vue";
import ContactMe from "@/pages/Contact-me.vue";
import Education from "@/pages/Education.vue";
import Home from "@/pages/Home.vue";
import Projects from "@/pages/Projects.vue";
import VideoGames from "@/pages/VideoGames.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  history: createWebHistory(
    process.env.NODE_ENV === "production" ? "/Portofolio/" : "/"
  ),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Home",
      },
    },
    {
      path: "/about",
      name: "about",
      component: AboutMe,
      meta: {
        title: "About me",
      },
    },
    {
      path: "/certificates",
      name: "certificates",
      component: Certificates,
      meta: {
        title: "Certificates",
      },
    },
    {
      path: "/videogames",
      name: "video-games",
      component: VideoGames,
      meta: {
        title: "Videogames",
      },
    },
    {
      path: "/projects",
      name: "projects",
      component: Projects,
      meta: {
        title: "Projects",
      },
    },
    {
      path: "/education",
      name: "education",
      component: Education,
      meta: {
        title: "Education",
      },
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactMe,
      meta: {
        title: "Contact me",
      },
    },
    {
      path: "/Portofolio/",
      redirect: "/",
    },
  ],
  /*  For deployment
  {
    path: "/Portofolio/",
    redirect: "/",
  },
], */
});

export default router;
