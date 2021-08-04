<template>
  <div style="letter-spacing: 5px;" class="bg">

    <div class="container pt-5">
      <div class="card row mb-3" style="height: 100vh;">
        <div class="w-50 mx-auto text-center col-12 col-sm-6 col-md-4 border-2">
          <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
            img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd">
            <!-- Text slides with image -->
            <b-carousel-slide
              img-src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/%E5%9C%961-%E5%BF%85%E5%8B%9D%E5%AE%A2%E6%8E%A8%E5%87%BA%E5%9C%B0%E8%A1%A8%E6%9C%80%E5%BC%B7%E8%B7%A8%E7%95%8C-%E4%B8%80%E5%8F%A3%E5%85%A5%E9%AD%82-%E6%8B%89%E9%BA%B5%E6%AF%94%E8%96%A9-6%E6%9C%8823%E6%97%A5%E8%B5%B7%E6%90%B6%E5%85%88%E9%A0%90%E8%B3%BC-6%E6%9C%8830%E6%97%A5%E8%B5%B7%E6%96%BC%E6%8C%87%E5%AE%9A%E6%B4%BB%E5%8B%95%E9%96%80%E5%B8%82%E9%99%90%E6%99%82%E9%99%90%E9%87%8F%E7%99%BC%E5%94%AE-1592810138.jpg">
            </b-carousel-slide>
          </b-carousel>
        </div>
        <div class="col-12 col-sm-6 col-md-8">
          <div>
            <h2 class="my-2">{{product.name}}</h2>
            <div class="d-flex align-items-end my-4">
            <div class="" style="border-bottom: 10px solid rgb(11, 143, 41, 0.3); width:100px;">
              <h2 class="mb-n3" style="min-width:inherit;">${{product.price}}</h2>
            </div>
                <b-form-rating v-model="trader.evaluation" variant="warning" class="mb-n3 p-0 ml-4"
                  style="background-color: #ffffff00; border: 0px; width: 100px" readonly></b-form-rating>
            </div>
          </div>
          <div class="d-flex">
            <p>庫存：{{product.stock}}</p>
            <p class="ml-5">銷量：{{product.sold}}</p>
          </div>
          <div class="d-flex align-items-center mb-3">
            尺寸：
            <button v-for="btn in size" :key="btn.id"
              class="btn btn-light text-success border-success ml-3 flex-fill">{{btn}}</button>
          </div>
          <div class="d-flex align-items-center mb-3">
            <span>數量：</span>
            <div class="flex-shrink-1"><input type="number" class="form-control" placeholder="庫存" v-model="number"
                min="0" :max="product.stock">
            </div>
          </div>
          <button class="btn btn-outline-success">加入購物車</button>
        </div>
        <div>
          <div class="d-flex align-items-center mb-3">
            <b-avatar style="height:50px;width:50px"></b-avatar>
            <nuxt-link :to="{ name: 'users-trader', params: {trader: trader.account } }">
              <div class="ml-3 text-center">
                <b class="my-0 text-dark">賣家：{{trader.name}}</b>
                <b-form-rating v-model="trader.evaluation" variant="warning" class="mb-0 p-0"
                  style="background-color: #ffffff00; border: 0px; " readonly></b-form-rating>
              </div>
            </nuxt-link>
          </div>
          <b-alert show variant="light">
            <div class="m-4 ml-2" style="border-bottom: 3px solid rgb(11, 143, 41, 0.3); width:140px;">
              <b style="font-size:18px">產品介紹：</b>
            </div>
            <p class="m-5">
              {{product.text}}
            </p>
          </b-alert>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    layout: 'user',
    data() {
      return {
        trader: this.$route.params.trader,
        product: {},
        size: [],
        number: 0
      }
    },
    created() {
      let url = 'http://127.0.0.1:8000/api/'
      axios.get(url + "login/" + this.$route.params.trader)
        .then(res => {
          this.trader = res.data
        })
      axios.get(url + "product", { trader: {toJSON: () => this.trader.account} }).then(res => {
        this.product = res.data
      })
    },
    validate({
      params
    }) {
      // 必須是 number 類型
      //More verification methods: https://zh.nuxtjs.org/api/pages-validate/
      return /^\d+$/.test(params.trader)
    },
    methods: {

    },
    async asyncData() {

    },
    head() {
      return {
        // 頁面 title 設為該文章標題
        title: '妲比商城 ◆ 賣場-' + this.trader.name
      }
    }
  }

</script>
