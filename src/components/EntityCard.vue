<template>
  <div>
    <div class="card">
        <div class="card-body">
            <div v-for="item in metaData.attributes" :key="item.name">
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
