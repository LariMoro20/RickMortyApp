<template>
  <q-page class="flex-center row">
    <div class="q-pa-sm text-white text-center">
      <h2>Personagens da série Rick and Morty</h2>
      <q-dialog v-model="loading">
        <q-card class="text-center bg-black text-white">
          <q-card-section>
            <div class="text-h6">Carregando personagens...</div>
            <q-circular-progress
              indeterminate
              size="50px"
              color="lime"
              class="q-ma-md"
            />
          </q-card-section>
        </q-card>
      </q-dialog>
      <q-dialog v-model="error">
        <q-card class="text-center bg-black text-white">
          <q-card-section>
            <div class="text-h6">
              Erro: Verifique sua conexão com a internet e tente novamente
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
      <p v-if="result && result.characters" class="q-ma-none">
        Pagina {{ current }}
      </p>
    </div>

    <div class="q-pa-md row" v-if="result && result.characters">
      <div class="q-pa-sm flex flex-center col-12 bg-secondary">
        <q-pagination
          class="pagination"
          v-model="current"
          @click="setPage(current)"
          :max="result.characters.info.pages"
        />
      </div>
      <div
        class="col-md-3 col-sm-12 col-12 q-pa-md character"
        v-for="(item, key) in result.characters.results"
        :key="key"
      >
        <Item :character="item" />
      </div>
      <div class="q-pa-sm flex flex-center col-12 bg-secondary">
        <q-pagination
          class="pagination primary"
          v-model="current"
          @click="setPage(current)"
          :max="result.characters.info.pages"
        />
      </div>
    </div>
    <q-page-scroller
      position="bottom-right"
      :scroll-offset="150"
      :offset="[18, 18]"
      :duration="800"
    >
      <q-btn fab icon="keyboard_arrow_up" color="accent" />
    </q-page-scroller>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { GET_CHARACTERS } from "src/gql/characters";
import Item from "../components/Characters/Item";
export default defineComponent({
  name: "Homepage",
  components: { Item },
  setup() {
    const { result, loading, error, fetchMore } = useQuery(GET_CHARACTERS, {
      page: 1,
    });
    const current = ref(1);
    const active = ref(true);
    const setPage = async (val) => {
      fetchMore({
        variables: {
          page: val,
        },
        fetchPolicy: "network-only",
      }).then((e) => {
        if (e.data["characters"].results >= 1) {
          console.log(e.data);
          result.value = e.data;
        }
      });
    };
    return {
      setPage,
      result,
      loading,
      error,
      current,
      active,
    };
  },
});
</script>
<style scoped>
.pagination span {
  font-size: 1.3em;
}
</style>
