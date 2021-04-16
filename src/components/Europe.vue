<template>
<div id="cartes">
    <div id="contenu" v-for="(country, index) in pays" :key="index" class="card m-3 bg-dark" style="width: 18rem; color:white;" >
        <img class="card-img-top" :src="country.flag" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title titre">{{ country.name }}</h5>
            <button class="btn"><i class="fas fa-question-circle"></i>  Informations sur ce pays</button>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            pays: null
        }
    },
    mounted() {
        axios.get("https://restcountries.eu/rest/v2/region/europe")
        .then(response => {
            console.log(response.data);
            this.pays = response.data;
        })
        .catch(error => console.log({ error }))
        
    } 
}
</script>

<style scoped>
#cartes {
    display: flex;
    flex-wrap: wrap;
}
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