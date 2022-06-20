<template>
  <div>
    <div
      id="g_id_onload"
      data-client_id="442992845305-oe3tmcff9s3qpj559h36doutbqhk06su.apps.googleusercontent.com"
      data-callback="handleCredentialResponse"></div>
    <div class="g_id_signin" data-type="standard"></div>
  </div>
</template>

<script>
export default {
  name: "LoginComponent",
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style scoped lang="scss">
.login {
  width: 500px;
  border: 1px solid black;
}
.wrap-login {
  display: flex;
  img {
    width: 24px;
    height: 24px;
  }
}
</style>
