<script setup lang="ts">
import Status from '@/types/status'

const status = ref<Status | ''>('')
status.value = ""

</script>

<template>
    <h1>{{ status }}</h1>
</template>

<style scoped>
</style>
