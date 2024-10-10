<template>
  <Header />
  <main>
    <NuxtPage />
  </main>

</template>

<script setup>
import Header from "~/components/Header.vue";

const cardStore = useCards()

onMounted(() => {
  cardStore.getCardsFromStorage()

  if (process.client) {
    window.addEventListener('storage', (e) => {
      if (e.key === "cards")
        cardStore.getCardsFromStorage()
    })
  }
})
</script>