<template>
  <button class="button" :disabled="isDisabled" ><slot></slot></button>
</template>

<script>
export default {
    name: 'ui-button',
    computed: {
        isDisabled(){
            return this.$store.getters.buttonsDisabled
        }
    }
}
</script>

<style>

</style>