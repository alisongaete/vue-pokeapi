<template>
  <div class="home">
    <button :disabled="id <= 1" @click="previous()" class="btn btn-warning mx-2 my-4"><</button>
    <button :disabled="id >= 150" @click="next()"  class="btn btn-warning mx-2 my-4">></button>
    <Card
    :pokemon="pokemon"/>
  </div>
</template>

<script>

import api from '@/api.js'
import Card from '@/components/Card'

export default {
  name: 'Home',
  data () {
    return{
      id: 1,
      pokemon: {}
    }
  },
  components: {
    Card
  },
  created(){
    this.getPokemon(this.id)
  },
  methods:{
    getPokemon(id){
      api.getPokemon(id)
      .then(res => (this.pokemon = res))
    },
    previous(){
      this.id -= 1;
      this.getPokemon(this.id)
    },
    next(){
      this.id += 1;
      this.getPokemon(this.id)
    }
  }
}
</script>
