<template>
  <div style="height: 100vh-50">
    <div class="container" style="letter-spacing: 5px;">
      <div class="align-self-center" style="height: 100vh">
        <div class="card m-auto">
          <!--<h1>登入</h1>-->
          <img src="~/assets/image/dabe3.png" alt="" height="150px" class="mx-auto">
          <hr>
          <div class="card-body">
            <div class="mb-5">
              <h3 class="text-secondary">ACCOUNT</h3>
              <input type="text" class="input" placeholder="Account" v-model="account">
            </div>
            <div class="mb-5">
              <h3 class="text-secondary">PASSWORD</h3>
              <input type="text" class="input" placeholder="Password" v-model="password">
            </div>
            <div class=" text-right">
              <NuxtLink class="text-info mr-4" to="/users/login">忘記密碼？</NuxtLink>
            </div>
            <div class="text-center" style="letter-spacing: 0px;">
              <button class="btn btn-outline-info mr-4" @click="getlogin()">登 入</button>
              <NuxtLink class="btn btn-outline-secondary" to="/users/Register" no-prefetch>註 冊</NuxtLink>
              <!--no-prefetch: 預加載資源，如果太多預加載資源，當前頁面Loading時間會更長 -->
              <!--router-link 不會預加載資源 <route-link class="btn btn-info" to='/'>Index Page</route-link>       X 沒辦法跳轉 X-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapActions,
  } from 'vuex';
  import axios from 'axios'
  export default {
    layout: 'user',
    transition: 'slide-bottom',
    computed: {
      // ...mapGetters('login', [
      //   'getLogin'
      // ]),
      // ...mapState({
      //   account: state => state.login.account,
      //   password: state => state.login.password
      // }),
      password: {
        get() {
          return this.$store.state.login.password
        },
        set(value) {
          this.set_password(value)
        },
      },
      account: {
        get() {
          return this.$store.state.login.account
        },
        set(value) {
          this.set_account(value)
        }
      },
    },
    methods: {
      // ...mapMutations('login', [
      //   'Set_Account',
      //   'Set_Password'
      // ]),
      ...mapActions('login', [
        'set_account',
        'set_password'
      ]),
      getlogin() {
        axios.get('http://127.0.0.1:8000/api/login/' + this.$store.state.login.account)
          .then(
            result => {
              var data = result.data;
              if (data.password == this.password) {
                this.$store.state.login.name = data.name
                this.$store.state.login.email = data.email
                this.$fire({
                  title: "登入成功！",
                  text: data.name,
                  type: "success",
                  timer: 3000
                }).then(r => {
                  this.$router.push('/users')
                });
              } else {
                this.$alert("帳號密碼輸入錯誤，請重新嘗試。")
              }
            })
      }
    }
  }

</script>

<style module>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    position: relative;
    width: 400px;
    min-height: 400px;
    background: rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    /* border: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.2);
    border-bottom: 1px solid rgba(255, 255, 255, 0.2); */
  }

</style>
