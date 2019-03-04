<template>
  <div class="childWorld">
    <h1>{{msg}}</h1>
    <p>{{age}}</p>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({})
export default class ChildWorld extends Vue {
  msg = 'childWorld'
  @Prop({type: Number, default: 0})
  age
}
</script>
