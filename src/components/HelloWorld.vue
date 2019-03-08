<template>
  <div class="hello">
      <!-- <h1>{{ msg }}</h1>
  <child-world :age=age
    @say=Say></child-world>
  <hr>
  {{say}}
  <Table border
    ref="selection"
    :columns="columns4"
    :data="data1"></Table> -->
  <p>{{isOK.answer}}</p>
  <p>{{isOK.force}}</p>
  <img :src="isOK.image" alt="">
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
  msg = 'Welcome to Your Vue.js App';
  say = '';
  age = 12;
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
  get isOk () {
    return this.$store.getters.isOk
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
</style>
