<!-- 目录导航 -->
<template>
  <div class="index-container">
    <div class="index-item-container">
      <div
        :class="['index-item', active == index && 'active']"
        v-for="(item, index) in list"
        :key="item.title"
        @click="handleClickIndex(index)"
      >
        <span class="index-title" :data-tooltip="item.title">{{
          item.title
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "pageIndex",
  components: {},
  props: ["val", "list"],
  data() {
    return { active: 0 };
  },
  watch: {},
  computed: {},
  methods: {
    handleClickIndex(index) {
      let doms = document.querySelectorAll(`.content-container .item`);
      console.log("handleClickIndex", index);
      doms[index].scrollIntoView({ behavior: "smooth" });
      this.active = index;
    },
    // 激活左侧对应的导航条
    activeNavNode() {
      const doms = document.querySelectorAll(`.content-container .item`);
      let scrollTop =
        document.querySelector(".preview-container").scrollTop + 2; // 一些精度问题
      let domOffsetTops = [];
      for (let i = 0; i < doms.length; i++) {
        domOffsetTops.push(doms[i].offsetTop * this.val);
        // domOffsetTops.push(accMul(doms[i].offsetTop, this.val));
      }
      console.log("scrollTop", scrollTop);
      console.log("domOffsetTops", domOffsetTops);

      if (scrollTop < domOffsetTops[0]) {
        this.active = 0;
        return;
      }
      if (scrollTop > domOffsetTops[domOffsetTops.length - 1]) {
        this.active = domOffsetTops.length - 1;
        return;
      }
      for (let i = 0; i < domOffsetTops.length; i++) {
        if (scrollTop > domOffsetTops[i] && scrollTop < domOffsetTops[i + 1]) {
          this.active = i;
          break;
        }
      }
    },
    handleScroll() {
      // 防抖动处理
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.activeNavNode();
      }, 100);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
.index-container {
  display: flex;
  font-size: 18px;
  color: #a6a6a6;
  &::before {
    display: block;
    content: "";
    width: 1px;
    background-color: #a6a6a6;
    transform: scaleY(0.95);
  }
  .index-item-container {
    display: flex;
    flex-direction: column;
    cursor: pointer;

    .index-item {
      display: flex;
      align-items: center;
      margin-left: -4px;
      margin-bottom: 18px;

      .index-title {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 90px;
        font-size: 10px;
        &:hover {
          &:after {
            content: attr(data-tooltip);
            position: absolute;
            left: 100%;
            font-size: 14px;
            padding: 5px 10px;
            background-color: rgba(18, 26, 44, 0.8);
            color: #fff;
          }
          // &:before {
          //   content: "";
          //   position: absolute;
          //   left: 61px;
          //   transform: rotate(270deg);
          //   border-width: 7px;
          //   border-style: solid;
          //   border-color: transparent transparent rgba(18, 26, 44, 0.8) transparent;
          // }
        }
      }
      &:last-child {
        margin-bottom: 0;
      }
      &:before {
        display: block;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: #a6a6a6;
        content: "";
        margin-right: 10px;
      }
      &:hover {
        color: #1989fa;
        &:before {
          display: block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #1989fa;
          content: "";
          margin-right: 10px;
          z-index: 99;
        }
      }
    }
    .active {
      color: #1989fa;
      &:before {
        background: #1989fa;
      }
    }
  }
}
</style>
