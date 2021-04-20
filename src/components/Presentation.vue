<template>
    <div class="container-fluid accueil">
        <div id="accueil" class="row p-5 justify-content-center">
            <div id="image" class="col-12 col-md-6 pl-5">
                <img src="../assets/undraw_world_9iqb.svg" style="max-width: 500px;" alt="carte du monde">
            </div>
            
            <div id="contenu" class="col-12 col-md-6 m-auto" style="width: 500px;">
                <h1 class="pb-4">Bienvenue</h1>
                <p>Vous êtes à la recherche d'informations sur un pays ? Vous êtes au bon endroit! Ici les pays sont classés par continents, et par ordre alphabétique.</p>
                <p>Commencez par choisir un continent ci-dessous</p>
                
            </div>
        </div>
    </div>
</template>

<style scoped>
.accueil {
    background-color: #333;
    position: relative;
}
h1, p {
    color: #f1f1f1;
}
@media all and (max-width: 1200px) {
    #accueil {
        display: block;
        text-align: center;
    }
    img {
        width: 300px;
        margin:0;
        padding-right: 20px;
    }
    #image {
        margin: 20px auto;
        padding: 0 !important;
    }
}
</style>