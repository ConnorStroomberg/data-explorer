<template>
  <div>
    <div class="card">
        <h5 class="card-header">{{entityData[metaData.labelAttribute]}}</h5>
        <div class="card-body">
            <div v-for="item in metaData.attributes" :key="item.name" v-if="entityData[item.name] && !item.labelAttribute">
                <entity-card-element :label="item.label " :value="entityData[item.name]"></entity-card-element>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

import EntityCardElement from '@/components/EntityCardElement'

export default {
  name: 'EntityCard',
  components: { EntityCardElement },
  props: {
    entityData: Object,
    metaData: Object
  }
}
</script>
