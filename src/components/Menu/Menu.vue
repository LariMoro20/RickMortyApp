<template>
  <nav class="flex justify-end desktop-only">
    <ul class="horizontal__menu no-padding no-margin">
      <li class="horizontal__menu-item">
        <router-link class="horizontal__menu-item-link" to="/"
          >Inicial</router-link
        >
      </li>
      <li class="horizontal__menu-item">
        <router-link class="horizontal__menu-item-link" to="/about"
          >Sobre</router-link
        >
      </li>
    </ul>
  </nav>
  <q-btn color="primary" label="Menu" class="mobile-only full-width q-pb-md">
    <q-menu fit>
      <q-list>
        <q-item clickable>
          <router-link
            class="horizontalmobile__menu-item-link full-width"
            to="/"
            >Inicial</router-link
          >
        </q-item>
        <q-item clickable>
          <router-link
            class="horizontalmobile__menu-item-link full-width"
            to="/about"
            >Sobre</router-link
          >
        </q-item>
      </q-list>
    </q-menu>
  </q-btn>
</template>

<script>
export default {};
</script>

<style scoped>
.horizontal__menu-item {
  padding: 10px;
  display: inline-block;
  font-size: 1rem;
}
.horizontal__menu-item-link,
.horizontal__menu-item-link:active {
  text-decoration: none;
  color: white;
}
.horizontalmobile__menu-item-link,
.horizontalmobile__menu-item-link:active {
  text-decoration: none;
  color: black;
}
</style>
