<template>
  <v-container id="sandbox-container">
    <v-row>
      <div>
        <img src="@/assets/images/Logo.png" id="level-logo" />
      </div>
      <v-btn
        text
        class="nav-button"
        data-toggle="tooltip"
        @click="saveCustomLevel()"
        title="Save your level"
      >
        &#x1F4BE;
      </v-btn>
      <v-btn
        text
        class="nav-button"
        data-toggle="tooltip"
        @click="playCustomLevel()"
        title="Play your level"
      >
        &#x25B6;
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
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Sandbox",
  methods: {
    ...mapActions(["postCustomGame"]),
    playCustomLevel: function() {
      let type = "Wall";
      let value = -99;
      let pXPos = 0;
      let pYPos = 0;
      let dXPos = 0;
      let dYPos = 0;

      let fields = [];

      for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
          let kids = document.getElementById(`imgHolder-${x}${y}`).children;
          let image = kids[0];
          let uri = image.src.toString().split("/");
          let source = uri[uri.length - 1];
          let name = source.split(".");
          let params = name[0].split("_");
          if (params.length > 1) {
            type = params[0];
            console.log(type);
            value = parseInt(params[1]);
            console.log(value);
            if (type === "Door") {
              dXPos = x;
              dYPos = y;
            }
          } else {
            type = "Wall";
            value = -99;
          }
          fields.push({
            fieldvalue: value,
            fieldtype: type
          });
          if (params.length > 2) {
            pXPos = x;
            pYPos = y;
          }
        }
      }
      let levelObj = {
        name: "CustomLevel",
        size: 10,
        PxPos: pXPos,
        PyPos: pYPos,
        DxPos: dXPos,
        DyPos: dYPos,
        WxPos: dXPos,
        WyPos: dYPos + 1
      };
      let level = {
        level: levelObj,
        fields: fields
      };
      console.log(level);
      this.postCustomGame({ level });
    },
    saveCustomLevel: function() {},
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
  computed: {
    ...mapGetters(["levelMap"])
  },
  watch: {
    levelMap: function() {
      this.$router.push("game");
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

<style scoped>
#sandbox-container {
  padding-top: 200px;
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
</style>
