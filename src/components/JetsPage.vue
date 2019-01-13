<template>
  <div class="JetsPage">

      <table>
          <tr>
              <td>
                  <img :src="tData.data_set.team.images[5]._value">
              </td>
          </tr>
      </table>
      <table id="playerList">
          <tr>
            <th>No</th>
            <th>Nom</th>
            <th>Position</th>

          </tr>

          <tr v-for="leader in pData.data_set.leaders">
              <td>{{ leader.uniform_number }}</td>
              <td>{{ leader.first_name }} {{ leader.last_name}}</td>
              <td>{{ leader.position}}</td>
              <td v-for="img in leader.images" v-if="img.height < 200">
                  <img :src="img._value">
              </td>
              <td></td>
              <td></td>
              <td></td>
          </tr>

      </table>
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
  #playerList {
      font-family: Arial, Helvetica, sans-serif;
      color: #443300;
      background-color: #e4f4cd;
  }
</style>
