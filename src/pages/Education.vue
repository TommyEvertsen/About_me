<template>
  <main>
    <v-container class="px-10 mt-10 mb-10">
      <v-row class="mt10">
        <v-col cols="12" xl="4" lg="6" md="12" sm="12" xs="12">
          <h1 class="headline">Study at the University</h1>
          <div class="mt-10 uni-text">
            <p style="font-size: large; line-height: 2em">
              I completed a professional front-end development program at the
              University of California, which consisted of five courses, each
              with a duration of three months. This comprehensive program
              provided me with a deep understanding of the logical aspects of
              programming and the principles of designing user-friendly web
              pages. It also emphasized accessibility, teaching us how to create
              web content that is accessible to individuals with visual
              impairments and other disabilities.
            </p>
            <br />
            <p style="font-size: large; line-height: 2em">
              Throughout the program, students collaborated in teams to simulate
              real-world working environments. We collectively developed web
              pages, supported each other, and brainstormed ideas for mutual
              improvement. The instructors were exceptionally helpful, offering
              their expertise to assist us with our projects. We engaged in
              discussions about our code, addressing challenges we encountered,
              and received valuable tips for writing more efficient code. I
              thoroughly enjoyed this program and highly recommend it to anyone
              interested in programming and web design.
            </p>
          </div>
        </v-col>

        <v-col>
          <v-img max-height="630" :src="diploma"> </v-img>
        </v-col>
      </v-row>

      <v-container class="mt-10 mb-10">
        <h2 class="text-center">My coding journey</h2>
      </v-container>

      <TimeLine v-if="smAndUp" />
      <TimeLineMobile v-if="smAndDown" />
    </v-container>
  </main>
</template>

<script setup>
import diploma from "@/assets/images/diploma.jpg";
import TimeLine from "@/components/TimeLine.vue";
import TimeLineMobile from "@/components/TimeLineMobile.vue";
import { useDisplay } from "vuetify";

const { smAndUp } = useDisplay();
const { smAndDown } = useDisplay();
</script>

<style>
.headline {
  color: #5b8fb9;
  font-weight: bold;
}

@media screen and (max-width: 768px) {
  .headline {
    text-align: center;
  }
}
</style>
