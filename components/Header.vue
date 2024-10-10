<template>
  <header class="header">
    <ULink
        class="header__link"
        v-for="link in links"
        :key="link.page"
        :to="{name: `${link.page}`}"
        active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        :disabled="$route.name === link.page"
    >
      {{ link.name }}
    </ULink>
  </header>
</template>

<script setup>
  const links = [
    { name: 'Главная', page: 'index' },
    { name: 'Настройки', page: 'settings' },
  ]
</script>