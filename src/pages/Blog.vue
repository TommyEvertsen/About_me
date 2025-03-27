<template>
  <main>
    <v-container class="px-10 mt-10 mb-10">
      <v-row>
        <v-col class="pa-2" cols="12" xl="5" lg="6" md="12" sm="12" xs="12">
          <h1 class="headline">Welcome to my blog</h1>
          <div v-if="currentBlogPost" class="mt-10">
            <h2 class="mt-7 font-sans">{{ currentBlogPost.title }}</h2>
            <p class="mt-2">{{ currentBlogPost.date }}</p>
            <div v-for="paragraph in currentBlogPost.content" :key="paragraph">
              <p class="mt-6" style="font-size: large">{{ paragraph }}</p>
            </div>
          </div>
        </v-col>

        <v-col class="pa-2" cols="12" lg="6" md="12" sm="12" xs="12">
          <v-img>{{ currentBlogPost.image }} </v-img>
        </v-col>
      </v-row>

      <div class="text-center mt-16">
        <v-pagination
          v-model="page"
          :length="blogPosts.length"
          rounded="circle"
        ></v-pagination>
      </div>
    </v-container>
  </main>
</template>

<script setup>
import { ref, computed } from "vue";

const blogPosts = [
  {
    title: "My first post",
    date: "25.03.2025",
    image: "",
    content: [
      "Today, I decided to create a blog on my portfolio page, inspired by a significant event in my life: the birth of my daughter. Initially, I planned to update my About Me section, but I realized that a blog would keep my portfolio more dynamic and reduce the need for frequent updates.",
      "At this moment, I am uncertain about the blog's focus. It might cover major life events or delve into my career as a developer. Time will tell.",
      "Returning to the main topic, my wife recently gave me the most precious gift: our daughter. The experience was surreal for me as a first-time parent. In the operating room, I heard the announcement of her arrival and the sound of her crying, but I couldn't see her immediately. When I finally saw her being carried to a table, I extended my hand, and she instantly grabbed my finger and smiled, melting my heart.",
      "Afterward, they took her to another room, leaving my wife and me alone. At that moment, it felt like nothing had changed; we were still just the two of us. However, when we met our daughter again, we realized our lives had changed forever.",
      "The strong love I felt for this little human I had never met before was surprising. I now understand the depth of parental love and appreciate more what my parents did for me. I recognize the hard work involved in raising a child. Each day, my love for her grows stronger. I celebrate small milestones, like her pooping or eating well, and feel immense joy watching her grow bigger, smarter, and stronger.",
      "I now cherish family life and look forward to creating beautiful memories with my wife and daughter. Although there will be challenges ahead, I am confident we will tackle them one at a time and provide our daughter with a good life and future.",
    ],
  },
  {
    title: "Thoughts on creativity",
    date: "27.03.2025",
    image: "",
    content: ["Testeren"],
  },
];

const page = ref(1);

const currentBlogPost = computed(() => {
  return blogPosts[page.value - 1];
});
</script>

<style>
.headline {
  color: #5b8fb9;
  font-weight: bold;
}
</style>
