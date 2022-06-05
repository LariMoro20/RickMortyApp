<template>
  <div class="header bg-white">
    <div class="header-logo col-12 flex justify-center items-center">
      <router-link to="/"
        ><img class="header-logo-img" src="/logo/logotipo.png"
      /></router-link>
    </div>
    <div class="header-logo col-12 q-pa-none flex justify-center">
      <a
        class="social__item text-black flex justify-center text-black items-center"
        @click="about = true"
        aria-label="GitHub"
        target="_blank"
      >
        <i class="ri-question-line"> </i>

        <q-tooltip :offset="[0, 0]"> Sobre a aplicação </q-tooltip>
      </a>

      <q-dialog v-model="about">
        <q-card>
          <q-card-section>
            <div class="text-h6">Rick and Morty App ©</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <p>
              Este projeto foi desenvolvido para demonstrar o uso de requisições
              GraphQL utilizando o client Apollo Vue, com integração ao backend
              do "The Rick and Morty API". Todas as informações aqui exibidas
              são de responsabilidade desta API.
            </p>

            Links de estudo:
            <p>
              <ul>
                <li>
                  <a
                    class="about__links"
                    target="_blank"
                    href="https://rickandmortyapi.com/"
                    >The Rick and Morty API</a
                  >
                </li>
                <li>
                  <a
                    class="about__links"
                    target="_blank"
                    href="https://v4.apollo.vuejs.org/"
                    >Vue Apollo</a
                  >
                </li>
                <li>
                  <a
                    class="about__links"
                    target="_blank"
                    href="https://www.apollographql.com/docs/react/"
                    >Apollo Client</a
                  >
                </li>
              </ul>
            </p>
            <small
              >Hospedado na
              <a class="about__links" href="https://vercel.com" target="_blank"
                >Vercel</a
              ></small
            >
            <p class="q-mb-xs">
              Desenvolvido por
              <a
                class="about__links"
                href="https://larissa-santos.vercel.app/"
                target="_blank"
                >Larissa Santos</a
              >
            </p>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Fechar" color="primary" v-close-popup />
          </q-card-actions>
        </q-card>
      </q-dialog>

      <a
        class="social__item text-black flex justify-center text-black items-center"
        href="https://github.com/LariMoro20/RickMortyApp"
        aria-label="GitHub"
        target="_blank"
      >
        <i class="ri-github-fill"></i>
        <q-tooltip :offset="[0, 0]"> Ver repositório </q-tooltip>
      </a>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    const about = ref(false);
    return { about };
  },
});
</script>

<style>
.header-logo-img {
  width: 250px;
}
.social__item {
  text-decoration: none;
  cursor: pointer;
}
.social__item i {
  font-size: 40px;
}
</style>
