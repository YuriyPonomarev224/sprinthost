<template>
  <div class="container">
    <header-component></header-component>
    <reset-password/>
  </div>
</template>

<script>
import ResetPassword from './views/reset-password.vue'
import HeaderComponent from './components/header.vue'
export default {
  name: 'App',
  components: {
    ResetPassword,
    HeaderComponent
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
</style>
