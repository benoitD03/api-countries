<template>
<div class=" navigation container-fluid p-4">
    <ul class="nav nav-tabs">
        <li class="nav-item">
            <router-link to="/" class="nav-link">Accueil</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/Europe" class="nav-link">Europe</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/Ameriques" class="nav-link">Amériques</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/Afrique" class="nav-link">Afrique</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/Asie" class="nav-link">Asie</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/Oceanie" class="nav-link">Océanie</router-link>
        </li>
    </ul>
</div>   
</template>

<style scoped>
.navigation {
    background-color: #333;     
}
li a {
    color: #f1f1f1;
}
</style>