<template>
  <div id="index" class="clearfix">
    <Header></Header>
    <Sidebar></Sidebar>
    <div class="content-box" :class="{'content-collapse':collapse}">
      <tags-view/>
      <transition name="move" mode="out-in">
        <keep-alive :include="pageNames">
          <router-view/>
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header.vue";
import Sidebar from "@/components/common/Sidebar.vue";
import TagsView from "@/components/common/TagViews.vue";
import EventBus from "@/utils/EventBus";
export default {
  data() {
    return {
      collapse: false
    };
  },
  components: {
    Header,
    Sidebar,
    TagsView
  },
  created() {
    EventBus.$on("changeCollapse", () => {
      this.collapse = !this.collapse;
    });
  },
  computed: {
    pageNames() {
      let arr = [];
      let viewNames = this.$store.state.tagsView.visitedViews;
      viewNames.forEach(val => {
        arr.push(val.name);
      });
      return arr.join(",");
    }
  },
  destroyed() {
    EventBus.$off("changeCollapse");
  }
};
</script>

<style lang="less">
#index {
  width: 100%;
  height: 100%;
}
.content-box {
  position: absolute;
  left: 171px;
  top: 70px;
  right: 0;
  bottom: 0;
  overflow: scroll;
  -webkit-transition: left 0.3s ease-in-out;
  -o-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
}

.content-collapse {
  left: 65px;
}
</style>
