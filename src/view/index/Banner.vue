<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="str in listImg" :style="{ backgroundImage: 'url(' + str.url + ')' }"></div>
    </div>
    <div class="swiper-pagination swiper-pagination-white"></div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import s1 from '../../assets/slide1.jpg'
  import s2 from '../../assets/slide2.jpg'
  import s3 from '../../assets/slide3.jpg'
  export default {
    data () {
      return {
        listImg: [
          {
            url: s1
          },
          {
            url: s2
          },
          {
            url: s3
          }
        ]
      }
    },
    mounted () {
      // console.log('mounted', this)
      let swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop: true,
        speed: 600,
        autoplay: 4000,
        onTouchEnd: function () {
          swiper.startAutoplay()
        }
      })
    },
    name: 'banner'
  }
</script>
<style scoped lang="less">
  .swiper-container {
    width: 100%;
    height: 40rem;

  .swiper-wrapper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;

  img {
    width: 100%;
    height: 100%;
  }

  }
  .swiper-pagination-bullet {
    width: 0.833rem;
    height: 0.833rem;
    display: inline-block;
    background: #7c5e53;
  }

  }
</style>
