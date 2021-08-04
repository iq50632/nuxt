<template>
  <div style="height: 100vh-50">
    <div class="container" style="letter-spacing: 5px;">
      <div class="align-self-center" style="height: 200vh">
        <div class="card m-auto">
        <div class="my-4 d-flex flex-column mx-auto">
          <b class="title mb-4">Register member</b>
          <!--<img src="~/assets/image/dabe2.png" alt="" height="150px" width="150px" class="mx-auto">-->
        </div>
          <hr>
          <div class="card-body">
            <div class="mb-5">
              <h3 class="text-secondary">NAME</h3>
              <input type="text" class="input" placeholder="Name" v-model="user.name">
            </div>
            <div class="mb-5">
              <h3 class="text-secondary">EMAIL</h3>
              <input type="text" class="input" placeholder="Email" v-model="user.email">
            </div>
            <div class="mb-5">
              <h3 class="text-secondary">GENDER</h3>
              <b-form-group class="d-flex">
              <b-form-radio-group v-model="user.sax">
                <b-form-radio class="mx-1" name="some-radios" value="0">Man</b-form-radio>
                <b-form-radio class="mx-1" name="some-radios" value="1">Woman</b-form-radio>
                <b-form-radio class="mx-1" name="some-radios" value="2">Third Gender
                </b-form-radio>
              </b-form-radio-group>
              </b-form-group>
            </div>
            <div class="mb-5">
              <h3 class="text-secondary">ACCOUNT</h3>
              <input type="text" class="input" placeholder="Account" v-model="user.account">
            </div>
            <div class="mb-5">
              <h3 class="text-secondary">PASSWORD</h3>
              <input type="text" class="input" placeholder="Password" v-model="user.password">
            </div>
            <div class="text-center" style="letter-spacing: 0px;">
              <button class="btn btn-outline-secondary" @click="register()">註 冊</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    layout: 'user',
    transition: 'slide-bottom',
    data() {
      return {
        user: {
          name: '',
          email: '',
          sax: 0,
          account: '',
          password: ''
        }
      }
    },
    computed: {},
    methods: {
      register() {
        axios.post('http://127.0.0.1:8000/api/login', this.user)
          .then(
            result => {
              var data = result.data;
              console.log(data)
              this.$fire({
                title: "註冊成功！",
                text: data.name + '你好！，請至登入畫面重新登入。',
                type: "success",
                timer: 3000
              }).then(r => {
                console.log(r.value);
                this.$router.push('/users/login')
              });
            })
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


</style>
