<template>
    <b-navbar>
        <b-navbar-brand href="#">
            <img alt="Pokemon" src="../assets/pokemon.png" class="logo">
        </b-navbar-brand>

        <b-navbar-nav class="ml-auto">
            <router-link to="/" class="link">Home</router-link>
            <router-link to="/about" class="link">About</router-link>
        </b-navbar-nav>
    </b-navbar>
</template>

<style scoped>
    .logo{
        width:100px
    }
    .link{
        text-decoration:none;
        color: white;
        font-weight: bold;
        margin-right: 20px
    }
</style>
