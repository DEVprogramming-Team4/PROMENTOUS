<template>
  <div class="projectCard card" style="width: 17rem">
    <section class="card-body">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <span class="text-start text-muted"
          >시작예정일 : {{ projects[0].expDate }}</span
        >
        <span class="project-status">{{ projects[0].status }}</span>
      </div>
      <h2>{{ projects[0].title }}</h2>
      <p class="project-desc ellipsis">
        {{ projects[0].desc }}
      </p>
      <div
        class="d-flex justify-content-between align-items-end border-bottom mb-2">
        <span>{{ projects[0].user }}</span>
        <div class="d-flex flex-column">
          <div>
            <i class="bi bi-bookmark me-1"></i>
            <span> {{ projects[0].bookmarkCount }}</span>
          </div>
          <div>
            <i class="bi bi-eye me-1"></i>
            <span> {{ projects[0].viewCount }}</span>
          </div>
        </div>
      </div>
      <div
        class="stack-icon me-1"
        v-for="(stack, i) in projects[0].usingStack"
        :key="i">
        {{ stack }}
      </div>
      <div class="stack-icon">+3</div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
  components: {},
  data() {
    return {
      projects: [
        {
          title: "Vue-Todo",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione totamvero sint cumque at obcaecati, ullam, inventore voluptatum hic facerevoluptates dolore sequi, pariatur illo temporibus! Aliquid suscipitdolorum quo!",
          user: "devprogramming4",
          expDate: "2022-08-09",
          usingStack: ["nodeJS", "vue", "mysql"],
          bookmarkCount: 3,
          viewCount: 5,
          status: "ING"
        },
        {
          title: "React-Todo",
          desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione totamvero sint cumque at obcaecati, ullam, inventore voluptatum hic facerevoluptates dolore sequi, pariatur illo temporibus! Aliquid suscipitdolorum quo!",
          user: "sungjae",
          expDate: "2022-08-08",
          usingStack: ["JS", "nodeJS"],
          bookmarkCount: 3,
          viewCount: 5,
          status: "ING"
        }
      ]
    };
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style scoped>
.projectCard {
  margin-bottom: 32px;
  border-radius: 15px;
}
.stack-icon {
  font-size: 12px;
  display: inline-block;
  padding: 0 12px;
  text-align: center;
  border-radius: 28px;
  color: white;
  background-color: #2d3648;
  box-sizing: border-box;
}
.project-status {
  display: inline-block;
  padding: 4px 12px;
  text-align: center;
  border-radius: 28px;
  border: 2px solid #2d3648;
  box-sizing: border-box;
}
.ellipsis {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
