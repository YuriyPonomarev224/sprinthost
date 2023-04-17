<template>
  <div v-if="isShow" class="modalOverlay" @click="closeModal">
    <div class="modalOverlayButton" @click="closeModal"></div>
    <div class="modalContainer" @click.stop>
      <ui-button 
        type="button" 
        class="buttonModalExit modalContainerButton" 
        @click.native="closeModal"
      >
        Закрыть
      </ui-button>
      <div class="modalContainerButtonMobile" @click="closeModal">
        <img src="@/assets/images/arrow.svg" alt="back_arrow">
        Назад
      </div>
      <div v-if="title" class="modalTitle typography">
        <h2>{{title}}</h2>
      </div>
      <div class="modalContent">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import uiButton from './ui-button.vue'
export default {
  components: { uiButton },
  name: 'modal',
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  },
  emits: ['close'],
  mounted(){
    document.body.style.overflow = 'hidden'
  },
  methods: {
    closeModal(){
      document.body.style.overflow = 'unset'
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>