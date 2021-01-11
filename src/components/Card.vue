<template>
  <div v-if="Object.keys(pokemon).length !== 0" class="cardPokemon mx-auto p-3">
    <CardHeader
      :number="pokemon.id"
      :name="pokemon.name"
      :types="pokemon.types"
    />
    <CardImage
      :url="pokemon.sprites.other.dream_world.front_default"
      :alt="pokemon.name"
    />
    <CardStats
      :atk="pokemon.stats[1].base_stat"
      :def="pokemon.stats[2].base_stat"
      :spd="pokemon.stats[5].base_stat"
      :satk="pokemon.stats[3].base_stat"
      :sdef="pokemon.stats[4].base_stat"
      :hp="pokemon.stats[0].base_stat"
    />
  </div>
</template>

<script>
  import CardHeader from '@/components/CardHeader';
  import CardImage from '@/components/CardImage';
  import CardStats from '@/components/CardStats';

  export default {
    name: 'Card',
    props:{
      pokemon:{
        type: Object,
        default: () => {}
      }
    },
    components: {
      CardHeader,
      CardImage,
      CardStats
    }
  }
</script>

<style>
  .cardPokemon{
    width:400px;
    background-color: white;
    border-radius:25px;
  }
</style>
