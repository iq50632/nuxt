<template>
  <div class="">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/"><img src="~/assets/image/dabe.png" alt="" style="height:50px" height="50px"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!--<b-navbar-nav>
          <b-nav-item href="/about">About</b-nav-item>
          <b-nav-item href="/product/main">產品頁面</b-nav-item>
        </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- <b-nav-form class="mr-4">
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form> -->
          <NuxtLink class="btn btn-info m-2" to="/users">自傳</NuxtLink>
          <NuxtLink class="btn btn-info m-2" to="/users/login">登入</NuxtLink>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <Nuxt class="pt-5" />
  </div>
</template>
<script>
  export default {
    methods: {
      test(e) {
        this.$fire({
          title: '確定要登出？',
          text: "  ",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: '確定',
          cancelButtonText: '取消'
        }).then((result) => {
          console.log(result)
          if (result.value) {
            this.$store.state.login.account = ''
            this.$store.state.login.email = ''
            this.$store.state.login.name = ''
            this.$store.state.login.password = ''
            this.$fire({
              title: "登出成功！",
              text: '',
              type: "success",
              timer: 3000
            })
          }
        })

      },
    },
  }

</script>
