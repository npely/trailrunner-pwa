<template>
  <div id="level-map"></div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "LevelMap",
  methods: {
    buildField: function(parent, fieldValue, fieldType, xy, isPlayerOnField) {
      let image = document.createElement("img");
      image.src = require("@/assets/" +
        this.setFieldImage(parent, fieldValue, fieldType, isPlayerOnField));
      image.classList.add("game-field");
      image.id = "img-" + xy + isPlayerOnField;
      parent.append(image);
      console.log("IM HERE");
    },
    setFieldImage: function(parent, fieldValue, fieldType, isPlayerOnField) {
      let myPicture = "images/fields/";
      if (fieldValue >= -20 && fieldValue <= 20) {
        if (fieldType === "Door" || !isPlayerOnField) {
          myPicture += fieldType + "_" + fieldValue + ".png";
        } else {
          myPicture += fieldType + "_" + fieldValue + "_P.png";
        }
      } else {
        myPicture += "Wall.png";
      }
      return myPicture;
    }
  },
  computed: {
    ...mapGetters(["levelMap"])
  },
  mounted: function() {
    let parent = document.getElementById("level-map");
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
        let field = this.levelMap.fields[x * 10 + y];
        let xy = x.toString() + y.toString();
        this.buildField(
          col,
          field.fieldvalue,
          field.fieldtype,
          xy,
          this.levelMap.level.PxPos === y && this.levelMap.level.PyPos === x
        );
      }
    }
  }
};
</script>

<style scoped></style>
