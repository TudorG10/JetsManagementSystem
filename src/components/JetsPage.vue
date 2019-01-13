<template>
  <div class="JetsPage">
      <div style="background-color: lightgrey; padding: 25px; border-bottom: 10px solid blue; width: 100%;">
        <table style="border-collapse: separate; border-spacing: 15px 0px;">
            <tr>
                <td style="min-width: 200px; min-height: 200;" rowspan="2">
                    <img :src="tData.data_set.team.images[3]._value">
                </td>
                <td style="font-size: 40px; min-width: 500px; text-align: left; background-color: #e6e6e6; border: 2px solid white; box-shadow: 10px 10px #888888; padding-left: 20px" rowspan="2"><span style="font-weight: bold;">Jets</span> Winnipeg</td>
                <td class="result-label">Wins</td>
                <td class="result-label">Losses</td>
                <td class="result-label">Rank</td>
                <td class="result-label">Points</td>
            </tr>
            <tr>
                <td class="result-value">{{tData.data_set.team.standing.wins}}</td>
                <td class="result-value">{{tData.data_set.team.standing.losses}}</td>
                <td class="result-value">{{tData.data_set.team.standing.division_rank}}</td>
                <td class="result-value">{{tData.data_set.team.standing.points}}</td>
            </tr>
        </table>
      </div>
      <table id="attackerPlayerList">
           <caption>Attackers</caption>         
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
  .JetsPage{
      background-color: white;
  }
  .result-value{
      font-size: 24px;
      font-weight: bold;
  }
  .result-label{
      min-width: 100px; 
      font-size: 24px;
      vertical-align: bottom;
      background-color: blue;
      color: #FFFFFF;
      font-weight: bold;
      border-spacing: 50px;
  }
</style>
