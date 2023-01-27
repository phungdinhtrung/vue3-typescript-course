<script setup lang="ts">
const text = ref<string>('Phùng Đình Trung')

const textLength1 = computed(() => text.value.length)
const textLength2 = computed<number>(() => text.value.length)

</script>

<template>
    <h1>{{ textLength1 }}</h1>
    <h1>{{ textLength2 }}</h1>
</template>

<style scoped>
</style>
