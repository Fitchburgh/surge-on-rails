console.log('hi mom');
// var webdriverio = require('webdriverio');
//
// var options = {
//     desiredCapabilities: {
//         browserName: 'chrome'
//     }
// };
//
// var browser = webdriverio.remote(options).init();
//
// browser.url('localhost:9393/index.html?')
//   .click('form-control')
//   .setValue('Tacopies')
//   .keys('Enter')
//   .pause(5000)
//
// I know I know document. - Try to find another way to do this
(function() {
  $(document).on({
      ajaxStart: function() { $body.addClass("loading");},
       ajaxStop: function() { $body.removeClass("loading");}
  });
  var $loadout = $("#loadout");

  var $body = $("body");

  $('#userInput').keyup(function(event) {
    var searchString = $('#userInput').val();
      if (event.which == 13) {
          $(".charName").empty();
          $("#weak-spell").empty();
          $("#standard-spell").empty();
          $("#strong-spell").empty();
          $("#userInput").val("");

          getMyCharacter(searchString);

          return false;
      }
      if (event.which == 27) {
        $(".allCharData").fadeOut(500);
        $(".swap").fadeOut(500);
        $(".charInfo").fadeOut(500);
      }
  });

  $('.newUserInput').keyup(function(event) {
    var newUserInput = $('.newUserInput').val();
      if (event.which == 13) {
        // $(".charName").empty();
        // $("#weak-spell").empty();
        // $("#standard-spell").empty();
        // $("#strong-spell").empty();
        // $("#userInput").val("");
        createNewUser(newUserInput);
        return false;
      }
      if (event.which == 27) {
        $(".newUserPanel").fadeOut(500);
      }
  });
  $('.spellSwapBtn').click(function() {
    window.location.href = '/character/edit';
    return false;
  });

  // $('.weakSwapSubmit').click(function() {
  //   $(".allCharData").fadeOut(4300);
  //   $(".swap").fadeOut(3000);
  //   $(".charInfo").fadeOut(1000);
  //   $(".weakSwapButtons").fadeIn(1000);
  // });

  function createNewUser(newUserInput) {
    $(".newUserPanel").fadeIn(1000);
    $(".newUserInput").keyup(function(){
      $("#newUsername").val(this.value);
    });
    $('#newUsername').focus();
  }

// GET loadout for a character
  function getMyCharacter(searchString) {
    console.log(searchString);
    $.ajax({
      method: 'GET',
      url: 'search?search=' + encodeURIComponent(searchString),
      datatype: 'json',
      success: (function(data){
        var charName = data.character.name,
            weakSpell = data.character.loadout.weakSpell.name,
            weakSpellPower = data.character.loadout.weakSpell.power,
            weakSpellTimer = data.character.loadout.weakSpell.speed,
            standardSpell = data.character.loadout.standardSpell.name,
            standardSpellPower = data.character.loadout.standardSpell.power,
            standardSpellTimer = data.character.loadout.standardSpell.speed,
            strongSpell = data.character.loadout.strongSpell.name,
            strongSpellPower = data.character.loadout.strongSpell.power,
            strongSpellTimer = data.character.loadout.strongSpell.speed;
          $(".charName").append("<h3>" + charName + " </h3>");
          $("#weak-spell").append("<li>" + "Spell ≈ " + weakSpell + " </li>");
          $("#weak-spell").append("<li>" + "Power ≈ " + weakSpellPower + " </li>");
          $("#weak-spell").append("<li>" + "Timer ≈ " + weakSpellTimer + " </li>");
          $("#standard-spell").append("<li>" + "Spell ≈ " + standardSpell + " </li>");
          $("#standard-spell").append("<li>" + "Power ≈ " + standardSpellPower + " </li>");
          $("#standard-spell").append("<li>" + "Timer ≈ " + standardSpellTimer + " </li>");
          $("#strong-spell").append("<li>" + "Spell ≈ " + strongSpell + " </li>");
          $("#strong-spell").append("<li>" + "Power ≈ " + strongSpellPower + " </li>");
          $("#strong-spell").append("<li>" + "Timer ≈ " + strongSpellTimer + " </li>");
          $(".allCharData").fadeIn(1000);
          $(".swap").fadeIn(4300);
          $(".charInfo").fadeIn(3000);
        })
    });
  }

  // $('#userInput').keypress(function(event) {
  //     var searchString = $('#userInput').val();
  //     if (event.which == 13) {
  //         characterSearch(searchString);
  //         return false;
  //     }
  // });
  // // search bar requests
  // function characterSearch(searchString) {
  //   var searchbar = $("#userInput").val("");
  //   $.ajax({
  //       method: 'GET',
  //       url: 'api/character-spells?search=' + encodeURIComponent(searchString),
  //       data: {},
  //       datatype: 'json',
  //     }).done(function(characterData){
  //     characterData.forEach(function(spells){
  //       console.log('hi');
  //       // $("<li>").attr('id', ).text(weapon.weapon_name + ' ' + weapon.weapon_type).appendTo($loadout);
  //     });
  //   });
  // }
  // characterSearch();
  // if you have trouble wrap it in a function

  // GET character from full character list
  // function getCharName(searchString) {
  //   var searchbar = $("#userInput").val("");
  //   $.ajax({
  //     method: 'GET',
  //     url: '/api/character-list?search=' + encodeURIComponent(searchString),
  //     data: {},
  //     datatype: 'json',
  //   }).done(function(character) {
  //     new CharacterDetails(character[0]); //had [0] after character inside brackets
  //     console.log(character);
  //   }).fail(function(xhr, text, status) {
  //     if (xhr.status == 404)
  //     console.log('help me, computer!', text, status, xhr.status);
  //   });
  // }
  // getCharName();

  // Constructor for character information
  function CharacterDetails(characterObject) {
    // console.log(characterObject);
      this.info = {
          charName: characterObject.name,
      };

      var charContainer = $("<div>").attr("class", this.info.charName);
      var charName = $("<p>").addClass('character').attr("id", this.info.charName).html(this.info.charName).appendTo(charContainer);

      $(charContainer).insertAfter("header");

      this.MagicElements = function(characterObject) {
          var context = {
              charName: this.info.name,
          };
      };
      this.MagicElements(characterObject);
  }
})();
console.log('bye mom');
