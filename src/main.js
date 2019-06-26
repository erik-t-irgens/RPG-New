// Front end logic.
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Character } from './../src/RPG.js';
import {attributeInformation} from './../src/RPG.js';
import {playerHealth} from './../src/RPG.js';
import {playerXP} from './../src/RPG.js';
import {playerCharacter} from './../src/RPG.js';
import {CharacterBook} from './../src/RPG.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

var characterBook = new CharacterBook();

$(document).ready(function() {



  $("#strengthPointPrint").html("<p>Strength: " + attributeInformation.strengthTotal + "</p>");
  $("#defencePointPrint").html("<p>Defence: " + attributeInformation.defenceTotal + "</p>");
  $("#presencePointPrint").html("<p>Presence: " + attributeInformation.presenceTotal + "</p>");
  $("#resistancePointPrint").html("<p>Resistance: " + attributeInformation.resistanceTotal + "</p>");

  $("#characterCreatorForm").submit(function(event){

    var character = new Character (
      $("#nameInput").val(),
      playerHealth.value,
      1,
      playerXP.value,
      attributeInformation.strengthTotal,
      attributeInformation.defenceTotal,
      attributeInformation.presenceTotal,
      attributeInformation.resistanceTotal
    )

    characterBook.addCharacter(character)
    console.log(character);

    $("#creationCard").slideUp(1000);
    $("#displayPlayerName").html(characterBook.characters[0].name);
    $("#displayPlayerStrength").html("Strength: " + characterBook.characters[0].strength);
    $("#displayPlayerDefence").html("Defence: " + characterBook.characters[0].defence);
    $("#displayPlayerPresence").html("Presence: " + characterBook.characters[0].presence);
    $("#displayPlayerResistance").html("Resistance: " + characterBook.characters[0].resistance);
    $("#displayPlayerLevel").html(characterBook.characters[0].level);
    $("#playerCard").slideDown(1000);
    event.preventDefault();

  });

// Button test functions for HP
$("#removeHPTest").click(function(){
  playerHealth.value = playerHealth.value -10
  characterBook.characters[0].health = playerHealth.value;
  console.log(characterBook.characters[0].health);
});
$("#addHPTest").click(function(){
  playerHealth.value = playerHealth.value +10
  characterBook.characters[0].health = playerHealth.value;
  console.log(characterBook.characters[0].health);
});
$("#removeXPTest").click(function(){
  playerXP.value = playerXP.value -10
  characterBook.characters[0].experience = playerXP.value;
  console.log(characterBook.characters[0].experience);
});
$("#addXPTest").click(function(){
  playerXP.value = playerXP.value +10
  characterBook.characters[0].experience = playerXP.value;
  console.log(characterBook.characters[0].experience);
});



// Creation button logic
  $("#addStrength").click(function(){
    if (attributeInformation.attributePool > 0){
      attributeInformation.strengthTotal = attributeInformation.strengthTotal + 1;
      attributeInformation.attributePool =  attributeInformation.attributePool - 1
    } else {
      alert("No more points to spend!")
    }
      $("#attributePointPrint").html("<p>Points left to spend: " + attributeInformation.attributePool + "</p>");
      $("#strengthPointPrint").html("<p>Strength: " + attributeInformation.strengthTotal + "</p>");

  });

  $("#subStrength").click(function(){
      if (attributeInformation.strengthTotal > 0){
        attributeInformation.strengthTotal = attributeInformation.strengthTotal - 1;
        attributeInformation.attributePool =  attributeInformation.attributePool + 1;
      } else {
        alert("Can't go lower than 0!")
      }
      $("#attributePointPrint").html("<p>Points left to spend: " + attributeInformation.attributePool + "</p>");
      $("#strengthPointPrint").html("<p>Strength: " + attributeInformation.strengthTotal + "</p>");
    });

  $("#addDefence").click(function(){
      if (attributeInformation.attributePool > 0){
        attributeInformation.defenceTotal = attributeInformation.defenceTotal + 1;
        attributeInformation.attributePool =  attributeInformation.attributePool - 1
      } else {
        alert("No more points to spend!")
      }
        $("#attributePointPrint").html("<p>Points left to spend: " + attributeInformation.attributePool + "</p>");
        $("#defencePointPrint").html("<p>Defence: " + attributeInformation.defenceTotal + "</p>");

    });

  $("#subDefence").click(function(){
        if (attributeInformation.defenceTotal > 0){
          attributeInformation.defenceTotal = attributeInformation.defenceTotal - 1;
          attributeInformation.attributePool =  attributeInformation.attributePool + 1;
        } else {
          alert("Can't go lower than 0!")
        }
        $("#attributePointPrint").html("<p>Points left to spend: " + attributeInformation.attributePool + "</p>");
        $("#defencePointPrint").html("<p>Defence: " + attributeInformation.defenceTotal + "</p>");
      });

  $("#addPresence").click(function(){
        if (attributeInformation.attributePool > 0){
          attributeInformation.presenceTotal = attributeInformation.presenceTotal + 1;
          attributeInformation.attributePool =  attributeInformation.attributePool - 1
        } else {
          alert("No more points to spend!")
        }
          $("#attributePointPrint").html("<p>Points left to spend: " + attributeInformation.attributePool + "</p>");
          $("#presencePointPrint").html("<p>Presence: " + attributeInformation.presenceTotal + "</p>");

      });

  $("#subPresence").click(function(){
          if (attributeInformation.presenceTotal > 0){
            attributeInformation.presenceTotal = attributeInformation.presenceTotal - 1;
            attributeInformation.attributePool =  attributeInformation.attributePool + 1;
          } else {
            alert("Can't go lower than 0!")
          }
          $("#attributePointPrint").html("<p>Points left to spend: " + attributeInformation.attributePool + "</p>");
          $("#presencePointPrint").html("<p>Presence: " + attributeInformation.presenceTotal + "</p>");
        });

  $("#addResistance").click(function(){
          if (attributeInformation.attributePool > 0){
            attributeInformation.resistanceTotal = attributeInformation.resistanceTotal + 1;
            attributeInformation.attributePool =  attributeInformation.attributePool - 1
          } else {
            alert("No more points to spend!")
          }
            $("#attributePointPrint").html("<p>Points left to spend: " + attributeInformation.attributePool + "</p>");
            $("#resistancePointPrint").html("<p>Resistance: " + attributeInformation.resistanceTotal + "</p>");

        });

  $("#subResistance").click(function(){
            if (attributeInformation.resistanceTotal > 0){
              attributeInformation.resistanceTotal = attributeInformation.resistanceTotal - 1;
              attributeInformation.attributePool =  attributeInformation.attributePool + 1;
            } else {
              alert("Can't go lower than 0!")
            }
            $("#attributePointPrint").html("<p>Points left to spend: " + attributeInformation.attributePool + "</p>");
            $("#resistancePointPrint").html("<p>Resistance: " + attributeInformation.resistanceTotal + "</p>");
          });














});
