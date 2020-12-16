<template>
  <div class="container-fluid">
    <div class="message">
      <div id="lose-message">
        <p>
          You died!<br />
          <br />
          GAME OVER<br />
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
  name: "LoseScreen"
};
</script>

<style scoped></style>
