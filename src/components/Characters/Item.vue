<template>
  <div class="flip-container full-width">
    <div class="flipper character__character">
      <div
        class="front q-pa-lg bg-secondary text-white text-center flex characters-center column items-center"
      >
        <div>
          <img :src="character.image" class="character__item-image" />
          <h5 class="q-ma-none">{{ character.name }}</h5>
        </div>
      </div>
      <div class="back bg-secondary col-12">
        <div class="character__character-content col-12 text-white q-pa-md">
          <div class="text-center">
            <h6 class="q-ma-none">Informações</h6>
          </div>
          <ul class="q-pa-md">
            <li><b>Espécie:</b> {{ character.species }}</li>
            <li><b>Gênero:</b> {{ character.gender }}</li>
            <li><b>Status:</b> {{ character.status }}</li>
            <li><b>Origem:</b> {{ character.origin.name }}</li>
            <li><b>Dimensão:</b> {{ character.origin.dimension }}</li>
            <li><b>Data de criação:</b> {{ character.created }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    character: {
      type: [Array, Object],
      default: null,
    },
  },
  setup(props) {},
});
</script>
<style scoped>
.character__character-content p {
  font-size: 1em;
}
.character__item {
  background-color: black;
}
.character__item-image {
  width: 400px;
  max-width: 100%;
}
.flip-container {
  height: 430px;
}

.flipper {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-container:hover .flipper {
  transform: rotateY(180deg);
}

.front,
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.back {
  transform: rotateY(180deg);
}
</style>
