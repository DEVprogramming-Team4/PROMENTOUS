<template>
  <div class="recruit_status">
    <span>모집 상태</span>
    <div class="d-flex">
      <div class="form-check">
        <input
          v-model="recruitStatus"
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="recruitStatusRadio1"
          value="REC"
          @change="$emit('sortStatus', recruitStatus)"
          checked />
        <label class="form-check-label" for="recruitStatusRadio1">
          모집 중
        </label>
      </div>
      <div class="form-check">
        <input
          v-model="recruitStatus"
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="recruitStatusRadio2"
          value="FIN"
          @change="$emit('sortStatus', recruitStatus)" />
        <label class="form-check-label" for="recruitStatusRadio2">
          모집 완료
        </label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    status: {
      type: String
      // default: "REC"
    }
  },
  // emits: {},
  components: {},
  data() {
    return {
      recruitStatus: this.status
    };
  },
  setup() {},
  created() {},
  mounted() {
    console.log(this.recruitStatus);
  },
  unmounted() {},
  methods: {
    radioChange() {
      console.log(this.recruitStatus);
    },

    async sortRecruitStatus(status) {
      return status;
    }
  }
};
</script>
<style lang="scss" scoped>
.recruit_status {
  margin-left: 120px;
}
.form-check-input:checked {
  background-color: #1379d2;
  border-color: #1379d2;
}
.d-flex {
  column-gap: 12px;
}
</style>
