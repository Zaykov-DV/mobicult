<template>
  <div class="add-card">
    <UInput v-model.trim="model" placeholder="Введите название "/>
    <UButton label="Сохранить" @click="saveCard"/>
  </div>
</template>

<script setup>

const cardStore = useCards()

const model = defineModel({
  type: String,
  default: ''
})

const saveCard = (text) => {
  cardStore.saveCard(model.value)

  model.value = ''
}

</script>