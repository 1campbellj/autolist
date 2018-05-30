<template>
  <div id="app">
    <p>{{ message }}</p>
    <v-btn color="red">Hello</v-btn>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: "Hello Vue3!"
    };
  }
};
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
