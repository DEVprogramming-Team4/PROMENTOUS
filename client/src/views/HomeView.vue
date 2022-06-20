<template>
  <div class="home">
    <HelloWorld msg="Hello World! This is Home!" />
  </div>
</template>

<script>
// import HelloWorld from "/src/components/HelloWorld.vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld
  }
};
</script>
