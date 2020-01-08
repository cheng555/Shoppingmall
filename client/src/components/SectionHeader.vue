<template>
  <header class="SectionHeader box-shadow-public">
    <div class="left">
      <h3><i class="el-icon-goods"></i> {{ title }}</h3>
      <span>{{ tips }}</span>
    </div>
    <span class="right">
      {{ moreText }}<i class="el-icon-arrow-right"></i>
    </span>
  </header>
</template>

<script>
export default {
  name: "SectionHeader",
  props: {
    title: {
      type: String,
      default: ""
    },
    tips: {
      type: String,
      default: ""
    },
    moreText: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>

<style scoped lang="less">
@import "../assets/css/var.less";
.SectionHeader {
  width: 100%;
  height: 50px;
  padding: 0 15px;
  background-color: #fff;
  line-height: 50px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: inline-block;
    vertical-align: middle;
    h3 {
      display: inline-block;
      font-size: 28px;
      cursor: pointer;
      &:hover {
        color: @thirdColor;
      }
    }
    span {
      margin-left: 10px;
      font-size: 14px;
      color: #333;
    }
  }
  .right {
    vertical-align: middle;
    &:hover {
      color: @thirdColor;
    }
  }
}
</style>
