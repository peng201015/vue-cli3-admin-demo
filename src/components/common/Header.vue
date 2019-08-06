<template>
  <div id="app-header" class="clearfix">
    <i class="el-icon-menu" @click="handleCollapse"></i>
    <section>后台管理系统</section>
    <div class="header-right">
      <el-dropdown @command="handleCommand" size="small">
        <span class="el-dropdown-link">
          <img :src="userAvatar">
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="setUp">设置</el-dropdown-item>
          <el-dropdown-item divided command="loginOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="btn-fullscreen" @click="handleFullScreen">
        <el-tooltip :content="fullscreen?`取消全屏`:`全屏`" effect="dark" placement="bottom">
          <i class="el-icon-rank"/>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>
  
<script>
import EventBus from "@/utils/EventBus";
export default {
  data() {
    return {
      userAvatar: null,
      fullscreen: false
    };
  },
  mounted() {
    let userInfo = JSON.parse(sessionStorage.getItem("user"));
    if (userInfo) {
      this.userAvatar = userInfo.avatar;
    }
  },
  methods: {
    handleCollapse: function() {
      EventBus.$emit("changeCollapse");
    },
    handleCommand(command) {
      if (command == "loginOut") {
        sessionStorage.removeItem("user");
        this.$router.push({
          path: "/login"
        });
      }
    },
    // 全屏事件
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    }
  }
};
</script>

<style lang="less">
#app-header {
  width: 100%;
  height: 70px;
  background: #242f42;

  .el-icon-menu {
    color: #ffffff;
    float: left;
    line-height: 70px;
    font-size: 24px;
    margin: 0 18px;
  }

  section {
    color: #ffffff;
    text-align: left;
    line-height: 70px;
    float: left;
    font-size: 22px;
    .el-button {
      float: right;
    }
  }
  .header-right {
    width: 200px;
    float: right;
    .btn-fullscreen {
      width: 30px;
      height: 70px;
      float: right;
      line-height: 78px;
      i {
        color: #ffffff;
        font-size: 24px;
      }
    }
    .el-dropdown {
      float: right;
      margin: 0 30px;
      .el-dropdown-link {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        cursor: pointer;
        display: inline-block;
        margin-top: 15px;
        img {
          width: 40px;
          height: 40px;
          border-radius: 100%;
        }
      }
      .el-icon-arrow-down {
        font-size: 12px;
      }
    }
  }
}
</style>
