<template>
  <div class="container-fluid">
    <div class="message">
      <div id="win-message">
        <p>
          Congrats!<br />
          <br />
          You've found your way
          <br />
          <br />
          out of the dungeon
        </p>
      </div>
    </div>
    <div class="row">
      <button @click="$router.push('/')" id="back-to-main" type="submit">
        Back to Main Menu
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "WinScreen"
};
</script>

<style scoped></style>
