<template>
	<view>
		
	</view>
</template>

<script>
  let loginRes = false
	export default {
		data() {
			return {
				
			};
		},
    onLoad() {
      loginRes = this.checkLogin('../write/write', 2)
      if(!loginRes) return
    }
	}
</script>

<style lang="less">

</style>
