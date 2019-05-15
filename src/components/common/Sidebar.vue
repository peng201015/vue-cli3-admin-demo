<template>
  <div id="app-sidebar">
    <el-menu class="el-menu-vertical-demo" router @open="handleOpen" @close="handleClose" :collapse="isCollapse"
      unique-opened>
      <el-submenu v-for="(item,i) in items" :key="i" :index="i + ''">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{item.title}}</span>
        </template>
        <el-menu-item v-for="(child,idx) in item.children" :key="idx" :index="child.index + ''">{{child.title}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import EventBus from "@/utils/EventBus"
  export default {
    data() {
      return {
        isCollapse: false,
        items: [{
            title: "首页",
            icon: "el-icon-star-off",
            children: [{
              title: "个人信息",
              index: "dashboard"
            }]
          },
          {
            icon: "el-icon-bell",
            title: "入库管理",
            children: [{
                title: "入库预通知",
                index: "instock_notice"
              },
              {
                title: "扫描收货",
                index: "instock_scan"
              }
            ]
          },
          {
            icon: "el-icon-share",
            title: "出库管理",
            children: [{
                title: "出库订单",
                index: "outstock_order"
              },
              {
                title: "订单复核",
                index: "outstock_audit"
              }
            ]
          },
          {
            icon: "el-icon-rank",
            title: "商品中心",
            index: "product"
          }
        ]
      };
    },
    mounted() {
      EventBus.$on("changeCollapse", () => {
        this.isCollapse = !this.isCollapse
      })
    },
    methods: {
      handleCollapse: function () {},
      handleOpen(key, keyPath) {
        // console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath)
      }
    },
    destroyed() {
        EventBus.$off("changeCollapse")
    }
  };

</script>

<style lang="less">
  #app-sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 50px;
    bottom: 0;
    .el-menu-vertical-demo{
      height: 100%;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
    }
  }

</style>
