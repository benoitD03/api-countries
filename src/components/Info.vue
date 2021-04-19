<template>
    <div class="container">

        <div class="text-center p-5">
            <h1 class="pb-5">{{ paysSelect.name }}</h1>
            <img class="w-50" :src="paysSelect.flag" alt="">    
        </div>

        <div class="row p-5 ">
  <div class="col-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Population</a>
      <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Capitale</a>
      <a class="list-group-item list-group-item-action" id="list-messages-list" data-toggle="list" href="#list-messages" role="tab" aria-controls="messages">Langue(s)</a>
      <a class="list-group-item list-group-item-action" id="list-settings-list" data-toggle="list" href="#list-settings" role="tab" aria-controls="settings">Superficie</a>
    </div>
  </div>
  <div class="col-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Ce pays compte {{ paysSelect.population}} habitants.</div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Sa capitale est {{ paysSelect.capital}}.</div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Le(s) langue(s) parlée(s) sont : {{ paysSelect.languages[0].nativeName}}</div>
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

</style>