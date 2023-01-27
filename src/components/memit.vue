<script setup lang="ts">

const emit = defineEmits<{
  (e: 'change', user_id: string): void;
}>()

const handleCreateUser = () => { emit('change', 'user-01')}

</script>

<template>
    <button @click="handleCreateUser()">submit</button>
</template>

<style scoped>
</style>
