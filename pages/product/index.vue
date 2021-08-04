<template>
  <div style="height: 100vh-50">
    <div class="container" style="letter-spacing: 5px;">
      <div class="align-self-center" style="height: 200vh">
        <div class="card m-auto">
          <p class="title"><fa :icon='["fas" , "gifts"]' /> 上傳商品</p>
          <hr>
          <div class="card-body">
            <div class="mb-5">
              <h2 class="text-secondary">品名</h2>
              <input type="text" class="input" placeholder="品名" v-model="product.name">
            </div>
            <div class="mb-5">
              <h2 class="text-secondary">照片</h2>
              <input type="text" class="input" placeholder="照片（請輸入網址）" v-model="product.img">
            </div>
            <div class="mb-5">
              <h2 class="text-secondary">價錢</h2>
              <input type="number" class="input" placeholder="價錢" v-model="product.price">
            </div>
            <div class="mb-5">
              <h2 class="text-secondary">品牌</h2>
              <input type="text" class="input" placeholder="品牌" v-model="product.brand">
            </div>
            <div class="mb-5">
              <h2 class="text-secondary">庫存</h2>
              <input type="number" class="input" placeholder="庫存" v-model="product.stock">
            </div>
            <div class="mb-5">
              <h2 class="text-secondary">內容介紹</h2>
              <textarea class="form-control input" aria-label="With textarea" placeholder="內容介紹" v-model="product.text"></textarea>
            </div>
            <div class="mb-5">
              <h2 class="text-secondary">尺寸</h2>
              <div>
                <b-form-tags class="input" input-id="tags-remove-on-delete"
                  :input-attrs="{ 'aria-describedby': 'tags-remove-on-delete-help' }" v-model="beforeSize" separator=" "
                  placeholder="Enter new tags separated by space" remove-on-delete no-add-on-enter>
                </b-form-tags>
                <b-form-text id="tags-remove-on-delete-help" class="mt-2">
                  小技巧: <kbd>Backspace</kbd> 可刪除標籤，<kbd>spacebar</kbd> 可新增標籤
                </b-form-text>
              </div>
            </div>
            <div class="text-center" style="letter-spacing: 0px;">
              <button class="btn btn-outline-secondary" @click="register()">上傳商品</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  // import axios from 'axios'
  export default {
    layout: 'user',
    transition: 'slide-bottom',
    data() {
      return {
        beforeSize: [],
        product: {
          trader: '123',
          img: '',
          name: '',
          text: '',
          price: 0,
          brand: '',
          stock: 0,
          sold: 0,
          size: '',
        }
      }
    },
    computed: {},
    methods: {
      register() {
        var size = this.beforeSize.join(',')
        this.product.size = size
        console.log(this.product)
        // axios.post('http://127.0.0.1:8000/api/product', this.product)
        //   .then(
        //     result => {
        //       console.log(result.data)
        //       var data = result.data;
        //       console.log(data)
        //       this.$fire({
        //         title: "上傳成功",
        //         type: "success",
        //         timer: 3000
        //       }).then(r => {
        //         this.$router.push('/product/main')
        //       });
        //     })
      }
    },
    mounted() {
      this.$nextTick(() => {
        this.$nuxt.$loading.start()

        setTimeout(() => this.$nuxt.$loading.finish(), 500)
      })
    },
  }

</script>

<style module>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1:hover:before {
  width: 170px;
}
</style>
