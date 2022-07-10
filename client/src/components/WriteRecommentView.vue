<template>
  <!-- 댓글 작성 영역 -->
  <div class="row">
    <div class="comment-form col-12">
      <form>
        <div class="row">
          <div class="form-group mb-3 px-2">
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="5"
              v-model="commentText"></textarea>
          </div>
        </div>
      </form>
      <div class="row">
        <!-- <div class="form-check ps-5 text-start col">
          <input
            class="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault">
            비밀글
          </label>
        </div> -->
        <div class="text-end col">
          <button
            type="button"
            class="btn btn-outline-dark btn-sm"
            @click="registerComment">
            등록
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    // 어떤 페이지냐에 따라 API 호출 주소 분기
    pageType: {
      type: String,
      default: ""
    },
    projectId: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      commentData: {
        pageType: "",
        commentText: "",
        projectId: null
      },
      comments: [
        {
          id: 1,
          is_secret: false,
          content: "안녕하세요. 참가하고 싶은데 언제까지 모집하시나요?",
          insert_date: "2022/06/05 13:01",
          writer: "떡볶이",
          parent: null,
          seq: 1
        },
        {
          id: 2,
          is_secret: false,
          content: "7월 30일까지 모집할 예정입니다.",
          insert_date: "2022/06/05 18:41",
          writer: "오뎅",
          parent: 1, // 부모댓글의 id
          seq: 2
        },
        {
          id: 3,
          is_secret: true,
          content: "Node.js를 잘 다뤄야 하나요?",
          insert_date: "2022/06/06 07:34",
          writer: "순대",
          parent: null, // 부모댓글의 id
          seq: 1
        }
      ]
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    async registerComment() {
      let data = this.commentData;
      // 댓글 등록 시 넘겨줄 정보들
      data.pageType = "projectRecruit";
      data.projectId = this.projectId;
      data.writerId = 1; // TODO: 이건 세션에서 가져와서 넣어줘야됨
      data.commentText = this.commentText;
      data.parentId = null; // 넣어줄거 생각하기.. 

      data.targetId = null; // 얘가 parent의 역할,, (같은 그룹을 짓는건데 부모 댓글의 id로.. )
      data.targetSeq = 1; // 여기는 그 그룹 안에서 순서(1, 2, 3, 4...)

      // 댓글 입력 없이 등록 버튼 누르는 경우 예외처리
      if (data.commentText === "" || !data.commentText) {
        return;
      }

      // TODO: 대댓글인 경우 targetId, targetSeq 설정해주는 것 필요함.!

      const r = await this.$post(
        // TODO: axios.defaults.baseURL로 변경
        `http://localhost:3000/comment/register`,
        data
      );
      // TODO: 정상 등록 -> 댓글 부분 화면 갱신 필요 -> 댓글 get 다시 요청
      if (r.status === 200) {
        console.log("댓글 등록 성공");
      }
    }
  }
};
</script>
