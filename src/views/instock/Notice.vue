<template>
  <div style="height:2000px;">
    <input type="text" @input="debounceInput($event)">
  </div>
</template>

<script>
import tools from "@/utils/tools";
export default {
  mounted() {
    // 节流
    window.addEventListener("scroll", tools.throttle(this.handle, 1000), true);
  },
  methods: {
    handle() {
      console.log(Math.random());
    },
    // 防抖
    debounceInput(e) {
      tools.debounce.handler(() => {
        console.log(e.target.value);
      }, 1000);
    }
  }
};
</script>

<style>
</style>
