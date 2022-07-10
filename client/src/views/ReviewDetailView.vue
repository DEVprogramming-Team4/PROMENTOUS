<template>
  <div class="container mt-5">
    <div class="row">
      <!-- 페이지 좌측 -->
      <div class="col-lg-12 pe-xl-1-9 mb-1-9 mb-lg-0">
        <div class="content">
          <!-- 글 제목 -->
          <div class="row text-start">
            <span class="col-10">
              <p class="fs-1 m-0">후기 제목</p>
              <p class="pt-1 ps-1">작성자 | 2022/06/02</p>
            </span>

            <span class="ps-4 col-2">
              <!-- 버튼 UI 추후 수정 예정 -->
              <p>
                <button type="button" class="btn btn-outline-dark btn-sm mx-1">
                  수정
                </button>
                <button type="button" class="btn btn-outline-dark btn-sm">
                  삭제
                </button>
              </p>
              <p>
                <button
                  type="button"
                  class="btn btn-outline-dark btn-sm mx-1 pro-circle">
                  <i class="bi bi-bookmark"></i>
                  <i class="bi bi-bookmark-fill"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-outline-dark btn-sm mx-1 pro-circle">
                  <i class="bi bi-heart"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-outline-dark btn-sm pro-circle">
                  <i class="bi bi-link-45deg pro-circle-icon"></i>
                </button>
              </p>
            </span>
            <hr />
          </div>
          <!-- 글 내용 -->
          <div class="h4 pb-3 pt-3" style="text-align: left">
            <p class="row">
              <span class="text-muted col-2">프로젝트 진행 기간</span>
              <span class="px-4 col-2">2022/07/01</span>
              <span class="px-4 col-1">~</span>
              <span class="px-4 col-2">2022/07/01</span>
            </p>
            <p class="row">
              <span class="text-muted col-2">진행한 프로젝트</span>
              <span class="px-4 col-9">XXX 페이지 개발</span>
            </p>
            <p class="row">
              <span class="text-muted col-2">결과물 링크</span>
              <span class="px-4 col-9">
                <button
                  type="button"
                  class="btn btn-secondary btn-sm disabled me-2">
                  링크 제목1
                </button>
              </span>
            </p>
            <p class="row">
              <span class="text-muted col-2">사용 언어/스택</span>
              <span class="px-4 col-9">
                <!-- v-for로 변경 -->
                <span class="badge pro_badge_color rounded-pill me-1"
                  >VueJS</span
                >
                <span class="badge pro_badge_color rounded-pill me-1"
                  >Node.js</span
                >
                <span class="badge pro_badge_color rounded-pill me-1"
                  >MySQL</span
                >
              </span>
            </p>
            <div>
              <div class="widget-box fs-4 py-4 px-5">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </div>
            </div>
          </div>
        </div>
        <hr />
        <!-- 댓글 -->
        <div class="pt-3">
          <!-- TODO: props로 넘겨줄 정보 추가 필요 :projectId="projectId"-->
          <write-comment-view pageType="projectReview" />
          <comment-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommentView from "@/components/CommentView.vue";
import WriteCommentView from "../components/WriteCommentView.vue";

export default {
  name: "ProjectDetailView",
  components: { CommentView, WriteCommentView },
  data() {
    return {
      project: {
        writer: "거북이",
        projectId: 1,
        projectName: "프로젝트 모집 플랫폼 개발",
        expectedStartDate: "2022/07/01"
      },
      stackList: ["VueJS", "Node.js", "Typescript"],
      linkList: [
        {
          linkName: "링크제목1",
          linkAddress: "http://localhost:8080/abc",
          linkId: 1
        },
        {
          linkName: "링크제목2",
          linkAddress: "http://localhost:8080/def",
          linkId: 2
        },
        {
          linkName: "링크제목3",
          linkAddress: "http://localhost:8080/ghi",
          linkId: 3
        }
      ],
      mentoList: [
        {
          mentoCode: "0",
          NickName: "가나다",
          score: 3.5,
          scoreCount: 12,
          title: "자바스크립트를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바스크립트" }
          ]
        },
        {
          mentoCode: "1",
          NickName: "가나다라",
          score: 4,
          scoreCount: 12,
          title: "파이썬를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바" }
          ]
        },
        {
          mentoCode: "2",
          NickName: "가나다라마바사",
          score: 4,
          scoreCount: 12,
          title: "파이썬를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "타입스크립트" }
          ]
        },
        {
          mentoCode: "3",
          NickName: "가나다라마",
          score: 4,
          scoreCount: 12,
          title: "파이썬를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바스크립트" },
            { code: "2", name: "자바스크립트" },
            { code: "2", name: "자바스크립트" }
          ]
        },
        {
          mentoCode: "4",
          NickName: "가나다라마",
          score: 4,
          scoreCount: 12,
          title: "파이썬를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바스크립트" }
          ]
        },
        {
          mentoCode: "5",
          NickName: "가나다라마",
          score: 4,
          scoreCount: 12,
          title: "파이썬를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바스크립트" }
          ]
        },
        {
          mentoCode: "6",
          NickName: "가나다라마",
          score: 4,
          scoreCount: 12,
          title: "파이썬를 도와주는 멘토링",
          comment:
            "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
          part: [
            { code: "1", name: "파이썬" },
            { code: "2", name: "자바스크립트" }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.widget-box {
  border: 1.5px solid gray;
  border-radius: 10px;
  padding: 10px;
  margin: 20px;
  text-align: left;
}

.pro_fixed {
  /* position: sticky; */
  top: 0;
  height: 400px;
  /* position: fixed; */
}

.pro-circle {
  width: 30px;
  height: 30px;
  border-radius: 70%;
  overflow: hidden;
}

.pro-circle-icon {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
