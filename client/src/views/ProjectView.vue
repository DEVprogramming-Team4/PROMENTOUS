<template>
  <div class="project container">
    <section class="project-list">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </section>
  </div>
</template>

<script>
// @ === /src
import ProjectCard from "@/components/projectCard.vue";

export default {
  name: "ProjectView",
  components: {
    ProjectCard
  }
};
</script>

<style scoped>
.project-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
