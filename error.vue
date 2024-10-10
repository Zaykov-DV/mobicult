<script setup>
defineProps({
  error: {
    type: Object,
    default: () => {},
  },
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div class="error">
    <div class="error__wrapper">
      <img class="error__img" src="/images/error.svg" alt="error image" />
      <h2 class="error__title">{{ error.statusCode }}</h2>
      <UButton
          size="xl"
          class="error__btn"
          @click="handleError"
      >
        На главную
      </UButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.error {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
  }

  &__img {
    width: 100%;
    height: 100%;
  }

  &__title {
    position: absolute;
    font-size: 12em;
  }

  &__btn {
    position: absolute;
    bottom: 10%;
  }
}
</style>
