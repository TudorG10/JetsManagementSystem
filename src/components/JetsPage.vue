<template>
  <div class="JetsPage">

      <table>
          <caption>Attackers</caption>
          <tr>
              <td>
                  <img :src="tData.data_set.team.images[5]._value">
              </td>
          </tr>
      </table>
      <table id="attackerPlayerList">
          <tr>
            <th></th>
            <th>No</th>
            <th>Nom</th>
            <th>Position</th>
            <th>Events Played</th>
            <th>Goals</th>
            <th>Hits</th>
            <th>Assists</th>
            <th>Points</th>
            <th>Shots</th>
          </tr>
          <tr v-for="leader in pData.data_set.leaders" v-if="leader.position != 'Défenseur'">
              <td v-for="img in leader.images" v-if="img.height < 200">
                  <img :src="img._value">
              </td>             
              <td>{{leader.uniform_number}}</td>
              <td>{{leader.first_name}}{{leader.last_name}}</td>
              <td>{{leader.position}}</td>
              <td>{{leader.events_played}}</td>
              <td>{{leader.goals}}</td>
              <td>{{leader.hits}}</td>
              <td>{{leader.assists}}</td>
              <td>{{leader.points}}</td>
              <td>{{leader.shots}}</td>
          </tr>
      </table>
       <table id="defensePlayerList">
           <caption>Defenders</caption>
          <tr>
            <th></th>
            <th>No</th>
            <th>Nom</th>
            <th>Position</th>
            <th>Events Played</th>
            <th>Goals</th>
            <th>Hits</th>
            <th>Assists</th>
            <th>Points</th>
            <th>Shots</th>
          </tr>
          <tr v-for="leader in pData.data_set.leaders" v-if="leader.position == 'Défenseur'">
              <td v-for="img in leader.images" v-if="img.height < 200">
                  <img :src="img._value">
              </td>             
              <td>{{leader.uniform_number}}</td>
              <td>{{leader.first_name}}{{leader.last_name}}</td>
              <td>{{leader.position}}</td>
              <td>{{leader.events_played}}</td>
              <td>{{leader.goals}}</td>
              <td>{{leader.hits}}</td>
              <td>{{leader.assists}}</td>
              <td>{{leader.points}}</td>
              <td>{{leader.shots}}</td>
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
  #attackerPlayerList {
      font-family: Arial, Helvetica, sans-serif;
      color: #000000;
      background-color: #FFFFFF;
  }
</style>
