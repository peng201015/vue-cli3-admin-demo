<template>
  <div id="app-header">
    <i class="el-icon-circle-plus" @click="handleCollapse"></i>
    <section>
      我是头部
      <!-- <screenfull></screenfull> -->
    </section>
  </div>
</template>
  
<script>
import EventBus from "@/utils/EventBus"
  export default {
      data() {
          return {

          }
      },
      methods:{
          handleCollapse: function(){
            EventBus.$emit("changeCollapse")
          }
      }
  }

</script>

<style lang="less">
#app-header {
    width: 100%;
    height: 50px;
    background: #f5f5f5;

    .el-icon-circle-plus {
      float: left;
    }

    section {
      color: #369f36;
      text-align: center;
      line-height: 50px;
      width: 80%;
      height: 100%;
      float: left;

      .el-button {
        float: right;
      }
    }
  }
</style>
