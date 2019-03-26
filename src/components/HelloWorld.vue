<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <child-world :age=age
      :name=name
      @say=Say></child-world>
    <hr>
    {{say}}
    <Table border
      ref="selection"
      :columns="columns4"
      :data="data1"></Table>
    <p>答案： {{isOkAnswer}}</p>
    <p>是否有力量的forced: {{isOkforced}}</p>
    <img :src="isOkImg"
      alt=""
      class="isOk">
      <Button type="info" @click="subtractie" icon="md-remove-circle">测试EventBus --- subtractie</Button>
      <Button type="success" @click="test">测试EventBus ---  test</Button>
      <Button type="warning" @click="add" icon="ios-add">测试EventBus --- add</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ChildWorld from './ChildWorld.vue'
import { EventBus } from './event-bus.js'
@Component({
  components: {
    ChildWorld
  }
})
export default class HelloWorld extends Vue {
  msg = 'Welcome to Your Vue.js App';
  say = '';
  age = 12;
  name = 'xxxbai';
  columns4 = [
    {
      type: 'selection',
      width: 60,
      align: 'center'
    },
    {
      title: 'Name',
      key: 'name'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Address',
      key: 'address'
    }
  ];
  data1 = [
    {
      name: 'John Brown',
      age: 18,
      address: 'New York No. 1 Lake Park',
      date: '2016-10-03'
    },
    {
      name: 'Jim Green',
      age: 24,
      address: 'London No. 1 Lake Park',
      date: '2016-10-01'
    },
    {
      name: 'Joe Black',
      age: 30,
      address: 'Sydney No. 1 Lake Park',
      date: '2016-10-02'
    },
    {
      name: 'Jon Snow',
      age: 26,
      address: 'Ottawa No. 2 Lake Park',
      date: '2016-10-04'
    }
  ];
  Say (saysomething) {
    this.say = saysomething
  }
  test () {
    EventBus.$emit('testText', {
      test: 'ceshicehis'
    })
  }
  add () {
    EventBus.$emit('add', {
      num1: 1,
      num2: 2
    })
  }
  subtractie () {
    EventBus.$emit('substractie', {
      num1: 2,
      num2: 2
    })
  }
  get isOkImg () {
    return this.$store.getters.isOk.image
  }
  get isOkforced () {
    return this.$store.getters.isOk.forced
  }
  get isOkAnswer () {
    return this.$store.getters.isOk.answer
  }
  beforeDestroy () {
    EventBus.$off('testText')
    EventBus.$off('add')
    EventBus.$off('substractie')
  }
}

</script>

<!-- Add 'scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
.isOk {
  width: 40px;
  height: 40px;
}
</style>
