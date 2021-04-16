<template>
  <div>
    <navbar></navbar>
    <presentation></presentation>
    <continents></continents>
    <myfooter></myfooter>
  </div>
</template>

<script>
import Navbar from './Navbar'
import Presentation from './Presentation'
import Continents from './Continents'
import Footer from './Footer'


export default {
  name: 'Accueil',
  components: {
    'navbar' : Navbar,
    'presentation' : Presentation,
    'continents' : Continents,
    'myfooter' : Footer
  }
}
</script>

<style>

</style>