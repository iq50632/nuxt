<template>
  <div class="" style="letter-spacing: 5px;">
    <div class="container pt-5">
      <div id="card" class="cardSelect_blue">
        <div class="row mb-3">
          <div class="text-center col-lg-4 col-md-6 col-sm-12 border-2" style="padding: 20px;">
            <swiper :auto-update="true" ref="mySwiper" :options="swiperOption">
              <swiper-slide style="background: #040B1B;"> <a target="_blank" href="/">
                  <div class="imgFrame"><img :src="product.img" alt="image">
                  </div>
                </a> </swiper-slide>
              <div class="swiper-pagination swiper-pagination-white"></div>
              <div class="swiper-button-prev swiper-button-white" slot="button-prev" @click="prev"></div>
              <div class="swiper-button-next swiper-button-white" slot="button-next" @click="next"></div>
            </swiper>
          </div>
          <div class="col-lg-8 col-md-6 col-sm-12">
            <div>
              <h2 class="my-2">{{product.name}}</h2>
              <div class="d-flex align-items-end my-4">
                <div style="border-bottom: 10px solid rgb(23, 162, 184, 0.5); width: 70px">
                  <h2 class="mb-n2" style="min-width:inherit;">${{product.price}}</h2>
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
              <div class="text-nowrap">尺寸：</div>
              <div class="d-flex flex-fill flex-wrap ">
                <button :id="'SizeButton' + i" class="btn btn-outline-info mb-2 mx-3" v-for="i in size" :key="i.id"
                  @click="clickSize(i)">{{i}}</button>
              </div>
            </div>
            <div class="d-flex align-items-center mb-3">
              <span>數量：</span>
              <div class="flex-shrink-1">
                <b-form-spinbutton type="number" class="form-control" placeholder="庫存" v-model="number" min="0"
                  :max="product.stock"></b-form-spinbutton>
              </div>
            </div>
            <button class="btn btn-outline-info" @click="addShopping()">
              <div class="p-2">
                <fa :icon='["fas", "shopping-cart"]' /> 加入購物車</div>
            </button>
          </div>
          <div class="col-12 d-flex align-items-center mb-3">
            <b-avatar style="height:50px;width:50px"></b-avatar>
            <nuxt-link :to="{ name: 'product-trader', params: {trader: trader.account } }">
              <div class="ml-3 text-center">
                <b class="my-0 text-dark">賣家：{{trader.name}}</b>
                <b-form-rating v-model="trader.evaluation" variant="warning" class="mb-0 p-0"
                  style="background-color: #ffffff00; border: 0px; " readonly></b-form-rating>
              </div>
            </nuxt-link>
          </div>
          <b-alert show variant="light" class="col-12">
            <div class="m-4 ml-2" style="border-bottom: 3px solid rgb(23, 162, 184, 0.3); width:140px;">
              <b style="font-size:18px">產品介紹：</b>
            </div>
            <div id="pre" class="Divpre">
              <pre class="m-5">
                {{product.text}}
              </pre>
            </div>
          </b-alert>
        </div>
      </div>
    </div>
    <transition name="fade" mode="out-in">
      <div id="shop">
        <div style="font-size: 35px;text-align: center;color: #fff;" @click="shopClick">
          <!--055a5c-->
          <fa id="fa" :icon="['fas',icon]" />
        </div>
        <div id="Product">
          <div id="shopping" v-for="(id,i) in shopping" :key="i">
            <div v-for="(pro,p) in id.size" :key="p" class="row p-2 border-bottom border-light">
              <div class="col-3 m-0 ml-n2">
                <img :src="id.img" alt="" style="width:80px;">
              </div>
              <div class="col-9 ml-2">
                <span>{{id.name}}</span>
                <div class="d-flex justify-content-between">
                  <div>{{pro.size}}</div>
                  <div>x {{pro.number}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import {
    Slider,
    directive
  } from 'vue-awesome-swiper'
  import _ from 'lodash';
  // import axios from 'axios'
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  export default {
    layout: 'user',
    data() {
      return {
        id: this.$route.params.id,
        product: {},
        products: [{
            id: 1,
            trader: '123',
            img: 'https://img4.momoshop.com.tw/goodsimg/0007/952/373/7952373_R.jpg?t=1596706716',
            name: '【新品販售】海鮮比薩',
            text: '餡料：\r\n' +
              '蝦仁、魷魚條、蟹味絲、莫札瑞拉起司、洋香菜葉、番茄紅醬\r\n' +
              '產品介紹：\r\n' +
              '上選美味鮮蝦、蟹味絲及飽滿豐富的魷魚，滿滿鮮美滋味的海鮮比薩，讚不絕口。',
            price: 300,
            evaluation: 0,
            brand: '必勝客',
            stock: 20,
            sold: 0,
            size: '大,中,小',
            created_at: '2021-07-18T04:17:34.000Z',
            updated_at: '2021-07-18T04:17:34.000Z'
          },
          {
            id: 2,
            trader: '456',
            img: 'https://img.ruten.com.tw/s0/000/44c/xxee22/4/ea/a7/22028829332135_572.jpg',
            name: '【銷量第一】韓國烏龜餅乾',
            text: '台灣合法註冊公司，並依法開立發票，安心有保障！\r\n' +
              '\r\n' +
              '?ORION好麗友餅乾?\r\n' +
              '各種款式 任您挑選?\r\n' +
              '款式超多樣 讓您選不完\r\n' +
              '\r\n' +
              '?規格\r\n' +
              '\r\n' +
              '▶小包-80g/包\r\n' +
              '\r\n' +
              '原味(玉米濃湯) / 麻辣口味 / 黃豆粉麻糬\r\n' +
              '\r\n' +
              '▶大包-160g/包\r\n' +
              '\r\n' +
              '原味 / 吉拿棒肉桂(⚠孕婦不可食用)',
            price: 48,
            evaluation: 0,
            brand: '1231',
            stock: 200,
            sold: 0,
            size: '玉米濃湯,麻辣,烤麻糬',
            created_at: '2021-07-18T06:23:51.000Z',
            updated_at: '2021-07-18T06:23:51.000Z'
          },
          {
            id: 3,
            trader: '123',
            img: 'https://cf.shopee.tw/file/6959219e2fe27235f9f790bc5e94ca9c',
            name: '【嘴甜甜】 巧克力脆笛酥',
            text: '?巧克力脆笛酥成分：砂糖、麵粉、氫化植物油、乳糖、脫脂奶粉、可可粉、乳清粉、大豆卵磷脂、焦糖色素、香草精粉、蛋、食用色素、轉化糖。\n' +
              '?草莓脆笛酥成分： 麵粉、砂糖、棕櫚油、玉米澱粉、脫脂乳粉、果糖糖漿、乳糖、草莓果汁粉、大豆卵磷脂、精鹽、乳酸、香料、蛋、食用紅色四十號、消泡劑(矽樹脂、脂肪酸甘油酯、脂肪酸蔗糖酯、脂肪酸山梨醇酐酯、玉米油、玉米糖膠)。\n' +
              '?產地：台灣。\n' +
              '\n' +
              '?保存年限：常溫180天。\n' +
              '\n' +
              '?甜甜最佳賞味期：有效期限內開封後一個月內。',
            price: 79,
            evaluation: null,
            brand: '自有品牌',
            stock: 420,
            sold: 0,
            size: '草莓,巧克力,?',
            created_at: '2021-07-19T11:05:56.000Z',
            updated_at: '2021-07-19T11:05:56.000Z'
          },
          {
            id: 4,
            trader: '123',
            img: 'https://cf.shopee.tw/file/1f4e9d2928aef9bc49b355fb53597e73',
            name: '【正韓】抗菌乾洗手 / 香氛酒精',
            text: '?三大服務\n' +
              '☛24H 出貨 ┃ 商品台灣出貨，預計三個工作天到達；若需確保商品當日出貨，可先透過聊聊與客服做確認\n' +
              '☛詳細規格 ┃ 100%聊聊回覆、貼心客服專線、售後服務\n' +
              '☛購買安心 ┃ 每筆訂單皆開立電子發票，並透過簡訊告知發票號碼；若需要統編或紙本發票，請在下單時聊聊告知！\n' +
              '\n' +
              '?兩大回饋\n' +
              '☛滿額免運 ┃ 本賣場每月不定時有活動，滿額再享免運！詳情請至賣場首頁查看\n' +
              '☛關注賣場 ┃ 凡按「關注」賣場或賣場商品按「愛心❤」不論訂單金額，結帳後到聊聊出示關注後截圖，我們將會送神秘小禮物??\n' +
              '\n' +
              '韓國Rainbow\n' +
              '【商品特色】\n' +
              '➤輕巧好攜帶,40ml容量剛剛好\n' +
              '➤68%酒精含量,時時刻刻要做好手部消毒\n' +
              '➤霧化噴頭,結構嚴密不漏液\n' +
              '➤質地清爽不黏膩,添加甘油、金盞花、蘆薈、綠茶等保濕保養成分\n' +
              '➤通過安全認證以及韓國食藥署認證\n' +
              '\n' +
              '\n' +
              '【商品規格】\n' +
              '．商品規格：無香味、玫瑰、葡萄柚、薰衣草、午後時光白色、糖果甜心粉色、白麝香藍色、木質調橘色、甜花香紅色、甜麝香紫色\n' +
              '．主要成分：純淨水、甘油、蘆薈、綠茶、卡倫杜拉\n' +
              '．商品容量：40ml\n' +
              '．酒精成分：68%\n' +
              '．商品尺寸：10.2*5.8 cm\n' +
              '．使用方法：距離20-30釐米，在手部噴2-3次，再輕輕擦乾。',
            price: 199,
            evaluation: null,
            brand: 'Rainbow',
            stock: 300,
            sold: 0,
            size: '無香味,玫瑰,葡萄柚,薰衣草,午後時光白色,糖果甜心粉色,白麝香藍色,木質調橘色,甜花香紅色',
            created_at: '2021-07-23T02:57:35.000Z',
            updated_at: '2021-07-23T02:57:35.000Z'
          },
          {
            id: 5,
            trader: '123',
            img: 'https://cf.shopee.tw/file/36a533db3081eada7d13c8aa55205055',
            name: '每日優果 酸V脆脆桃 口袋蜜餞',
            text: '✔美味黃桃切丁製成，大小剛剛好\n' +
              '✔迷人酸V，忍不住一口接一口~\n' +
              '✔解饞好滋味~出遊、開會必備！\n' +
              '✔蜜餞類新品上市！\n' +
              '\n' +
              '⭐品 名：酸V脆脆桃\n' +
              '成 份：黃桃.糖.鹽.甜味劑(甜菊醣甘.醣精鈉鹽.甘草素.環已基(代)磺醯胺酸鈉).漂白劑(亞硫酸鈉).防腐劑(苯甲酸)\n' +
              '淨 重：70公克 \n' +
              '保存期限：保存6個月，拆封後請冷藏保存 \n' +
              '營養標示 每100公克 \n' +
              '1.熱量(Calories) 253.3大卡 \n' +
              '2.蛋白質(Protein) 3.2公克 \n' +
              '3.脂肪(Fat) 0.5公克 \n' +
              '飽和脂肪(Saturated Fat) 0公克 \n' +
              '反式脂肪(Trans Fat) 0公克 \n' +
              '4.碳水化合物(Carbohydrate) 59公克\n' +
              '糖(Sugar)59公克 \n' +
              '5.鈉(Sodium) 160毫克 \n' +
              '產地：中國 \n' +
              '⚠本產品含有亞硫酸鈉，不適合其過敏體質者食用⚠',
            price: 138,
            evaluation: null,
            brand: '每日優果',
            stock: 700,
            sold: 0,
            size: '一入,五入,十入',
            created_at: '2021-07-24T09:51:30.000Z',
            updated_at: '2021-07-24T09:51:30.000Z'
          }
        ],
        size: [],
        number: 1,
        trader: {
          id: 1,
          name: "admin",
          account: 123,
          evaluation: 4
        },
        shopping: this.$store.state.login.shopping,
        icon: 'caret-down',
        swiperOption: {
          loop: true, //配置分页 
          pagination: {
            el: '.swiper-pagination', //分页的dom节点 }, 
            //配置导航 
            navigation: {
              nextEl: '.swiper-button-next', //下一页dom节点
              prevEl: '.swiper-button-prev' //前一页dom节点 
            }
          }
        },
      }
    },
    created() {
      console.log(this.$route)
      let index = _.findIndex(this.products, ['id', this.$route.params.id])
      this.product = this.products[index]
      this.size = this.product.size.split(',')
    },
    validate({
      params
    }) {
      return /^\d+$/.test(params.id)
    },
    components: {
      Slider,
    },
    directives: {
      swiper: directive
    },
    actions: {},
    watch: {
      "$store.state.login.shopping": {
        deep: true, //深度监听设置为 true
        handler: function (newVal, oldVal) {
          this.shopping = newVal
        }
      },
    },
    methods: {
      ...mapActions('login', ['set_shopping']),
      prev() {
        this.$refs.mySwiper.$swiper.slidePrev()
      },
      next() {
        this.$refs.mySwiper.$swiper.slideNext()
      },
      addShopping() {
        this.set_shopping({
          id: this.product.id,
          img: this.product.img,
          name: this.product.name,
          size: this.product.size,
          number: parseInt(this.number)
        })
      },
      shopClick() {
        let pro = document.querySelector('#Product')
        if (pro.style.height == "0px") {
          pro.style.height = "297px";
          this.icon = 'caret-up'
        } else {
          pro.style.height = "0px";
          this.icon = 'caret-down'
        }
      },
      clickSize(size) {
        console.log(size)
        let btn = document.querySelector('#SizeButton' + this.product.size)
        btn.style.backgroundColor = 'rgb(0,0,0,0%)'
        btn.style.color = '#17a2b8'
        let newbtn = document.querySelector('#SizeButton' + size)
        this.product.size = size
        newbtn.style.backgroundColor = '#17a2b8'
        newbtn.style.color = '#fff'
      }
    },
    async asyncData() {},
    head() {
      return {
        // 頁面 title 設為該文章標題
        title: '妲比商城 ◆ ' + this.product.name
      }
    }
  }

</script>

<style>
  #shop {
    position: fixed;
    right: 0;
    bottom: 0;
    background-color: rgb(198, 198, 198);
    /*rgb(111, 192, 231);*/
    width: 412px;
    padding: 0px 20px 0px 20px;
    border-radius: 2.5rem 2.5rem 0px 0px;
  }

  #Product {
    height: 0px;
    overflow-y: auto;
    overflow-x: hidden;
    transition: height 1s;
    transition-timing-function: ease;
  }

</style>
