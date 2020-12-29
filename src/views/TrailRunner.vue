<template>
  <div class="container" id="game-container">
    <div class="navbar justify-content-center">
      <div>
        <img src="@/assets/images/Logo.png" id="level-logo" />
        <a class="navbar-brand" id="level-name">&nbsp;</a>
      </div>
      <button
        class="nav-button"
        @click="saveGame()"
        data-toggle="tooltip"
        title="Save the game"
      >
        &#x1F4BE;
      </button>
      <button
        id="hardcore-button"
        class="nav-button"
        @click="hardcoreModeToggle()"
      >
        &#x1f47c;
      </button>
      <button
        class="nav-button"
        @click="$router.push('/')"
        data-toggle="tooltip"
        title="Go back to main menu"
      >
        &#x1F6AA;
      </button>
    </div>
    <LevelMap></LevelMap>
    <div id="move-button-group">
      <div class="row">
        <button class="move-button" @click="walk('up')">
          &#x2191;
        </button>
      </div>
      <div class="btn-group" role="group">
        <button class="move-button" @click="walk('left')">
          &#x2190;
        </button>
        <button class="move-button" @click="walk('down')">
          &#x2193;
        </button>
        <button class="move-button" @click="walk('right')">
          &#x2192;
        </button>
      </div>
    </div>
  </div>
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
      console.log("switch Hardcore Mode");
      console.log(this.hardcoreMode);
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
.move-button {
  color: white;
  border: 3px solid white;
  text-shadow: none;
  font-size: 30px;
  background: rgba(34, 34, 34, 0.75);
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
  padding-top: 20px;
  margin: auto;
}
</style>
