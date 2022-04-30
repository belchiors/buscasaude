<script>
export default {
  name: 'NavMenu',
  emits: ['submit', 'onItemClick', 'nearme'],
  props: {
    items: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      query: '',
    }
  },
}
</script>

<template>
  <div class="top-row">
    <nav class="navbar">
      <a class="navbar-link" href="/">
        <img class="logo" src="@/assets/logo.png" width="28" height="28" />
        <span class="navbar-brand">Busca Saúde</span>
      </a>
    </nav>
    <div class="search">
      <input v-model="query" class="input" type="text" placeholder="Digite o nome da unidade de saúde" />
      <button class="button" @click="$emit('submit', query)">
        <i class="material-icons material-icons-outlined">search</i>
      </button>
      <!-- <button class="button" @click="$emit('nearme')">
        <i class="material-icons material-icons-outlined">near_me</i>
      </button> -->
    </div>
  </div>
  <aside class="search-results">
    <div class="list-view">
      <div
        class="list-item"
        v-for="(item, index) in items"
        :key="index"
        @click="$emit('onItemClick', item)"
      >
        <div class="details">{{ item.nome }}</div>
        <i class="material-icons material-icons-outlined">place</i>
      </div>
    </div>
    <div class="more-results">
      <button
        class="button more-button"
        v-if="items.length != items.length"
        @click="moreResults"
      >More results</button>
    </div>
  </aside>
</template>

<style scoped>
.top-row {
  position: sticky;
  top: 0;
  z-index: 1;
}

.navbar {
  line-height: 2.2rem;
  padding: 0.5rem 0.75rem;
  background: #f4f5f6;
  border-bottom: 0.1rem solid #d1d1d1;
}

.navbar .logo {
  height: 2rem;
  min-width: 2rem;
  margin-right: 0.8rem;
  vertical-align: top;
}

.navbar-brand {
  display: inline-block;
  position: relative;
  font-size: 1.3rem;
  font-weight: 500;
  color: #363636;
}

.input {
  max-width: 100%;
  width: 100%;
  background-color: white;
  border-color: #d3d3d3;
  color: #363636;
  border: 1px solid #cecece;
  font-size: 1rem;
  height: 2.5rem;
  line-height: 1.5;
  border-radius: 0.125rem;
  padding: 0.5rem;
}

.input:focus {
  outline: none;
}

.button {
  color: #fff;
  background-color: #7092ff;
  border: 1px solid #7092ff;
  font-size: 1rem;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  cursor: pointer;
  white-space: nowrap;
}

.button:hover {
  background-color: #5880ff;
}

.more-button {
  margin: 1rem auto;
  text-align: center !important;
}

.search {
  display: flex;
  padding: 0.5rem 0.75rem;
}

.search input {
  border-right-color: transparent;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.search .button {
  width: 64px;
  background-color: #f8f8f8;
  border: 0.1rem solid #d3d3d3;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}

.search .button:hover {
  background-color: #f0f0f0;
}

.list-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0.75rem;
  cursor: pointer;
  border-radius: 0.125rem;
}

.list-item:hover {
  background-color: #f4f5f6;
}

.search-results {
  position: sticky;
  flex-grow: 1;
  transition: all 0.3s;
  overflow-y: auto;
  height: calc(100vh - 5.75rem);
}

.more-results {
  display: flex;
  align-items: center;
}
</style>