<template>
  <div class="footer">
    <div class="footer-item">
      More information about
      <a href="https://github.com/npely/TrailRunner" target="_blank">
        TrailRunner Game
      </a>
    </div>
    <div class="footer-item">
      More information about
      <a
        href="https://github.com/npely/trailrunner-play-server"
        target="_blank"
      >
        TrailRunner Server
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.footer {
  background-color: #101010;
  position: fixed;
  height: 4%;
  width: 100%;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
}

.footer-item {
  color: grey;
  font-size: 0.5vw;
}
</style>
