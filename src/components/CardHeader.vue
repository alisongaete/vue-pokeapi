<template>
    <div class="d-flex justify-content-between border-bottom">
        <span>#{{number}}</span>
        <span>{{name.toUpperCase()}}</span>
        <div>
            <img v-for="type in types" :key="type.type.name" :src="require(`../assets/types/${type.type.name}.png`)" :alt="type.type.name" class="type-image"/>
        </div>
    </div>
</template>
<script>
export default {
    name:'CardHeader',
    props:{
        number:{
            type: Number,
            default: 1
        },
        name:{
            type: String,
            default: ''
        },
        types:{
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped>
    .border-bottom{
        border-bottom: 2px solid gray;
    }
    .type-image{
        width:25px;
    }
</style>