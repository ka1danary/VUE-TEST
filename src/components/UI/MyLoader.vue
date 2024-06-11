<template>
    <div id="app">
        <half-circle-spinner :animation-duration="1000" :size="30" color="#59BBE4" />
    </div>
  </template>
  
  <script>
  import { HalfCircleSpinner } from 'epic-spinners'
  
  export default {
    components: {
        HalfCircleSpinner,
    },
  }
  </script>