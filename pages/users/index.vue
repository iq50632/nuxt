<template>

  <div class="mt-n5" style="letter-spacing: 5px;">
    <div :class="$style.tab">
      <div :class="{tabFixed:tabFixed}" class="tab-wrap clearfloat text-center">
        <p @click="contentRouter(0, 'data')">個人資料</p>
        <p @click="contentRouter(1, 'autobiography')">自傳</p>
        <p @click="contentRouter(2, 'shool')">教育程度</p>
        <p @click="contentRouter(2, 'work')">⼯作經驗</p>
        <p @click="contentRouter(3, 'Expertise')">電腦專長</p>
        <p @click="contentRouter(4, 'License')">證照</p>
      </div>
    </div>
    <div class=" m-5" style="border-radius: 0px;">
      <div class="container-md data-wrap" id='data'>
        <p class="title">個人資料</p>
        <hr>
        <div>
          <div class="row my-5">
            <div class="col-12 col-md-5 p-3 text-center">
              <img src="~/assets/face.jpg" class="rounded-circle col-12 p-0" alt="Cinque Terre" style="max-width:60%">
            </div>
            <div class="col-12 col-md-7 p-3 row" style="height: 50vh">
              <div class="col-3 col-md-12"></div>
              <div class="col-8 col-md-12" data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-sine">
                <p class="title">基本資料</p>
                <p>
                  <fa :icon='["fas" , "user-tie"]' /> 名字: {{name ? name : '廖千惠'}}</p>
                <p>
                  <fa :icon='["fas" , "phone-alt"]' /> 電話: 0988-086-141</p>
                <p>
                  <fa :icon='["fas" , "envelope"]' /> 電子郵件: iq50632@gmail.com</p>
                <p>
                  <fa style="width: 16px" :icon='["fas" , "map-marker-alt"]' /> 地址: 新北市 板橋區</p>
                <p>
                  <fa :icon='["fas" , "motorcycle"]' /> 自備車輛: 輕型機車</p>
              </div>
            </div>
            <div class="col-12 row">
            <div class="col-1"></div>
            <div class="col-9">
              <p>喜歡設計前端並著手動手做，對於前端的領域深深著迷。個性溫和、喜歡思考、學習能力強、認真負責。</p>
              <p>．單工頭腦：16GB，優點專注高效率，缺點分心會卡機</p>
              <p>．既細心又粗心：能發掘微小的Bug或瑕疵，而有時卻因為太精細忽略大方向</p>
              <div class="d-flex">
            <div v-for="i in tag" :key="i.id">
              <p class="badge badge-pill badge-dark mx-1" style="background-color: rgb(47, 140, 194);">{{i}}</p>
            </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center" style="margin-bottom: 150px;">
          <div :class="$style.next" @click="contentRouter(1, 'autobiography')">
            　<p>﹀</p>
          </div>
        </div>
        <div class="autobiography-wrap" id='autobiography' style="margin-bottom: 150px;">
          <div class="mt-4" data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-sine">
            <p class="title">⾃ 傳</p>
            <p>我是千惠，來⾃新北市。由於⼩時候喜歡與網友製作⾃⼰的部落格畫⾯，偶爾也會獲得其他閱覽者的稱讚，因此對網⾴⼯作⼗分感興趣。</p>
            <p>
              在大一的程式設計課中，對於上課的內容十分感興趣，也會有朋友找我請教，因此自信心爆棚。之後在暑假時與班上報名全國⼤專校院Python程式設計競賽，對自己一直以來的要求是全力以赴，所以在競賽前的每個空檔都會努力練習，最後獲得了北區優勝。
            </p>
            <p>在⼤學期間積極修習資訊相關課程，並維持系排前10%，在暑假期間參與了市政府稅捐稽徵處的實習，也參加沖繩國際志⼯，協助攝影與拍照、網頁編輯修改。⼤家對我評價是勤快、主動可靠，事情交給我能放⼼。</p>
            <p>
              在大二修網頁設計這門課程，在製作期末作業時我負責了前端的部分，雖然進度沒問題但依然想要做到完美，看到瑕疵會很糾結，所以在將近一個禮拜的熬夜拼趕下，最後上台報告時老師稱讚我們這組的完成度很高，也因為一直以來的作品收到許多人的稱讚，便以前端工程師為目標。
            </p>
            <p>在閒暇時間也會去玩⼀些軟體，印象最深的是Adobe XD，是⽬前最感興趣的⼀個軟體。</p>
            <p>
              雖然一開始是以前端的目標進入公司，但在實習中也學到了一些後端，協助並與後端工程師合作，使用Laravel、Vue、Angular、Bootstrap、Lodash等網頁技術撰寫前後端，讀取與匯入資料、串接後端API、測試與修正系統。
            </p>
          </div>
        </div>
        <div class="row justify-content-center" style="margin-bottom:150px;">
          <div :class="$style.next" @click="contentRouter(1, 'shool')">
            　<p>﹀</p>
          </div>
        </div>
        <div style="height: 140vh">
          <div class="row">
            <div class="col-12 col-lg-6 mb-5" id='shool'>
              <div class="shool-wrap">
                <p class="title" data-aos="fade-right">教育程度</p>
                <div data-aos="fade-right" data-aos-duration="1500">
                  <div :class="$style.shool">
                    <p>⼤學</p>
                    <p>2017/9～2021/6<b-badge variant="secondary">畢業</b-badge>
                    </p>
                    <p>亞東技術學院 - 資訊管理系</p>
                  </div>
                  <div :class="$style.shool">
                    <p>⾼職</p>
                    <p>2015/9～2017/6<b-badge variant="secondary">畢業</b-badge>
                    </p>
                    <p>樹⼈家商 - 資料處理科</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-6" id='work'>
              <div class="work-wrap" data-aos="fade-right">
                <p class="title">⼯作經驗</p>
                <div data-aos="zoom-in-right" data-aos-duration="1500">
                  <div v-for="item in work" :key="item.id" class="mt-n2">
                    <div class="d-flex">
                      <div :class="$style.circle"></div>
                      <p class="m-0 ml-3">{{item.office}}</p>
                    </div>
                    <div :class="$style.work" class="ml-2 pb-5">
                      <div class="p-2 pl-4 pt-4 mt-n2">
                        <!-- 公司名稱<p style="width: 50%;" class="ml-4">{{item.name}}</p>-->
                        <p class=" m-0 text-secondary">{{item.date}}</p>
                        <p class="m-0 mt-4">{{item.description}}</p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-n2" :class="$style.circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center" style="margin-bottom: 150px;">
          <div :class="$style.next" @click="contentRouter(2, 'Expertise')">
            　<p>﹀</p>
          </div>
        </div>
        <div class="Expertise-wrap" id="Expertise" style="height: 130vh">
          <p class="title" data-aos="fade-right">電腦專長</p>
          <div data-aos="fade-right" data-aos-duration="1500">
          </div>
          <div v-for="item in Expertise" :key="item.id">
            <div data-aos="zoom-in">
              <p class="m-0 mt-4">{{item.name}}</p>
              <div class="d-flex flex-wrap">
                <div class="m-1" v-for="items in item.list" :key="items.id">
                  <button type="button" class="btn btn-primary" disabled>{{items}}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center" style="margin-bottom: 150px;">
          <div :class="$style.next" @click="contentRouter(1, 'License')">
            　<p>﹀</p>
          </div>
        </div>
        <div class="License-wrap" id="License">
          <p class="title" data-aos="fade-right">證照</p>
        </div>
      </div>
      <div id="L1" class="text-center my-5">
        <div class="mb-4">
          <p class="title" style="font-size:24px" data-aos="fade-right">TQC+ 網頁編輯製作</p>
        </div>
        <img src='~/assets/image/License/L1.jpg' alt="" style="width: 100%;max-width: 800px;">
        <div class="row justify-content-center" style="margin: 100px;">
          <div :class="$style.next" @click="contentRouter(1, 'L2')">
            　<p>﹀</p>
          </div>
        </div>
      </div>
      <div id="L2" class="text-center my-5">
        <div class="mb-4">
          <p class="title" style="font-size:24px" data-aos="fade-right">TQC+ Python程式設計</p>
        </div>
        <img src='~/assets/image/License/L2.jpg' alt="" style="width: 100%;max-width: 800px;">
        <div class="row justify-content-center" style="margin: 100px;">
          <div :class="$style.next" @click="contentRouter(1, 'L3')">
            　<p>﹀</p>
          </div>
        </div>
      </div>
      <div id="L3" class="text-center mt-5">
        <div class="mb-4">
          <p class="title" style="font-size:24px" data-aos="fade-right">TQC+ 2018大專校院Python程式設計競賽優勝</p>
        </div>
        <img src='~/assets/image/License/L3.jpg' alt="" style="height: 70vh;">
        <div class="row justify-content-center" style="margin: 100px;">
          <div :class="$style.next" @click="contentRouter(1, 'L4')">
            　<p>﹀</p>
          </div>
        </div>
      </div>
      <div id="L4" class="text-center">
        <div class="mb-4">
          <p class="title" style="font-size:24px" data-aos="fade-right">Internet and Computing Core
            Certification<br>IC3 計算機綜合能力</p>
        </div>
        <img src='~/assets/image/License/L4.jpg' alt="" style="width: 100%;max-width: 800px;">
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapState
  } from 'vuex';
  // import axios from 'axios'
  export default {
    layout: 'user',
    data() {
      return {
        url: '',
        tag: ['豐富創意力', '喜歡思考', '適應力強', '單工頭腦', '學習能力強', '認真負責'],
        work: [{
          name: '巨跡資訊股份有限公司',
          date: '2021/1 - 2021/6',
          office: '助理⼯程師',
          description: '與後端⼯程師合作，使⽤Laravel、Vue、Angular、Bootstrap等網⾴技術撰寫前後端，讀取與匯入資料、串接後端API、測試與修正系統。'
        }, {
          name: '新北市政府-⼟地稅科',
          date: '2019/7 - 2019/8',
          office: '實習⽣',
          description: '文件歸檔、完成委託事項、協助完成後續⼯作。'
        }, {
          name: 'Comebuy',
          date: '2018/7 - 2018/9',
          office: '櫃台服務⼈員',
          description: '調製飲料、服務顧客。'
        }],
        Expertise: [{
            name: '辦公室應用',
            list: [
              'Word', 'Excel', 'PowerPoint'
            ]
          },
          {
            name: '程式設計',
            list: [
              'JavaScript', 'ASP.NET', 'PHP', 'Python', 'Bootstrap', 'Laravel', 'Vue.js', 'Nuxt.js'
            ]
          },
          {
            name: '資料庫',
            list: [
              'MySQL'
            ]
          },
          {
            name: '電腦繪圖/影像處理/工程製圖',
            list: [
              '3Ds Max'
            ]
          },
          {
            name: '網頁設計製作',
            list: [
              'HTML', 'CSS'
            ]
          },
          {
            name: 'UI / UX',
            list: [
              'Adobe XD'
            ]
          },
          {
            name: '中文打字',
            list: [
              '每分鐘 70 個字'
            ]
          },
          {
            name: '英文打字',
            list: [
              '每分鐘 30 個字'
            ]
          },
        ],
        tabFixed: false,
      }
    },
    computed: {
      password: {
        get() {
          return this.$store.state.login.password
        },
        set(value) {
          this.Get_Password(value)
        },
      },
      ...mapState({
        name: state => state.login.name,
        email: state => state.login.email,
        account: state => state.login.account,
        password: state => state.login.password
      })
    },
    methods: {
      url() {
        this.url = 'http://127.0.0.1:8000/api/login/' + this.account
      },
      backTop() {
        let top = document.documentElement.scrollTop;
        // 实现滚动效果 

        const timeTop = setInterval(() => {
          // document.documentElement.scrollTop = top -= 50;

          if (top <= 0) {
            clearInterval(timeTop); //清除定时器

          }

        }, 20);
      },
      contentRouter(index, el) {
        this.showTable = index
        this.$nextTick(() => {
          const normalT = document.querySelector(`#${el}`)
          if (this.tabFixed) {
            normalT && window.scrollTo({
              top: normalT.offsetTop + 1,
              behavior: 'smooth'
            })
          } else {
            // 39为tab高度减1
            normalT && window.scrollTo({
              top: normalT.offsetTop - 39,
              behavior: 'smooth'
            })
          }
        })
      }
    },
  }

</script>

<style module>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .next {
    text-align: center;
    width: 100%;
    border-top: 2px solid rgba(23, 162, 184, 0.3);
    border-bottom: 2px solid rgb(23, 162, 184, 0.3);
    color: rgb(23, 162, 184, 0.6);
    padding-top: 30px;
    padding-bottom: 15px;
  }

  .next p {
    font-size: 30px;
    font-family: '微軟正黑體';
    font-weight: 900;
  }

  .tab {
    position: fixed;
    padding: 20px;
    padding-right: 10px;
    top: 50%;
    right: 0%;
    z-index: 1;
    background: rgb(47, 140, 194, 0.5);
    border-radius: 2.5rem 0 0 2.5rem;
  }

  .tab p:hover {
    cursor: pointer;
  }

  .tab p:hover {
    color: azure;
    font-weight: 600;
    transition: 0.3s;
  }

  .shool {
    border-left: 6px solid rgb(47, 140, 194);
  }

  .shool p {
    margin-left: 12px;
  }

  .work {
    border-left: 3px solid rgb(47, 140, 194);
  }

  .work p {
    margin-left: 12px;
  }

  .circle {
    margin-left: 2px;
    margin-top: 5px;
    width: 15px;
    height: 15px;
    background: rgb(47, 140, 194);
    border-radius: 50%;
  }

</style>
