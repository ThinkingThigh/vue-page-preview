<template>
  <div>
    <div @click="handleClick" style="cursor: pointer">点击预览</div>
    <page-preview
      ref="page-preview"
      :val.sync="val"
      default="1.3"
      max="2"
      min="0.9"
    >
      <div class="content-container">
        <div class="item" v-for="item in list" :key="item.title">
          <div class="title">{{ item.title }}</div>
          <div class="author">{{ item.author }}</div>
          <div class="description">{{ item.description }}</div>
        </div>
      </div>

      <template v-slot:index>
        <div class="index-container">
          <div class="index-item-container">
            <div
              :class="['index-item', active == index && 'active']"
              v-for="(item, index) in list"
              :key="item.title"
              @click="handleClickIndex(index)"
            >
              <el-tooltip effect="dark" :content="item.title" placement="right">
                <span class="index-title">{{ item.title }}</span>
              </el-tooltip>
            </div>
          </div>
        </div>
      </template>
    </page-preview>
  </div>
</template>

<script>
// import { accMul } from "../packages/page-preview/src/utils/calculate"
export default {
  name: "App",
  components: {},
  data() {
    return {
      val: 1.3,
      list: [
        {
          title: "人类简史",
          author: "尤瓦尔·赫拉利",
          description:
            "《人类简史》是一部关于人类历史的宏观史，从人类的起源开始，揭示了人类社会的发展和演变。作者尤瓦尔·赫拉利通过对政治、经济、文化、科技等多个方面的探讨，展现了人类历史的全貌。本书不仅帮助我们理解人类历史的过去，更为重要的是，它为我们展示了人类未来的发展趋势，对于我们认识和探索人类的未来具有重要的启示意义。",
        },
        {
          title: "活着",
          author: "余华",
          description:
            "《活着》是一部讲述中国农民命运的小说，主人公福贵在中国大陆的农村生活中经历了许多悲惨的遭遇。作者余华通过福贵的命运，反映了中国农民在现代化进程中所面临的困境和挑战。本书不仅表达了对生命的珍视和对人性的探索，更为重要的是，它让我们更深刻地认识到了中国农民的生存现状，对于我们关注农村问题、推动农村发展具有重要的启示意义。",
        },
        {
          title: "百年孤独",
          author: "加西亚·马尔克斯",
          description:
            "《百年孤独》是一部拉丁美洲魔幻现实主义的代表作，讲述了布恩迪亚家族七代人的故事。作者加西亚·马尔克斯通过充满了神秘、幻想和超自然的元素，同时也涉及到了政治、社会、家庭等多个方面的主题，探讨了人类的命运和生命的意义。本书不仅是一部文学巨著，更为重要的是，它为我们提供了一种全新的思考方式，对于我们认识和探索人类的生命和命运具有重要的启示意义。",
        },
        {
          title: "1984",
          author: "乔治·奥威尔",
          description:
            "《1984》是一部反乌托邦小说，讲述了一个被极权主义统治的社会中，一个普通人的生活和反抗。作者乔治·奥威尔通过充满了对政治、权力、自由等主题的探讨，揭示了极权主义的危害和对人类自由的威胁。本书不仅是一部文学经典，更为重要的是，它为我们警醒极权主义的危害，对于我们珍视自由、维护人权具有重要的启示意义。",
        },
        {
          title: "简爱",
          author: "夏洛蒂·勃朗特",
          description:
            "《简爱》是一部经典的英国小说，讲述了一个女孩简爱的成长和爱情故事。作者夏洛蒂·勃朗特通过充满了对女性自由和独立的探讨，同时也涉及到了家庭、社会等多个方面的主题，展现了女性在男权社会中的坚韧和勇气。本书不仅是一部文学经典，更为重要的是，它为我们探索女性自由和独立的道路，对于我们推动性别平等具有重要的启示意义。",
        },
        {
          title: "红楼梦",
          author: "曹雪芹",
          description:
            "《红楼梦》是一部中国古典小说，讲述了贾宝玉和林黛玉等人的爱情故事和家族的兴衰史。作者曹雪芹通过充满了对中国传统文化和价值观的探讨，同时也涉及到了家族、社会等多个方面的主题，展现了中国传统文化的博大精深。本书不仅是一部文学经典，更为重要的是，它为我们认识和传承中国传统文化提供了重要的启示意义。",
        },
        {
          title: "西游记",
          author: "吴承恩",
          description:
            "《西游记》是一部中国古典小说，讲述了孙悟空等人的取经之路和历险故事。作者吴承恩通过充满了神话、传说和幻想的元素，同时也涉及到了中国传统文化和价值观，展现了中国传统文化的独特魅力。本书不仅是一部文学经典，更为重要的是，它为我们认识和传承中国传统文化提供了重要的启示意义。",
        },
        {
          title: "三体",
          author: "刘慈欣",
          description:
            "《三体》是一部中国科幻小说，讲述了人类和外星文明之间的交互和冲突。作者刘慈欣通过充满了科学、哲学和文化的元素，同时也涉及到了政治、社会等多个方面的主题，展现了中国科幻文学的创新和发展。本书不仅是一部科幻经典，更为重要的是，它为我们探索科学、哲学和文化的交汇点，对于我们推动科技创新和文化创新具有重要的启示意义。",
        },
        {
          title: "时间简史",
          author: "史蒂芬·霍金",
          description:
            "《时间简史》是一本科普书籍，讲述了宇宙和时间的起源和演化。作者史蒂芬·霍金通过涉及物理学、天文学、哲学等多个领域的知识，探讨了人类对宇宙和时间的认识和理解。本书不仅是一本科普经典，更为重要的是，它为我们认识和探索宇宙和时间提供了重要的启示意义。",
        },
        {
          title: "哈利·波特",
          author: "J·K·罗琳",
          description:
            "一部魔幻小说系列，讲述了哈利·波特等人在霍格沃茨魔法学校的冒险故事。充满了神秘、幻想和冒险的元素，同时也涉及到了友情、家庭等多个方面的主题。",
        },
      ],
      active: 0,
    };
  },
  methods: {
    handleClick() {
      this.$refs["page-preview"].show = true;
      setTimeout(() => {
        // 监听滚动条
        let dom = document.querySelector(".preview-container");
        dom.addEventListener("scroll", this.handleScroll);
      }, 0);
    },
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
};
</script>

<style lang="scss" scoped>
.content-container {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  .item {
    margin-bottom: 14px;
    .title {
      font-weight: bold;
    }
  }
}

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
