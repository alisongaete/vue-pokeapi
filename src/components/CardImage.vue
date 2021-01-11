<template>
    <img :src="url" :alt="alt" class="p-5 width-image" />
</template>

<script>
export default {
    props:{
        url: {
            type: String,
            default: ''
        },
        alt: {
            type: String,
            default: ''
        },
    }
}
</script>

<style>
    .width-image{
        width:300px;
    }
</style>