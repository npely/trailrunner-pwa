<template>
  <v-container id="game-container">
    <v-row id="nav-button-group">
      <div>
        <img src="@/assets/images/Logo.png" id="level-logo" />
      </div>
      <v-btn
        text
        class="nav-button"
        @click="saveGame()"
        data-toggle="tooltip"
        title="Save the game"
      >
        &#x1F4BE;
      </v-btn>
      <v-btn
        text
        id="hardcore-button"
        class="nav-button"
        data-toggle="tooltip"
        title="Change the difficulty"
        @click="hardcoreModeToggle()"
      >
        &#x1f47c;
      </v-btn>
      <v-btn
        text
        class="nav-button"
        @click="$router.push('/')"
        data-toggle="tooltip"
        title="Go back to main menu"
      >
        &#x1F6AA;
      </v-btn>
    </v-row>
    <LevelMap></LevelMap>
    <v-container id="move-button-group">
      <v-row>
        <v-btn text class="move-button" @click="walk('up')">
          &#x2191;
        </v-btn>
      </v-row>
      <v-row id="lower-move-buttons">
        <v-btn text class="move-button" @click="walk('left')">
          &#x2190;
        </v-btn>
        <v-btn text class="move-button" @click="walk('down')">
          &#x2193;
        </v-btn>
        <v-btn text class="move-button" @click="walk('right')">
          &#x2192;
        </v-btn>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
import LevelMap from "@/components/LevelMap";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TrailRunner",
  components: { LevelMap },
  methods: {
    ...mapActions(["makeMove", "switchHardcoreMode", "saveGame"]),
    walk: function(moveDirection) {
      this.makeMove({ moveDirection });
    },
    hardcoreModeToggle: function() {
      this.switchHardcoreMode();
      let hardcoreButton = document.getElementById("hardcore-button");
      if (this.hardcoreMode.hardcoreMode) {
        hardcoreButton.innerHTML = String.fromCodePoint(parseInt("128128"));
      } else {
        hardcoreButton.innerHTML = String.fromCodePoint(parseInt("128124"));
      }
    },
    saveGame: function() {
      this.saveGame();
    }
  },
  computed: {
    ...mapGetters(["hardcoreMode"])
  }
};
</script>

<style scoped>
#game-container {
  padding-top: 200px;
}

#nav-button-group {
  padding-bottom: 10px;
}

.nav-button {
  background: none;
  border: none;
  color: white;
  font-size: 25px;
}

.nav-button:hover {
  transform: translate(0px, 1px);
}

.nav-button:focus {
  outline: none;
}

#lower-move-buttons {
  padding-top: 15px;
}

.move-button {
  color: white;
  border: 3px solid white;
  text-shadow: none;
  font-size: 30px;
  backgroundcolor: rgba(34, 34, 64, 0.75);
  text-align: center;
  width: fit-content;
  text-shadow: 0 -1px 0 #000, 0 1px 0 #999999, 0 2px 0 #888888, 0 3px 0 #777777,
    0 4px 0 #666666;
}

.move-button:hover {
  transform: translate(0px, 5px);
}

#move-button-group {
  text-align: center;
  font-family: "Press Start P2", serif;
  padding-top: 30px;
  margin: auto;
}
</style>
