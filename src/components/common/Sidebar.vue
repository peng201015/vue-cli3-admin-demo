<template>
  <div id="app-sidebar">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :default-active="$route.path" 
      background-color="rgb(50, 65, 87)"
      text-color="rgb(191, 203, 217)"
      active-text-color="#409eff"
      unique-opened
    >
      <template v-for="(item,i) in permission_routers">
        <!-- 表示有子菜单的情况 -->
        <el-submenu v-if="item.children  && item.children.length >= 1" :key="i" :index="item.path">
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{item.meta.title}}</span>
          </template>
          <router-link v-for="(child,idx) in item.children" :key="idx" :to="{path:`${item.path}/${child.path}`}">
            <el-menu-item :index="`${item.path}/${child.path}`"
            ><span slot="title">{{child.meta.title}}</span></el-menu-item>
          </router-link>
        </el-submenu>

        <!-- 表示只有一级目录的情况 -->
        <router-link v-else :to="{path:`${item.path}`}" :key="i">
            <el-menu-item :index="`${item.path}`">
              <i :class="item.meta.icon"></i>
              <span slot="title">{{item.meta.title}}</span>
            </el-menu-item>
          </router-link>
      </template>
    </el-menu>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import EventBus from "@/utils/EventBus";
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  mounted() {
    EventBus.$on("changeCollapse", () => {
      this.isCollapse = !this.isCollapse;
    });
    console.log(this.permission_routers,this.$route.path)
  },
  computed:{
    ...mapGetters([
      'permission_routers'
    ])
  },
  methods: {
    handleCollapse: function() {},
    handleOpen(key, keyPath) {
      // console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath)
    }
  },
  destroyed() {
    EventBus.$off("changeCollapse");
  }
};
</script>

<style lang="less">
#app-sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  .el-menu-vertical-demo {
    height: 100%;
    .el-submenu__title {
      text-align: left;
      &:hover {
        background: rgb(40, 52, 70) !important;
      }
    }
    a{
      text-decoration: none;
      .el-menu-item {
        min-width: 170px;
        text-align: left;
        &:hover {
          background: rgb(40, 52, 70) !important;
        }
      }
    }
    
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 170px;
  }
}
</style>
