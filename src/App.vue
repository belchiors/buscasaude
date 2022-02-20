<script>
import NavMenu from './components/NavMenu.vue'
import LeafletMap from './components/LeafletMap.vue'

export default {
  name: 'App',
  components: { NavMenu, LeafletMap },
  data() {
    return {
      items: [],
      url: 'https://ubs-webapi.herokuapp.com/'
    }
  },
  methods: {
    async fetchData(query) {
      const result = await fetch(`${this.url}/api/unidades/search/${query.toUpperCase()}`);
      if (result.ok) {
        const data = await result.json();
        if (data.length == 1) {
          this.addMarker(data[0]);
        } else {
          this.items = data;
        }
      }
    },
    addMarker(item) {
      const coords = [item.latitude, item.longitude];
      const content = `${item.nome}<br>${item.logradouro} - ${item.bairro}`
      this.$refs.leaflet.clearMarkers();
      this.$refs.leaflet.addMarkerWithPopup(coords, content);
      this.$refs.leaflet.setView(coords);
    }
  }
}
</script>

<template>
  <div class="sidebar">
    <NavMenu @submit="fetchData" @on-item-click="addMarker" :items="items" />
  </div>
  <main class="content">
    <LeafletMap ref="leaflet" />
  </main>
</template>

<style>
@import "./assets/base.css";

#app {
  display: flex;
  position: relative;
}

.sidebar {
  height: 100vh;
  position: sticky;
  top: 0;
  margin-bottom: 2.5rem;
}

main {
  flex: 1;
}

@media (max-width: 640px) {
  #app {
    display: block;
    flex-direction: column;
  }
}

@media (min-width: 640px) {
  .sidebar {
    width: 25rem;
  }
}
</style>
