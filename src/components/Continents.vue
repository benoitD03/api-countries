<template>
    <div id="continents" class="container-fluid text-center pt-5 pb-5">
        <h2 class="pb-5">Choisissez un continent</h2>
        <img src="../assets/the_world_is_mine.svg" style="max-width: 300px;" alt="globe">
        <div class="row justify-content-center mt-5">
            <router-link to="/Europe"><button type="button" class="btn btn-success btn-lg mr-4 ml-4"><i class="fas fa-globe-europe"></i>  Europe</button></router-link>
            <router-link to="/Ameriques"><button type="button" class="btn btn-success btn-lg mr-4 ml-4"><i class="fas fa-globe-americas"></i>  Amériques</button></router-link>
            <router-link to="/Afrique"><button type="button" class="btn btn-success btn-lg mr-4 ml-4"><i class="fas fa-globe-africa"></i>  Afrique</button></router-link>
            <router-link to="/Asie"><button type="button" class="btn btn-success btn-lg mr-4 ml-4"><i class="fas fa-globe-asia"></i>  Asie</button></router-link>
            <router-link to="/Oceanie"><button type="button" class="btn btn-success btn-lg mr-4 ml-4"><i class="fas fa-globe-asia"></i>  Océanie</button></router-link>
        </div>
    </div>
</template>

<style scoped>
#continents {
    background-color: #f1f1f1;
    color: #333;
}
button {
    background-color: #3ebfa6;
}
</style>