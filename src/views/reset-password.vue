<template>
  <main>
    <section class="resetPassword">
      <reset-password-form />
      <div class="info">
        <div class="infoIcon">
          <img src="@/assets/images/infoIcon.svg" alt="infoIcon">
        </div>
        <div class="infoTitle">
          Используйте сложные пароли и не сохраняйте их в браузере.
        </div>
        <div class="infoText">
          Данные меры цифровой безопасности помогают предотвратить взлом профиля.
        </div>
      </div>
    </section>
    <section class="management typography">
      <h2>
        Пароли для FTP и SSH
      </h2>
      <p>
        По умолчанию для авторизации используется пароль от профиля.
        <br>
        Сменить пароль, узнать сервер и IP адрес можно в разделе «Управление сайтами».
      </p>
      <div class="managementButtons">
        <ui-button @click.native="showModal = true" class="buttonMedium">
          <div class="managementButton">
            Управление сайтами
            <img src="@/assets/images/siteManagementIcon.svg"/>
          </div>
        </ui-button>
        <ui-button class="buttonUnderline">Как настроить?</ui-button>
      </div>
    </section>
    <section class="rights">
      <div class="rightsAccess typography">
        <h2>
          Доступ для разработчиков
        </h2>
        <p>
          Безопасная передача прав для управления и настройки сайтов, с помощью функции делегирования доступа.
        </p>
        <ui-button class="buttonMedium">Связанные аккаунты</ui-button>
      </div>
      <div class="rightsImage">
        <img src="@/assets/images/cat.svg" alt="cat">
      </div>
    </section>
    <modal 
      v-if="showModal" 
      :isShow="showModal" 
      @close="closeModal" 
      title="Смените пароль, если вы заметили подозрительную активность в своем профиле"
    >
      <reset-password-form :useInModal="true" />
    </modal>
  </main>
</template>

<script>
import ResetPasswordForm from '@/components/reset-password-form.vue'
import UiButton from '@/components/ui/ui-button.vue'
import Modal from '@/components/ui/modal.vue'

export default {
  components: {ResetPasswordForm, UiButton, Modal  },
    name: 'reset-password',
    data() {
        return {
           showModal: false
        }
    },
    methods: {
      closeModal(){
        this.showModal = false
      }
    }
}
</script>

<style>

</style>