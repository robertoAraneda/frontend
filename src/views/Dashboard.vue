<template>
  <h1>DashBoard</h1>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Dashboard',
  mounted() {
    axios
      .get('//localhost:8000/api/v1/state')
      .then(response => console.log(response))
  }
}
</script>

<style></style>
