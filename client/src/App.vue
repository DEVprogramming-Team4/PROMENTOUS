<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/project">project</router-link>
    <router-view />
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {}
};
</script>

<style lang="scss">
nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.btn {
  cursor: pointer;
}
</style>
