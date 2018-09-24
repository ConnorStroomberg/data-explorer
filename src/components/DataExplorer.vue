<template>
  <div class="hello">
    <h1>{{ collectionData.meta.label }}</h1>
    <div>
      <div v-for="item in collectionData.items" :key="item.displayName">
        <entity-card :entity-data="item" :meta-data="collectionData.meta"></entity-card>
      </div>
    </div>
  </div>
</template>

<script>

import EntityCard from '@/components/EntityCard'

export default {
  name: 'DataExplorer',
  components: {EntityCard},
  props: {
    collectionData: Object
  }
}
</script>
