<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

export default {
  name: 'LeafletMap',
  data() {
    return {
      map: null,
      originPoint: [-8.050000, -34.900002],
      zoomLevel: 13,
      layerGroup: null,
      customIcon: null,
    }
  },
  methods: {
    setView(coords) {
      this.map.setView(coords, this.zoomLevel);
    },
    addMarker(coords, content) {
      L.marker(coords, { icon: this.customIcon })
        .addTo(this.layerGroup)
        .bindPopup(content);
    },
    addMarkerWithPopup(coords, content) {
      L.marker(coords, { icon: this.customIcon })
        .addTo(this.layerGroup)
        .bindPopup(content)
        .openPopup();
    },
    clearMarkers() {
      this.layerGroup.clearLayers();
    }
  },
  mounted() {
    this.map = L.map('map').setView(this.originPoint, this.zoomLevel);
    this.layerGroup = L.layerGroup().addTo(this.map);

    this.customIcon = L.icon({
      iconUrl: '/public/marker.png',
      iconSize:     [64, 64],
      iconAnchor:   [32, 63],
      popupAnchor:  [-0, -63]
    });

    // Add a tile layer to the map with proper attributions.
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }
}
</script>

<template>
  <div id="map"></div>
</template>

<style scoped>

#map {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1 !important;
  overflow: hidden !important;
}
</style>