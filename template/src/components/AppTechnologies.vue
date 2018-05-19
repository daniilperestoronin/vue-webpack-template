<template>
  <div>
    <technologies-sub-nav/>
    <technologies-about/>
  </div>
</template>

<script>
import TechnologiesSubNav from "./technologies/TechnologiesSubNav.vue";
import TechnologiesAbout from "./technologies/TechnologiesAbout.vue";

export default {
  name: "AppTechnologeis",
  components: {
    TechnologiesSubNav,
    TechnologiesAbout
  }
};
</script>

<style scoped>

</style>