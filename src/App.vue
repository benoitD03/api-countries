<template>
  <div id="app">
    <navbar></navbar>
    <accueil></accueil>
    <continents></continents>
    <myfooter></myfooter>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Accueil from './components/Accueil'
import Continents from './components/Continents'
import Footer from './components/Footer'


export default {
  name: 'App',
  components: {
    'navbar' : Navbar,
    'accueil' : Accueil,
    'continents' : Continents,
    'myfooter' : Footer
    

  }
}
</script>

<style>

</style>
