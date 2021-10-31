<template>
  <div>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script lang="js">
// eslint-disable-next-line
export default {
  layout: 'error', // you can set a custom layout for the error page
  props: {
    'error': {
      type: String,
      required: true
    }
  }
}
</script>
