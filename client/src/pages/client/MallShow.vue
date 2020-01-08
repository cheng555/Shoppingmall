<template>
  <div class="MallShow">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MallShow",
  components: {},
  computed: {
    curPath() {
      return this.$route.path;
    }
  },
  data() {
    return {};
  },

  methods: {},

  mounted() {},

  destroyed() {}
};
</script>

<style scoped lang="less">
@import "../../assets/css/var.less";
.MallShow {
  width: 100%;
  .container {
    min-width: 1200px;
  }
  .logo {
    display: block;
    margin: -10px auto 30px;
    text-align: right;
    user-select: none;
    vertical-align: middle;
    img {
      display: inline-block;
      width: 33.3%;
      vertical-align: middle;
    }
    .searchBox {
      display: inline-block;
      width: 33.3%;
      vertical-align: middle;
      text-align: left;
      .TipsInput {
        margin-left: 30px;
      }
      .icon-search {
        font-size: 24px;
        font-weight: bold;
        color: @thirdColor;
        cursor: pointer;
        position: relative;
        top: 4px;
      }
    }
  }
  header .typeList {
    width: 100%;
    text-align: center;
    background-color: white;
    padding: 15px;
    margin-bottom: 2px;
    box-shadow: 0 4px 8px -3px rgba(0, 0, 0, 0.1),
      0 5px 10px -5px rgba(0, 0, 0, 0.1);
    li {
      display: inline-block;
      // width: 60px;
      margin: 0 50px;
      text-align: center;
      height: 30px;
      line-height: 20px;
      font-weight: 600;
      font-size: 14px;
      cursor: pointer;
    }
    .selected {
      color: @thirdColor;
      border-bottom: 3px solid @thirdColor;
    }
  }
  .fixedNavContainer {
    text-align: left;
    .fixedLeft {
      display: inline-block;
      vertical-align: middle;
      width: 15%;
      height: 100%;
      font-size: 22px;
      color: @thirdColor;
      user-select: none;
      line-height: 64px;
      text-align: center;
      cursor: pointer;
    }
    .fixedRight {
      width: 70%;
      height: 100%;
      display: inline-block;
      vertical-align: middle;
      li {
        display: inline-block;
        // width: 60px;
        margin: 0 30px;
        text-align: center;
        height: 30px;
        line-height: 20px;
        font-weight: 600;
        font-size: 14px;
        cursor: pointer;
        position: relative;
        top: 4px;
      }
      .selected {
        color: @thirdColor;
        border-bottom: 3px solid @thirdColor;
      }
    }
  }
}
</style>
