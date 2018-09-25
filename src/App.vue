<template>
  <div id="app" class="container">
    <DataExplorer :collection-data="collectionData"/>
  </div>
</template>

<script>
import json from './components/response.json'
import DataExplorer from './components/DataExplorer.vue'

export default {
  name: 'app',
  components: {
    DataExplorer
  },
  data () {
    return {
      collectionData: json
    }
  }
}
</script>
