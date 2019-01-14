<template>
  <div class="JetsPage">
      <div style="background-color: lightgrey; padding: 25px; border-bottom: 10px solid blue; width: 100%;">
        <table style="border-collapse: separate; border-spacing: 15px 0px;">
            <tr>
                <td style="min-width: 200px; min-height: 200;" rowspan="2">
                    <img :src="tData.data_set.team.images[3]._value">
                </td>
                <td style="font-size: 40px; min-width: 500px; text-align: left; background-color: #e6e6e6; border: 2px solid white; box-shadow: 10px 10px #888888; padding-left: 20px" rowspan="2">
                    <span style="font-weight: bold;">Jets</span> 
                    Winnipeg
                </td>
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
      <table class="player-table">
          <tr>
              <td colspan="10"><div class="player-title">ATTACKERS</div></td>
          </tr>
          <tr style="height: 50px;">
            <th class="player-label"></th>
            <th class="player-label">No</th>
            <th class="player-label">Name</th>
            <th class="player-label">Position</th>
            <th class="player-label">Events Played</th>
            <th class="player-label">Goals</th>
            <th class="player-label">Hits</th>
            <th class="player-label">Assists</th>
            <th class="player-label">Points</th>
            <th class="player-label">Shots</th>
          </tr>
          <tr v-for="leader in pData.data_set.leaders" v-if="leader.position != 'Défenseur'" >
              <td v-for="img in leader.images" v-if="img.height < 200">
                  <img :src="img._value" style="max-height: 100px;">
              </td>             
              <td class="table-text">{{leader.uniform_number}}</td>
              <td class="table-text">{{leader.first_name}} {{leader.last_name}}</td>
              <td class="table-text">{{leader.position}}</td>
              <td class="table-text">{{leader.events_played}}</td>
              <td class="table-text">{{leader.goals}}</td>
              <td class="table-text">{{leader.hits}}</td>
              <td class="table-text">{{leader.assists}}</td>
              <td class="table-text">{{leader.points}}</td>
              <td class="table-text">{{leader.shots}}</td>
          </tr>
      </table>
       <table class="player-table">
          <tr>
              <td colspan="10"><div class="player-title">DEFENDERS</div></td>
          </tr>          
          <tr>
            <th class="player-label"></th>
            <th class="player-label">No</th>
            <th class="player-label">Nom</th>
            <th class="player-label">Position</th>
            <th class="player-label">Events Played</th>
            <th class="player-label">Goals</th>
            <th class="player-label">Hits</th>
            <th class="player-label">Assists</th>
            <th class="player-label">Points</th>
            <th class="player-label">Shots</th>
          </tr>
          <tr v-for="leader in pData.data_set.leaders" v-if="leader.position == 'Défenseur'">
              <td v-for="img in leader.images" v-if="img.height < 200">
                  <img :src="img._value" style="max-height: 100px;">
              </td>             
              <td class="table-text">{{leader.uniform_number}}</td>
              <td class="table-text">{{leader.first_name}} {{leader.last_name}}</td>
              <td class="table-text">{{leader.position}}</td>
              <td class="table-text">{{leader.events_played}}</td>
              <td class="table-text">{{leader.goals}}</td>
              <td class="table-text">{{leader.hits}}</td>
              <td class="table-text">{{leader.assists}}</td>
              <td class="table-text">{{leader.points}}</td>
              <td class="table-text">{{leader.shots}}</td>
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
  .result-value{
      font-size: 40px;
      font-weight: bold;
      background-color: white;
      color: black;
  }
  .result-label{
      min-width: 100px; 
      font-size: 24px;
      vertical-align: bottom;
      background-color: blue;
      color: white;
      font-weight: bold;
      border-spacing: 50px;
  }
  .player-table{
      margin-left: auto;
      margin-right: auto;
  }
  .player-label{
      color: white;
      background-color: #737373;
      min-width: 100px;
      width: 100px;
      font-weight: bold;
      font-size: 20px;

  }
  tr:nth-child(even) {background-color: #f2f2f2;}
    .player-title{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        font-size: 40px;
        float: left;
        margin-left: 40px;
    }
    .table-text{
        font-size: 22px;
    }
</style>
