<template>
    <div>
        <div class="text-muted">{{label}}</div>
        <p>{{value}}</p>
    </div>
</template>

<script>

export default {
  name: 'EntityCardElement',
  props: {
    label: String,
    value: String
  }
}
</script>
