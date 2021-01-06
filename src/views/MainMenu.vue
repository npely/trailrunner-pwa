<template>
  <v-container id="mainMenu" class="message">
    <v-row>
      <button @click="$router.push('level')" class="menu-button">
        New Game
      </button>
    </v-row>
    <v-row>
      <button type="submit" class="menu-button">Load Game</button>
    </v-row>
    <v-row>
      <button @click="$router.push('about')" class="menu-button">
        About Game
      </button>
    </v-row>
    <v-row>
      <button @click="$router.push('sandbox')" class="menu-button">
        Sandbox
      </button>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src

export default {
  name: "MainMenu"
};
</script>
