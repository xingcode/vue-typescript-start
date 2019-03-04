<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <child-world :age = age></child-world>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ChildWorld from './ChildWorld.vue'
@Component({
  components: {
    ChildWorld
  }
})
export default class HelloWorld extends Vue {
  msg = 'Welcome to Your Vue.js App'
  age = 12
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
