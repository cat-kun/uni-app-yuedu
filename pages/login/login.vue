<template>
  <view>

  </view>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    onLoad(options) {
      console.log(options)
      // app端登录，条件编译
      // #ifdef APP-PLUS
      uni.login({
        success: (res) => {
          console.log(res)
          // res 对象格式
          //{"code":"***",
          //"authResult":{
          //"openid":"***",
          //"scope":"snsapi_userinfo",
          //"refresh_token":"**",
          //"code":"****",
          //"unionid":"***",
          //"access_token":"***",
          //"expires_in":7200
          //},
          //"errMsg":"login:ok"}
          uni.getUserInfo({
            success: (info) => {
              
            },
            fail: () => {
              uni.showToast({title:"微信登录授权失败"});
            }
          })
        },
        fail: () => {
          uni.showToast({title:"微信登录授权失败"});
        }
      })
      // #endif
    }
  }
</script>

<style lang="less">

</style>
