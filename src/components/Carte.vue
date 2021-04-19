

<template>
    <div id="cartes" class="container">
        <div id="contenu" class="card m-4 bg-dark" style="width: 18rem; color:white;" >
            <img class="card-img-top" :src="country.flag" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title titre">{{ country.name }}</h5>
                <router-link :to="`/${country.name}`">
                    <button class="btn"><i class="fas fa-question-circle"></i>  Informations sur ce pays</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Cartes",
    props: ["pays", "country"]
}
</script>


<style scoped>

#contenu {
    border-radius: 15px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
img {
    height: 200px;
    border-radius: 50%;
}
button {
    background-color: #3ebfa6;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
</style>
