//Routing
import AboutMe from "@/pages/About-me.vue";
import Certificates from "@/pages/Certificates.vue";
import ContactMe from "@/pages/Contact-me.vue";
import Education from "@/pages/Education.vue";
import Home from "@/pages/Home.vue";
import Projects from "@/pages/Projects.vue";
import VideoGames from "@/pages/VideoGames.vue";
import Blog from "@/pages/Blog.vue";
import { createRouter, createWebHistory } from "vue-router";
import Achievements from "@/pages/Achievements.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  history: createWebHistory(
    process.env.NODE_ENV === "production" ? "/About_me/" : "/"
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
        title: "Game development",
      },
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
      meta: {
        title: "Blog",
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
      path: "/achievements",
      name: "achievements",
      component: Achievements,
      meta: {
        title: "Achievements",
      },
    },
    {
      path: "/About_me/",
      redirect: "/",
    },
  ],
});

export default router;
