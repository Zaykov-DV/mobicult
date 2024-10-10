<template>
    <div class="cards">
      <Card class="cards__card" v-for="card in cards" :key="card.id" :title="card.title"/>
    </div>
</template>

<script setup>
const cardStore = useCards()
const {cards} = storeToRefs(cardStore)

useHead({
  title: 'Главная',
})
</script>

<style scoped lang="scss">
.cards {
  display: flex;
  flex-wrap: wrap;

  &__card {
    margin: 12px;
  }
}
</style>