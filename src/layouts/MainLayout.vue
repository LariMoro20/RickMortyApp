<template>
  <q-layout view="lHh Lpr lFf" class="pages_color">
    <Header />
    <q-page-container class="bg-secondary">
      <router-view :key="$route.fullPath" />
    </q-page-container>
    <Footer />
  </q-layout>
</template>

<script>
import Header from "components/Parts/Header.vue";
import Footer from "components/Parts/Footer.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "MainLayout",
  components: { Header, Footer },
  setup() {},
});
</script>
<style></style>
