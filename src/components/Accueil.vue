<template>
  <div>
    <presentation></presentation>
    <continents></continents>
  </div>
</template>

<script>
import Presentation from './Presentation'
import Continents from './Continents'


export default {
  name: 'Accueil',
  components: {
    'presentation' : Presentation,
    'continents' : Continents,
  }
}
</script>

<style>

</style>