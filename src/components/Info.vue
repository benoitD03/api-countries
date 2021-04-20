
<template>
    <div class="container-fluid contenu">

        <div class="text-center p-5">
            <h1 class="pb-5">{{ paysSelect.translations.fr }}</h1>
            <img class="w-30 mb-5" :src="paysSelect.flag" alt="">   
            <hr>
            <h2 class="mt-5 pt-5">Selectionnez une information</h2> 
        </div>

        <div id="liste" class="row pb-5 justify-content-center">
            <div class="col-3">
                <div class=" selection list-group" id="list-tab" role="tablist">
                <a class="option list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Population</a>
                <a class="option list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Capitale</a>
                <a class="option list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Langue(s)</a>
                <a class="option list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Superficie</a>
                </div>
            </div>
            <div class="col-3 align-self-center">
                <div class=" resultat tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Ce pays compte {{ paysSelect.population}} habitants.</div>
                    <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Sa capitale est {{ paysSelect.capital}}.</div>
                    <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                        Langues :
                        <ul class="pl-0" :key="index" v-for="(language, index) in paysSelect.languages">
                            <li>{{ language.name }}</li>
                        </ul>
                    </div>
                    <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">La superficie est de {{ paysSelect.area}} km²</div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
import axios from 'axios'
export default {
    name: 'Info',
    data(){
        return{
            id : this.$route.params.id,
            paysSelect : []
        }
    },
    mounted() {
        axios.get(`https://restcountries.eu/rest/v2/name/${this.id}`)
        .then( response => {
            this.paysSelect = response.data[0];
            console.log(this.paysSelect);
        })
    }
}
</script>


<style scoped>
.contenu {
    background-color: #f5fcfb;
}
.active {
    background: #3ebfa6 !important;
}
.option {
    background: #ebebeb;
}
.fade {
    padding: 10px;
    text-align: center;
    border-radius: 15px;
    color: white;
    font-size: 18px;
}
.list-group {
    border-radius: 15px;
}
img {
    width: 40%;
}
li {
    list-style-type: none;
}
@media all and (max-width: 1200px) {
#liste {
    display: block;
    margin: auto;
    padding: auto;
}
.selection, .resultat {
    width: 300px ;
    text-align: center; 
    margin-top: 10px;
}
}
</style>