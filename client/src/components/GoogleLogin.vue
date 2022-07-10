<script>
/* eslint-disable */
import { decodeCredential } from "vue3-google-login";
export default {
  components: {},
  data() {
    return {
      buttonConfig: {
        type: "icon"
        // theme: "outline",
        // size: "large",
        // text: "signup_with",
        // shape: "",
        // logo_alignment: "",
        // width: "",
        // locale: "",
      }
    };
  },
  props: {
    modalShow: Boolean
  },
  methods: {
    async callback(response) {
      const userData = await decodeCredential(response.credential);
      // console.log("Handle the response", response);
      // console.log("DecodeCredential", userData);
      // 포스트요청을 먼저보내고
      // const postEx = await this.$post(`http://localhost:3000/login`, {
      await this.$post(`http://localhost:3000/login`, {
        param: [
          {
            user_nickname: userData.name,
            user_account: userData.email,
            user_image: userData.picture
          },
          {
            user_nickname: userData.name,
            user_image: userData.picture
          }
          // 필드명과 반드시 동일 : 내가 쏴줄 데이터값
        ]
      }); // 세션스토리지에 로그인 데이터를 담고
      // vuex에도 담고
      // 로그인버튼은 사라지고 로그아웃 버튼이 생긴다.
      this.$store.commit("user", userData);
      console.log(this.$store.state.user);
      // console.log(postEx);
      // console.log(postEx.data);
      // 페이지를 마이페이지로 이동시킨다
      this.$router.push("myPageInfo");
      // location.href = "http://localhost:8080/myPageinfo";
      // 모달영역을 지원준다
      this.$emit("onClickClose");
    },
    async login(kakao_account) {
      await this.$api("/api/login", {
        param: [
          {
            email: kakao_account.email,
            nickname: kakao_account.profile.nickname
          },
          { nickname: kakao_account.profile.nickname }
        ]
      });
      this.$store.commit("user", kakao_account);
    },
    kakaoLogout() {
      window.Kakao.Auth.logout((response) => {
        console.log(response);
        this.$store.commit("user", {});
        alert("로그아웃");
        this.$router.push({ path: "/" });
      });
    }
  }
};
</script>

<template>
  <div>
    <div class="logo">
      <a style="font-size: 30px">PROMENTOUS</a>
    </div>
    <form class="mb-3">
      <label for="exampleInputEmail1" class="form-label"></label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Email"
        disabled />
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"></label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          disabled />
      </div>
      <div id="emailHelp" class="form-text mb-3">
        구글로그인을 이용해주세요!
      </div>
      <div class="d-grid gap-2">
        <button class="btn btn-primary m-0" disabled>로그인</button>
      </div>
    </form>
    <div class="mb-3 socialLogin">간편 로그인</div>
    <GoogleLogin :callback="callback" :buttonConfig="buttonConfig" />
  </div>
</template>
<style lang="scss" scoped>
.socialLogin::before,
.socialLogin::after {
  display: inline-block;
  content: "";

  width: 100px;
  height: 1px;
  background-color: #c4c4c4;

  vertical-align: middle;
}
.socialLogin::before {
  margin-right: 1rem;
}
.socialLogin::after {
  margin-left: 1rem;
}
</style>
