<!-- 内容预览组件 -->
<template>
  <transition name="fade">
    <div class="preview-container" v-if="show">
      <div
        class="preview-content-container"
        :style="{ zoom }"
        ref="preview-content-container"
      >
        <slot></slot>
      </div>
      <div class="button-feild">
        <div class="button" @click="handleClose">
          <i class="iconfont icon-close-circle"></i>
        </div>
        <div class="button">
          <i class="iconfont icon-plus-circle" @click="handleZoomIn"></i>
        </div>
        <div class="button">
          <i class="iconfont icon-minus-circle" @click="handleZoomOut"></i>
        </div>
      </div>
      <div class="index-feild">
        <slot name="index"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
import "./assets/icon/iconfont.css";
import { accAdd, accSub } from "./utils/calculate";
export default {
  name: "pagePreview",
  props: ["val", "default", "max", "min"],
  data() {
    return {
      show: false,
    };
  },
  computed: {
    zoom: {
      get() {
        return this.val || 1;
      },
      set(val) {
        this.$emit("update:val", val);
      },
    },
  },
  methods: {
    showPreview() {
      this.show = true;
      setTimeout(() => {
        // 监听滚动条
        let dom = document.querySelector(".preview-container");
        dom.addEventListener("scroll", this.handleScroll);
      }, 0);
    },
    handlePreview() {
      this.show = true;
    },
    handleClose() {
      this.show = false;
      this.zoom = this.default;
    },
    handleZoomIn() {
      if (this.zoom >= this.max) {
        return;
      }
      this.zoom = accAdd(this.zoom, 0.1);
      console.log(this.zoom);
    },
    handleZoomOut() {
      if (this.zoom <= this.min) {
        return;
      }
      this.zoom = accSub(this.zoom, 0.1);
      console.log(this.zoom);
    },
  },
};
</script>
<style lang="scss" scoped>
.preview-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #fff;
  user-select: none;
  .preview-content-container {
    padding: 3% 10%;
  }
  .button-feild {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 44px;
    right: 22px;
    top: 30px;
    color: #fff;
    background: #a6a6a6;
    border-radius: 4px;
    .button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      cursor: pointer;
      transition: background 0.3s;
      border-radius: 4px;
      font-size: 18px;
      &:hover {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #46a2ff;
        i {
          font-size: 22px;
          color: #fff;
          transition: 0.1s;
        }
      }
    }
  }
  .index-feild {
    position: fixed;
    left: 22px;
    top: 100px;
  }
}

.fade-enter-active,
.fade-leave-active {
  // transition: opacity 0.5s;
  transition: all 0.3s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  // opacity: 0;
  transform: translateY(100px);
  opacity: 0;
}
</style>
