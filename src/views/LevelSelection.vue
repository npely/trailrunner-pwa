<template>
  <div class="container">
    <div id="level-selection-button-group" class="message">
      <div class="row"></div>
      <div class="row">
        <button class="menu-button" @click="executeFetchLevel(1)" type="submit">
          Level 1
        </button>
      </div>
      <div class="row">
        <button class="menu-button" @click="executeFetchLevel(2)" type="submit">
          Level 2
        </button>
      </div>
      <div class="row">
        <button class="menu-button" @click="executeFetchLevel(3)" type="submit">
          Level 3
        </button>
      </div>
      <div class="row">
        <button class="menu-button" @click="executeFetchLevel(4)" type="submit">
          Level 4
        </button>
      </div>
      <div class="row">
        <button
          class="menu-button-blue"
          @click="executeFetchLevel(5)"
          type="submit"
        >
          Level 5
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LevelSelection",
  methods: {
    ...mapActions(["fetchLevel"]),
    executeFetchLevel: function(levelId) {
      this.fetchLevel({ levelId });
    }
  },
  computed: {
    ...mapGetters(["levelMap"])
  },
  watch: {
    levelMap: function() {
      this.$router.push("game");
    }
  }
};
</script>

<style scoped></style>
