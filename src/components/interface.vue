<script setup lang="ts">
import User from '@/types/user'

// Method
const sum = (x: number, y:number): number => x + y

// Interface: User
const user: User = ref({
  username: "Hoàng",
  password: "password",
  email: "phungdinhtrung@gmail.com",
  mobile: "0989.820099",
  address: "Mỹ Đình, Hà Nội"
})

// console.log('user', user.value.username);

</script>

<template>
    <h1>Sum {{ sum(1,2) }}</h1>
    <h1>User {{ user.username }}</h1>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
