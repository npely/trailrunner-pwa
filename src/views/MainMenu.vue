<template>
  <div class="container">
    <div id="mainMenu" class="message">
      <div class="row"></div>
      <div class="row">
        <button @click="$router.push('level')" class="menu-button">
          New Game
        </button>
      </div>
      <div class="row">
        <button type="submit" class="menu-button">Load Game</button>
      </div>
      <div class="row">
        <button @click="$router.push('about')" class="menu-button">
          About Game
        </button>
      </div>
      <div class="row">
        <button @click="$router.push('sandbox')" class="menu-button">
          Sandbox
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "MainMenu"
};
</script>
