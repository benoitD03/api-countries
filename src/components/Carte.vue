

<template>
    <div id="cartes" class="container">
        <div id="contenu" class="card m-4" style="width: 18rem; color:#333;" >
            <img class="card-img-top w-50 mt-3" :src="country.flag" alt="Card image cap">
            <div class="card-body text-center">
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
    background: #cfefe9;
}
img {
    height: 150px;
    border-radius: 50%;
    margin: auto;
}
button {
    background-color: #3ebfa6;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.5), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    margin: 10px auto !important;
}
</style>
