<template>

    <div class="container">
        <div class="row row-cols-1 row-cols-md-3">
            <carte v-for="(country, index) in pays" :key="index" :country="country" :id="index"></carte>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
import Carte from './Carte'
export default {
    components: {
        'carte' : Carte
    },
    data(){
        return {
            pays: null
        }
    },
    mounted() {
        
        axios.get("https://restcountries.eu/rest/v2/region/europe")
        .then(response => {
            this.pays = response.data;
        })
        .catch(error => console.log({ error }))
        
    } 
}
</script>

<style scoped>

</style>