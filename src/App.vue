<template>
  <div id="app">
    <navbar></navbar>
    <accueil></accueil>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Accueil from './components/Accueil'

export default {
  name: 'App',
  components: {
    'navbar' : Navbar,
    'accueil' : Accueil
  }
}
</script>

<style>

</style>
