<template>
  <div id="level-map"></div>
</template>

<script>
import { mapGetters } from "vuex";
import $ from "jquery";

export default {
  name: "LevelMap",
  methods: {
    buildField: function(parent, fieldValue, fieldType, xy, isPlayerOnField) {
      let image = $(`#img-${xy}`);
      //temporal work-around
      image.attr(
        "src",
        "@/assets/" +
          this.setFieldImage(parent, fieldValue, fieldType, isPlayerOnField)
      );
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
  created: function() {
    console.log(this.levelMap);
    let parent = $("#level-map");
    for (let x = 0; x < 10; x++) {
      let row = $(
        `<div class="row justify-content-center" id="row-${x.toString()}"></div>`
      );
      parent.append(row);
      for (let y = 0; y < 10; y++) {
        let col = $(`<div class="col no-padding" id="col-${x},${y}"></div>`);
        row.append(col);
        parent.html();
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
