<template>
  <div class="add-card">
    <UInput class="add-card__input" v-model.trim="model" placeholder="Введите название "/>
    <UButton label="Сохранить" @click="saveCard"/>
  </div>
</template>

<script setup>
const cardStore = useCards()

const model = defineModel({
  type: String,
  default: ''
})

const saveCard = () => {
  cardStore.saveCard(model.value)

  model.value = ''
}

</script>

<style lang="scss">
.add-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__input {
    margin-bottom: 20px;
  }
}
</style>