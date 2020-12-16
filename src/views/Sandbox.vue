<template>
  <body>
    <nav class="navbar navbar-inverse sandbox-nav">
      <div class="container-fluid">
        <div class="navbar-header">
          <div>
            <img src="@/assets/images/Logo.png" id="level-logo" />
            <a class="navbar-brand" id="level-name">&nbsp;Sandbox</a>
          </div>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <div class="row">
            <button
              class="nav-button"
              data-toggle="tooltip"
              title="Save your level"
            >
              &#x1F4BE;
            </button>
            <button
              class="nav-button"
              data-toggle="tooltip"
              onclick="loadCustomLevel()"
              title="Play your level"
            >
              &#x25B6;
            </button>
          </div>
        </ul>
      </div>
    </nav>
    <div class="row">
      <div class="col-6">
        <div class="container" align="right">
          <div id="field-selector">
            <legend align="left">Selector</legend>
            <div class="row selector-row">
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ground_1.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ground_2.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ground_3.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ground_4.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ground_5.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
            </div>
            <div class="row selector-row">
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ice_1.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ice_2.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ice_3.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ice_4.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ice_5.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
            </div>
            <div class="row selector-row">
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Snow_1.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Snow_2.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Snow_3.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ice_0.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ground_0.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
            </div>
            <div class="row selector-row">
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Wall.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Door_-10.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ground_1_P.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Ice_1_P.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
              <div class="col">
                <img
                  class="game-field"
                  src="@/assets/images/fields/Snow_1_P.png"
                  draggable="true"
                  ondragstart="drag(event)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="container">
          <div id="sandbox-map"></div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "Sandbox",
  methods: {
    loadCustomLevel: function() {},
    allowDrop: function(ev) {
      ev.preventDefault();
    },
    drag: function(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    },
    drop: function(ev) {
      ev.preventDefault();
      console.log(ev);
      let data = ev.dataTransfer.getData("text");
      console.log(data);
      let target = ev.target;
      let parent = ev.target.parentNode;
      parent.removeChild(target);
      let image = document.createElement("img");
      image.src = data;
      image.classList.add("game-field");
      image.addEventListener("drop", this.drop);
      image.addEventListener("dragover", this.allowDrop);
      parent.appendChild(image);
    }
  },
  mounted: function() {
    let parent = document.getElementById("sandbox-map");
    for (let x = 0; x < 10; x++) {
      let row = document.createElement("div");
      row.classList.add("row");
      row.classList.add("justify-content-center");
      row.id = "row-" + x.toString();
      parent.append(row);
      for (let y = 0; y < 10; y++) {
        let col = document.createElement("div");
        col.classList.add("col");
        col.classList.add("no-padding");
        col.id = "col-" + x + "," + y;
        row.append(col);
        let xy = x.toString() + y.toString();
        let imageHolder = document.createElement("div");
        imageHolder.id = "imgHolder-" + xy;
        let image = document.createElement("img");
        image.src = require("@/assets/images/fields/Wall.png");
        image.classList.add("game-field");
        image.id = "img-" + xy;
        image.addEventListener("drop", this.drop);
        image.addEventListener("dragover", this.allowDrop);
        imageHolder.append(image);
        col.append(imageHolder);
      }
    }
  }
};
</script>

<style scoped></style>
