<template>
  <div class="header bg-black flex justify-center items-center">
    <div class="header-logo">
      <router-link to="/"
        ><img class="header-logo-img" src="/logo/logotipo.png"
      /></router-link>
    </div>
  </div>
</template>

<script>
//import Menu from "components/Menu/Menu.vue";
import { defineComponent } from "vue";
export default defineComponent({
  // components: { Menu },
  setup() {
    return {};
  },
});
</script>

<style>
.header {
  padding: 10px;
}
.header-logo-img {
  width: 250px;
}
</style>
