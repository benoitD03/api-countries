<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    'navbar' : Navbar,
    'my-footer' : Footer
  }
}
</script>

<style>

</style>
