<template>
  <div class="settings">
    <div class="settings__block">
    <h2 class="settings__title">Настройки карточек</h2>
      <UButton label="Добавить карточку" @click="handleModal"/>
    </div>
    <div class="settings__block">
      <h2 class="settings__title">Редактирование карточек</h2>
      <ul
          v-if="cards.length"
          class="settings__cards" >
        <li v-for="card in cards"
            :key="card.id"
            class="settings__card">
          <UInput v-model="card.title"
                  @blur="() => cardStore.changeCard(card.id, card.title)"
                  class="settings__input"/>
          <UButton icon="mdi-light:delete"
                   color="red"
                   @click="cardStore.removeCard(card.id)">
            Удалить
          </UButton>
        </li>
      </ul>
    </div>
  </div>
  <Modal v-if="isOpenModal" @close-modal="handleModal">
    <AddNewCard />
  </Modal>
</template>

<script setup>
import Modal from "~/components/Modal.vue";
import AddNewCard from "~/components/AddNewCard.vue";

useHead({
  title: 'Настройки',
})

const isOpenModal = ref(false)
const cardStore = useCards()
const {cards} = storeToRefs(cardStore)

const handleModal = () => {
  isOpenModal.value = !isOpenModal.value
}
</script>

<style lang="scss" scoped>
.settings {
  &__title {
    margin-bottom: 24px;
  }

  &__block {
    margin: 40px 0;
  }

  &__cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  &__card {
    display: flex;
  }

  &__input {
    margin-right: 8px;
  }
}

@media screen and (max-width: 680px) {
  .settings {
    &__cards {
     grid-template-columns: 1fr;
   }
  }
}
</style>