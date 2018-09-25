<template>
    <div>
        <h5 class="card-title">{{label}}</h5>
        <p class="card-text">{{value}}</p>
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
