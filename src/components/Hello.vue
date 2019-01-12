<template>
  <div class="JetsPage">
    <span>{{ pData }}</span>

  </div>
</template>



<script type="text/javascript" src='../json/globalStats.json'></script>

<script>

var teamData = require('./../json/globalStats.json')
var playerData = require('./../json/player.json')
export default {
  name: 'JetsPage',
  data () {
    return {
      pData: playerData,
      tData: teamData
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
