<template>
  <div style="letter-spacing: 5px;" class="">
    <div class="container" style="height: 100vh;">
      <div class="m-auto row">
        <nuxt-link class="text-dark col-12 col-lg-3 col-md-6 p-4" style="text-decoration:none;" v-for="i in product"
          :key="i.id" :to="{ name: 'product-id', params: { id: i.id } }">
          <div class="cardSelect">
            <div class="imgFrame">
              <img :src="i.img" alt="" class="m-auto">
            </div>
            <h3 class="my-3" style="text-overflow:ellipsis;">{{i.name}}</h3>
            <div class="d-flex justify-content-between">
              <span style="border-bottom: 3px solid rgb(11, 143, 41, 0.3); width: 50px">
                <p class="mb-n5">${{i.price}}</p>
              </span>
              <span>已售: {{i.sold}}</span>
            </div>
          </div>
        </nuxt-link>
        <nuxt-link class="text-dark col-12 col-lg-3 col-md-6 p-4" style="text-decoration:none;" to='/product'>
          <div class="cardSelect">
            <div class="row align-items-center" style="height:100%">
              <div class="col text-center" style="font-size:60px; color:rgb(2, 55, 57)">
                <fa :icon='["fas" , "gifts"]' /><br>
                <div>
                  <b class="mt-3" style="font-size:20px">新增商品</b>
                </div><!-- v-if="$store.state.login.account == '123'" -->
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  // import axios from 'axios'
  export default {
    layout: 'user',
    data() {
      return {
        trader: this.$route.params.trader,
        product: [{
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
        number: 0
      }
    },
    created() {
      // let url = 'http://127.0.0.1:8000/api/'
      // axios.get(url + "login/" + this.$route.params.trader)
        // .then(res => {
        //   this.trader = res.data
        //   // axios.get(url + "product").then(pro => {
        //   //   pro.data.forEach(i => {
        //   //     if( i.trader == this.$route.params.trader) {
        //   //       this.product.push(i)
        //   //     }
        //   //   });
        //   // })

        //   axios.get(url + "product/?trader=" + this.$route.params.trader).then(res => {
        //     this.product = res.data
        //   })
        // })
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
