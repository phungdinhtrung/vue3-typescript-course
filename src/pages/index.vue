<script setup lang="ts">
    // Emit
    const changeUser = (user_id: string) => {
        console.log('user:', user_id); 
    }
</script>
<template>
    <div>
        <!-- <Interface />
        <Status />
        <Mcomputed />  -->
        
        <Memit @change="changeUser" />

    </div>
</template>


        