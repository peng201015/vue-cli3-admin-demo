<template>
  <div>audit</div>
</template>

<script>
export default {
  mounted() {
    // console.log( this.$api.user.userInfo())
    this.$api.user.userInfo().then(data => {
      console.log(data, "sssssssssssss");
    });
  }
};
</script>

<style>
</style>
