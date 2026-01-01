<template>
  <main>
    <v-container class="px-10 mt-10 mb-10">
      <v-row>
        <v-col>
          <h1
            :style="{
              color: $vuetify.theme.current.colors.secondaryText,
            }"
          >
            Welcome to my blog
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          class="pr-16 blogText"
          cols="12"
          xl="6"
          lg="6"
          md="12"
          sm="12"
          xs="12"
        >
          <div v-if="currentBlogPost" class="mt-10">
            <h2
              v-if="showTitle"
              class="mt-7 typewriter"
              :class="{ spacemode: spacemode }"
            >
              {{ currentBlogPost.title }}
            </h2>
            <p class="mt-2">{{ currentBlogPost.date }}</p>
            <div v-for="paragraph in currentBlogPost.content" :key="paragraph">
              <p class="mt-6 paragraphText">{{ paragraph }}</p>
            </div>
          </div>
        </v-col>

        <v-col
          class="pa-2 mt-12"
          cols="12"
          xl="6"
          lg="6"
          md="12"
          sm="12"
          xs="12"
        >
          <v-img
            :key="currentBlogPost.image"
            class="align-end text-white fade-in"
            width="100%"
            max-height="800"
            :src="currentBlogPost.image"
            cover
          >
          </v-img>
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
import { ref, computed, watch } from "vue";
import creative from "@/assets/images/blogImages/creative.jpg";
import programming from "@/assets/images/blogImages/programming.jpg";
import porks from "@/assets/images/blogImages/porks.jpg";
import wife from "@/assets/images/blogImages/wife.JPG";
import { spacemode } from "@/stores/spacemode";

const blogPosts = [
  {
    title: "My first blogpost.",
    date: "25.03.2025",
    image: porks,
    content: [
      "Today, I decided to create a blog on my portfolio page, inspired by a significant event in my life: the birth of my daughter. Initially, I planned to update my About Me section, but I realized that a blog would keep my portfolio more dynamic and reduce the need for frequent updates of the about me section.",
      "At this moment, I am uncertain about the blog's focus. It might cover major life events or delve into my career as a developer. Time will tell.",
      "Returning to the main topic, my wife recently gave me the most precious gift: our daughter. The experience was surreal for me as a first-time parent. In the operating room, I heard the announcement of her arrival and the sound of her crying, but I couldn't see her immediately. When I finally saw her being carried to a table, I extended my hand, and she instantly grabbed my finger and smiled, melting my heart.",
      "Afterward, they took her to another room, leaving my wife and me alone. At that moment, it felt like nothing had changed; we were still just the two of us. However, when we met our daughter again, we realized our lives had changed forever.",
      "The strong love I felt for this little human I had never met before was surprising. I now understand the depth of parental love and appreciate more what my parents did for me. I recognize the hard work involved in raising a child. Each day, my love for her grows stronger. I celebrate small milestones, like her pooping or eating well, and feel immense joy watching her grow bigger, smarter, and stronger.",
      "I now cherish family life and look forward to creating beautiful memories with my wife and daughter. Although there will be challenges ahead, I am confident we will tackle them one at a time and provide our daughter with a good life and future.",
    ],
  },
  {
    title: "Thoughts on creativity",
    date: "28.03.2025",
    image: creative,
    content: [
      "I consider myself a creative individual, always finding joy in the act of creation. Whether it is writing stories, developing video games, or working on coding projects, my passion for creativity knows no bounds.",
      "As children, we all possess an innate creativity, building castles from sofas, constructing treehouses, and inventing fictional characters. As we grow older, we must discover new avenues to channel this creativity. During my school years, when I outgrew my earlier creative pursuits, I found new ways to express my creativity.",
      "I used to write a unique story for each of my classmates. Instead of focusing on the teacher's lessons, I found it far more engaging to craft stories. My friends and I also created fictional characters and even produced a school newspaper featuring these characters, which was immensely entertaining.",
      "Later, I ventured into video game development, particularly enjoying the creation of two different JRPGs, each taking several years to complete. Every character in the game provided an opportunity to weave a small story, and I relished designing the game's environment. Although these games were not widely played, the process of creating them was deeply fulfilling.",
      "Today, my creative endeavors continue, albeit in different forms. I write a morning story for my wife every day, offering her something pleasant to read upon waking. These stories are usually lighthearted and humorous but can also be profound and meaningful. While I still enjoy developing video games, my responsibilities as a husband and father leave me with limited time for such projects. I also have numerous ideas for coding projects, but they often remain unrealized due to time constraints.",
      "I am uncertain how my creativity will manifest in the future, but I am confident that it will never cease. The joy of creating will always be a significant part of my life.",
    ],
  },
  {
    title: "Learning programming",
    date: "07.05.2025",
    image: programming,
    content: [
      "When I told my wife that I had always dreamt of working in programming, she asked me why I had not changed my career. I had all the excuses in my head: I can't quit working because I have bills to pay, I can't study after work because I need my free time, and so on.",
      "She taught me that to achieve something we want, we must make sacrifices. I could either sacrifice money to pursue my dream, sacrifice my free time, or sacrifice my dream altogether. She encouraged me to enroll in a programming course to see if I enjoyed it and then make a decision.",
      "I enrolled in a JavaScript course. At the time, I didn't realize it was a supplementary course to a Java course, so it wasn't chapter one but more like chapter ten. It was very challenging, and I had the mindset that using the internet was cheating. Little did I know that using the internet is crucial for programming.",
      "Now, it seems silly not to use the internet, as I rely on it heavily for programming. It's funny to think back to when I started with such an old-school mentality. Despite the difficulty, I managed to complete most of the course, but it took a long time. One day, a friend came to help me and asked why I started there. He suggested I should begin with the basics.",
      "Even though the course was very difficult, I loved it. When I started with the basics, it was also enjoyable, and I realized it was much easier than I initially thought. I completed several programming courses and pursued further education at the University of California.",
      "If I could do it all over again, I would focus on learning one language thoroughly rather than trying to learn them all. Once you know one language well, the others are quite similar and easier to learn.",
      "Now, I feel very fulfilled at work, doing something fun, creative, and challenging. Learning programming has been one of the best decisions of my life, and I look forward to continuing this journey for many years to come.",
    ],
  },
  {
    title: "Tribute to my wife",
    date: "31.12.2025",
    image: wife,
    content: [
      "As 2025 comes to a close, I want to pay homage to my wife.",
      "First and foremost, thank you for always staying by my side. Every challenge I face, I have a partner who helps me tackle it. You’ve been my cheerleader, lifting me up when things get tough. Having your support means the world to me.",
      "I’m also grateful for the greatest gift you’ve given us—our child, whom I love dearly. Transitioning from being single to becoming a family man has been an incredible experience. It wasn’t easy at first, with our child being born prematurely and a long hospital stay, but everything turned out fine. Now, every day is a joy as we watch our child grow and learn new skills. It’s truly a blessing.",
      "You’ve pushed me out of my comfort zone and encouraged me to embrace new and exciting challenges. You were the one who inspired me to pursue my dream of becoming a developer. While I saw obstacles, you saw possibilities and guided me in the right direction. Thanks to you, I now enjoy going to work every day.",
      "Right now, I’m sitting here in Saigon on parental leave, reflecting on how much I’ve enjoyed this experience. It was your idea to spend this time here, once again pushing me to try something new and exciting. That’s why I felt compelled to dedicate this blog post to you as a thank you for everything.",
      "Life is full of excitement, happiness, challenges, and even sadness—but everything is easier when you have someone to share it with. We make each other stronger, providing backup when the batteries run low and sharing the thrill when a new adventure begins. Everything is better together, and I look forward to our future, whatever it may bring.",
      "Thank you for being my wife, my inspiration, and my greatest supporter.",
    ],
  },
];

const page = ref(1);
const showTitle = ref(true);

watch(page, () => {
  showTitle.value = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
  setTimeout(() => {
    showTitle.value = true;
  }, 50);
});

const currentBlogPost = computed(() => {
  return blogPosts[page.value - 1];
});
</script>

<style>
@media screen and (max-width: 768px) {
  .blogText {
    padding-right: unset !important;
  }
}

.v-img {
  width: 100%;
  height: auto;
  max-width: 100%;
  object-fit: cover;
}
</style>
