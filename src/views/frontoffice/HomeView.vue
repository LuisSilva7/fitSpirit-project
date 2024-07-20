<template>
  <Hero />
  <PastIniciatives />
  <FutureIniciatives />
  <Feedback />
  <Proposals />
</template>

<script>
import Hero from "@/components/frontoffice/Hero.vue";
import PastIniciatives from "@/components/frontoffice/PastIniciatives.vue";
import FutureIniciatives from "@/components/frontoffice/FutureIniciatives.vue";
import Feedback from "@/components/frontoffice/Feedback.vue";
import Proposals from "@/components/frontoffice/Proposals.vue";

export default {
  components: {
    Hero,
    PastIniciatives,
    FutureIniciatives,
    Feedback,
    Proposals,
  },
};
</script>

<style></style>
