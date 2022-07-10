<template>
  <div>
    <section class="banner d-flex align-items-center">
      <div class="container">
        <h1>프로젝트</h1>
        <p>관심있는 프로젝트에 참여해보세요!</p>
      </div>
    </section>
    <section class="container">
      <div
        class="d-flex pb-5 align-items-start justify-content-between section_first">
        <div class="d-flex">
          <RegionSortLayout />
          <!-- 고민좀해보자 @change vs @sort-status -->
          <RecruitStatus @sort-status="sortStatus" :status="status" />
        </div>
        <registerbtn-layout :btnText="btnText" />
      </div>
      <div
        class="d-flex pt-5 mb-4 align-items-start justify-content-between section_second">
        <RecruitSortLayout />
        <div class="d-flex">
          <StackSearchLayout />
          <SearchAll />
        </div>
      </div>
      <CardList :projects="projects" @test="test" />
    </section>
  </div>
</template>
<script>
import RecruitSortLayout from "../components/layouts/RecruitSortLayout.vue";
import RegionSortLayout from "@/components/layouts/RegionSortLayout.vue";
import StackSearchLayout from "@/components/layouts/StackSearchLayout.vue";
import SearchAll from "../components/SearchAll.vue";
import RecruitStatus from "@/components/layouts/RecruitStatus.vue";
import CardList from "@/components/CardList.vue";
import RegisterbtnLayout from "../components/layouts/RegisterbtnLayout.vue";
export default {
  components: {
    RecruitSortLayout,
    RegionSortLayout,
    StackSearchLayout,
    SearchAll,
    RecruitStatus,
    CardList,
    RegisterbtnLayout
  },
  data() {
    return {
      btnText: "모집글 작성",
      projects: [],
      status: "REC",
      message: "HELLO!!!!"
    };
  },
  provide() {
    return {
      message: this.message
    };
  },
  setup() {},
  created() {},
  mounted() {
    console.log(this.projects);
  },
  unmounted() {},
  methods: {
    test() {
      console.log(this.projects);
    },
    sortStatus(recruitStatus) {
      console.log("method : sortStatus", recruitStatus);
    }
  }
};
</script>
<style lang="scss" scoped>
.banner {
  color: #fff;
  height: 200px;
  background-color: #1379d2;
  margin-bottom: 42px;
}
.section_first {
  border-bottom: 1px solid #838383;
}
.stack_search {
  width: 200px;
}
.btn_write {
  border: 1px solid #363636;
  transition: 0.2s;
}
.btn_write:hover {
  background-color: #363636;
  color: #fff;
}
</style>
