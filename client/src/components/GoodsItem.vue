<template>
  <li class="GoodsItem">
    <div class="imgBox">
      <el-image
        :src="img"
        fit="cover"
        style="width: 100%; height: 100%"
        lazy
        @click="navTo('/mall/goods/' + id)"
      ></el-image>
    </div>
    <div class="goodsInfo">
      <p class="goodsName ellipsis" @click="navTo('/mall/goods/' + id)">
        {{ name }}
      </p>
      <p class="price">{{ "¥" + price }}</p>
      <el-button style="width:100%">show detail</el-button>
    </div>
  </li>
</template>

<script>
export default {
  name: "GoodsItem",
  props: {
    id: {
      type: Number,
      default: 0
    },
    img: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    price: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  methods: {
    navTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped lang="less">
@import "../assets/css/var.less";
.GoodsItem {
  display: inline-block;
  width: 266px;
  height: 360px;
  overflow: hidden;
  background-color: #fff;
  transition: all 0.5s ease-out;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 10px #ee7a23;
    transition: all 0.5s ease-out;
  }
  .imgBox {
    width: 100%;
    height: 266px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
      transition: transform 0.5s;
    }
  }
  .goodsInfo {
    width: 100%;
    height: 60px;
    font-size: 18px;
    padding: 10px 30px;
    .goodsName {
      display: block;
      cursor: pointer;
      margin-bottom: 10px;
      line-height: 20px;
      font-size: 20px;
      font-weight: 600;
      &:hover {
        color: @thirdColor;
      }
    }
    .price {
      display: block;
      color: @falseColor;
    }
  }
}
</style>
