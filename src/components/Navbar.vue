<template>
<div class=" navigation container-fluid p-4">
    <ul class="nav nav-tabs">
        <li class="nav-item">
            <!-- <a class="nav-link" href="#">Accueil</a> -->
            <router-link to="/" class="nav-link">Accueil</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/Europe" class="nav-link">Europe</router-link>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Amériques</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Afrique</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Asie</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Océanie</a>
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