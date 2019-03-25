<template>
  <div class="home-comp">
    <div class="home">
      <div class="query-box">
        <span class="brand">首页大图</span>
        <div class="flex-b">
          <div style="width:60%;">
            <div class="big">
              <!-- swiper1 -->
              <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
                <swiper-slide class="slide-1"></swiper-slide>
                <swiper-slide class="slide-2"></swiper-slide>
                <swiper-slide class="slide-3"></swiper-slide>
                <swiper-slide class="slide-4"></swiper-slide>
                <swiper-slide class="slide-5"></swiper-slide>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
              </swiper>
              <!-- swiper2 Thumbs -->
              <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
                <swiper-slide class="slide-1"></swiper-slide>
                <swiper-slide class="slide-2"></swiper-slide>
                <swiper-slide class="slide-3"></swiper-slide>
                <swiper-slide class="slide-4"></swiper-slide>
                <swiper-slide class="slide-5"></swiper-slide>
              </swiper>
            </div>
          </div>
          <div style="width:38%;height:300px;">
            <div class="input-box">
              <div class="title">名称</div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
            <div class="input-box">
              <div class="title">链接</div>
              <el-input placeholder="请输入内容"></el-input>
            </div>
          </div>
        </div>
      </div>
      <div class="query-box ad-box">
        <span class="brand">广告栏</span>
        <div class="flex-c">
          <div style="width:100px;height:200px;margin-right:20px;" class="title-box">
            <p @click="now=0">广告1</p>
            <p @click="now=1">广告2</p>
            <p @click="now=2">广告3</p>
          </div>
          <div style="width:calc(100% - 120px);height:200px;">
            <div v-if="now==0" class="flex-c">
              <div class="input-box">
                <div class="title">链接</div>
                <el-input placeholder="请输入内容"></el-input>
              </div>
              <div class="flex-s" style="width:70%;">
                <div class="uploader-box">
                  <i class="el-icon-plus avatar-uploader-icon"></i>
                  <input
                    type="file"
                    @change="getImg"
                    class="file"
                    accept="image/jpeg, image/png, image/jpg, image/bmp, image/gif"
                  >
                </div>
                <img class="img" v-if="img1" :src="img1" alt>
              </div>
            </div>
            <div v-else-if="now==1" class="flex-c">
              <div class="input-box">
                <div class="title">链接</div>
                <el-input placeholder="请输入内容"></el-input>
              </div>
              <div class="flex-s" style="width:70%;">
                <div class="uploader-box">
                  <i class="el-icon-plus avatar-uploader-icon"></i>
                  <input
                    type="file"
                    @change="getImg"
                    class="file"
                    accept="image/jpeg, image/png, image/jpg, image/bmp, image/gif"
                  >
                </div>
                <img class="img" v-if="img2" :src="img2" alt>
              </div>
            </div>
            <div v-else-if="now==2" class="flex-c">
              <div class="input-box">
                <div class="title">链接</div>
                <el-input placeholder="请输入内容"></el-input>
              </div>
              <div class="flex-s" style="width:70%;">
                <div class="uploader-box">
                  <i class="el-icon-plus avatar-uploader-icon"></i>
                  <input
                    type="file"
                    @change="getImg"
                    class="file"
                    accept="image/jpeg, image/png, image/jpg, image/bmp, image/gif"
                  >
                </div>
                <img class="img" v-if="img3" :src="img3" alt>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import util from "@/util";
export default {
  data() {
    return {
      now: 0,
      swiperOptionTop: {
        spaceBetween: 10,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },
      swiperOptionThumbs: {
        spaceBetween: 10,
        slidesPerView: 4,
        touchRatio: 0.2,
        loop: true,
        loopedSlides: 5, //looped slides should be the same
        slideToClickedSlide: true
      },
      img1: {},
      img3: {},
      img2: {}
    };
  },
  created() {
    document.title = "首页管理";
  },
  mounted() {
    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.swiper;
      const swiperThumbs = this.$refs.swiperThumbs.swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
  methods: {
    getImg(e) {
      let file = e.target.files[0];
      let fr = new FileReader();
      fr.readAsDataURL(file);
      fr.onload = () => {
        fr.onloadend = e => {
          if (this.now == 0) {
            this.img1 = fr.result;
          } else if (this.now == 1) {
            this.img2 = fr.result;
          } else if (this.now == 2) {
            this.img3 = fr.result;
          }
        };
      };
    }
  }
};
</script>

<style lang="less">
@import "../assets/less/common";
.home-comp {
  .whole;
  overflow: auto;
  .query-box {
    width: 98%;
    margin: 12px auto;
    box-sizing: border-box;
    padding: 20px;
  }
  .home {
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
    }
    .uploader-box {
      width: 100px;
      height: 100px;
      border: 1px dashed #ddd;
      cursor: pointer;
      position: relative;
      margin-right: 22px;
      &:hover {
        border: 1px dashed #66b1ff;
      }
      input {
        position: absolute;
        width: 100px;
        height: 100px;
        top: 0;
        left: 0;
        opacity: 0;
      }
    }
    .input-box {
      width: 100%;
    }
    .ad-box{
      .input-box {
      width: 30%;
    }
    }
    .swiper-container {
      background-color: #000;
    }
    .swiper-slide {
      background-size: cover;
      background-position: center;
      &.slide-1 {
        background-image: url("//goss4.vcg.com/cms/image/image/f8ba4f926787418c96ccd65f21bf6053.jpg");
      }
      &.slide-2 {
        background-image: url("//goss.vcg.com/cms/image/image/abe4ca1228694c079f9fe1ad86227ba0.jpg");
      }
      &.slide-3 {
        background-image: url("//goss1.vcg.com/cms/image/image/06ff3c3e164045969e9edd340d2b40d3.jpg");
      }
      &.slide-4 {
        background-image: url("//goss1.vcg.com/cms/image/image/ab362a4edacf4a6ebe7bc99a74ff85c4.jpg");
      }
      &.slide-5 {
        background-image: url("//goss3.vcg.com/cms/image/image/2300eb5b4fb1416d86777707fc96631a.jpg");
      }
    }
    .gallery-top {
      height: 200px !important;
      width: 100%;
    }
    .gallery-thumbs {
      height: 100px !important;
      box-sizing: border-box;
      padding: 10px 0;
    }
    .gallery-thumbs .swiper-slide {
      width: 25%;
      height: 100%;
      opacity: 0.4;
    }
    .gallery-thumbs .swiper-slide-active {
      opacity: 1;
    }
    .title-box {
      p {
        box-sizing: border-box;
        padding: 12px 0;
        border: 1px dashed #eee;
        text-align: center;
        cursor: pointer;
        &:hover {
          color: @orange;
        }
      }
    }
    .img {
      max-width: calc(100% - 200px);
      height: 100px;
    }
  }
}
</style>