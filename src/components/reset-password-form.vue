<template>
  <form class="form" @submit.prevent="validateForm" >
    <ui-input 
      class="formInput" 
      :class="{inputError : $v.password.$anyError}" 
      name="password" 
      label="Новый пароль" 
      placeholder="Введите новый пароль" 
      v-model="password" 
    />
    <span class="formInputError" :class="{hideFormError : !$v.password.$anyError}">
      {{passwordErrorText}}
    </span>

    <ui-input 
      class="formInput" 
      :class="{inputError : $v.confirmPassword.$anyError}" 
      name="confirmPassword" 
      label="Повторите новый пароль" 
      placeholder="Повторите новый пароль" 
      v-model="confirmPassword" 
    />
    <span class="formInputError" :class="{hideFormError : !$v.confirmPassword.$anyError}">
      {{confirmPasswordErrorText}}
    </span>

    <ui-checkbox 
      class="formCheckbox" 
      text="Завершить сеансы на других устройствах" 
      v-model="isChecked"
    />
    <ui-button class="formButton buttonBig">
      Сменить пароль
    </ui-button>
    <modal 
      v-if="showModal && !useInModal" 
      :isShow="showModal" 
      @close="showModal = !showModal"
    >
      <div class="formResponse">
        {{responseText}}
      </div>
    </modal>
  </form>
</template>

<script>
import uiInput from './ui/ui-input.vue'
import { required, minLength, sameAs } from 'vuelidate/lib/validators'
import UiCheckbox from './ui/ui-checkbox.vue'
import UiButton from './ui/ui-button.vue'
import modal from './ui/modal.vue'

const onlyRomanAlphabet = str => /^[a-zA-Z0-9]+$/i.test(str)

export default {
  name: 'reset-password-form',
  components: { uiInput, UiCheckbox, UiButton, modal },
  data() {
    return {
      password: '',
      confirmPassword: '',
      isChecked: false,
      passwordErrorText: '',
      confirmPasswordErrorText: '',
      showModal: false,
      responseText: '',

    }
  },
  props: {
    useInModal: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    async setNewPassword() {
      this.$store.commit('setButtonsDisabled')
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          Math.random() > 0.5 ? resolve() : reject()
      }, 1500);
      })
      .then(() => {
        this.responseText = 'Успешно!'
        this.showModal = true
        this.password = this.confirmPassword = ''
        this.isChecked = false
      })
      .catch(() => {
        this.responseText = 'Ошибка!'
        this.showModal = true
      })
      .finally(() => {
        this.$store.commit('setButtonsDisabled')
      })
    },
    errorText(typeError) {
      switch(typeError){
        case 'required' :
          return 'Поле обязательно для заполнения'
        case 'length': 
          return 'Минимум 8 символов'
        case 'alphabet':
          return 'Используйте только латинские буквы'
        case 'sameAs':
          return 'Пароли должны совпадать'
      }
    },
    validateForm(){
      this.$v.$touch();
      if(this.$v.$invalid){
        this.passwordErrorText = !this.$v.password.required
        ? this.errorText('required')
        : !this.$v.password.onlyRomanAlphabet
        ? this.errorText('alphabet')
        : !this.$v.password.minLength
        ? this.errorText('length')
        : null

        this.confirmPasswordErrorText = !this.$v.confirmPassword.required
        ? this.errorText('required')
        : !this.$v.confirmPassword.onlyRomanAlphabet
        ? this.errorText('alphabet')
        : !this.$v.confirmPassword.minLength
        ? this.errorText('length')
        : !this.$v.confirmPassword.sameAs
        ? this.errorText('sameAs')
        : null

        return
      }
      this.confirmPasswordErrorText = this.passwordErrorText = ''
      this.setNewPassword()
    }
  },
  validations: {
    password: {
      required,
      minLength: minLength(8),
      onlyRomanAlphabet
    },
    confirmPassword: {
      required,
      onlyRomanAlphabet,
      minLength: minLength(8),
      sameAs: sameAs('password')
    }
  }
}
</script>

<style>

</style>