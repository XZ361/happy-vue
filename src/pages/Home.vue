<template>
  <div >
    <h3>home首页</h3>
    <button @click="test">跳转</button>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      this.$router.push('/about')
    }
  },
}
</script>

<style lang="scss" scoped>

</style>