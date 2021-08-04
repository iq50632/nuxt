<template>
  <div class="container" style="height: 100vh;">
    <div class="m-auto row">
      <nuxt-link class="text-dark col-12 col-lg-3 col-md-6 p-4" style="text-decoration:none;" v-for="i in product"
        :key="i.id" :to="{ name: 'product-id', params: { id: i.id } }">
        <div class="cardSelect_blue row">
          <div class="imgFrame col-3 col-lg-12 col-sm-3 col-md-12">
            <img :src="i.img" alt="" class="m-auto">
          </div>
          <div class="col-9 col-lg-12 col-sm-9 col-md-12">
            <h3 class="my-3" style="text-overflow:ellipsis;">{{i.name}}</h3>
            <div class="d-flex justify-content-between">
              <span style="border-bottom: 3px solid rgb(23, 162, 184); width: 50px">
                <p class="mb-n5">${{i.price}}</p>
              </span>
              <span>已售: {{i.sold}}</span>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  export default {
    layout: 'user',
    data() {
      return {
        product: {}
      }
    },
    created() {
      // let url = 'http://127.0.0.1:8000/api/'
      // axios.get(url + "product")
      //   .then(res => {
      //     this.product = res.data
      //   })
    },
    // async asyncData({$axios}) {
    //   const product = await $axios.$get("/api/product",{})
    //   return {product}
    // }
  }

</script>
