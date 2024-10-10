<template>
  <div class="card">
    <p class="card__text">{{title}}</p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: '',
    required: true
  }
})
</script>