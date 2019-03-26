<template>
  <div class="childWorld">
    <h1>{{msg}}</h1>
    <p ref="age">年龄{{age}}</p>
    <p>姓名: {{name}}</p>
    <button @click="tell">emit</button>
    <input type="text"
      v-model="textInput">
    <button @click="setName">设置名字</button>
    <button @click="getName">获取名字</button>
    <Cascader :data="addressDdata" v-model="currentAddress" @on-change = 'update()' class="address-select" @input='testInfot'></Cascader>
    <list-scroll :source="listData" style="width: 400px;"></list-scroll>
  </div>
</template>

<script lang='ts'>
import {
  Component,
  Vue,
  Prop,
  Emit,
  Watch,
  Provide
} from 'vue-property-decorator'
import { EventBus } from './event-bus.js'
import listScroll from './listScroll.vue'
@Component({
  components: {
    listScroll
  }
})
export default class ChildWorld extends Vue {
  msg = 'childWorld';
  textInput = '';
  currentAddress = []
  addressDdata = [
    {
      value: 'beijing',
      label: '北京',
      children: [
        {
          value: 'gugong',
          label: '故宫',
          children: [
            {
              value: 'ceshi1',
              label: '测试1',
              children: [
                {
                  value: 'ceshi2',
                  label: '测试2',
                  children: [
                    {
                      value: 'ceshi3',
                      label: '测试3'
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          value: 'tiantan',
          label: '天坛'
        },
        {
          value: 'wangfujing',
          label: '王府井'
        }
      ]
    },
    {
      value: 'jiangsu',
      label: '江苏',
      children: [
        {
          value: 'nanjing',
          label: '南京',
          children: [
            {
              value: 'fuzimiao',
              label: '夫子庙'
            }
          ]
        },
        {
          value: 'suzhou',
          label: '苏州',
          children: [
            {
              value: 'zhuozhengyuan',
              label: '拙政园'
            },
            {
              value: 'shizilin',
              label: '狮子林'
            }
          ]
        }
      ]
    }
  ];
  listData = [
    {
      textArr: [
        '1',
        '某个地方',
        '10',
        '100',
        '10'
      ]
    },
    {
      textArr: [
        '2',
        '某个地方',
        '10',
        '100',
        '10'
      ]
    },
    {
      textArr: [
        '3',
        '某个地方',
        '10',
        '100',
        '10'
      ]
    },
    {
      textArr: [
        '4',
        '某个地方',
        '10',
        '100',
        '10'
      ]
    },
    {
      textArr: [
        '5',
        '某个地方',
        '10',
        '100',
        '10'
      ]
    },
    {
      textArr: [
        '6',
        '某个地方',
        '10',
        '100',
        '10'
      ]
    },
    {
      textArr: [
        '7',
        '某个地方',
        '10',
        '100',
        '10'
      ]
    },
    {
      textArr: [
        '8',
        '某个地方',
        '10',
        '100',
        '10'
      ]
    },
    {
      textArr: [
        '8',
        '某个地方',
        '10',
        '100',
        '10'
      ]
    }
  ]
  @Provide() msg1 = 'private variable';
  tell () {
    return this.msg + 1
  }
  @Prop({ type: Number, default: 0 })
  age;
  @Prop({ type: String, default: 'xxb' })
  name;
  @Emit('say')
  @Watch('msg')
  msgChange (val, oldVal) {
    alert('msg is changed')
  }
  @Watch('currentAddress')
  getCurrent (val, oldVal) {
    console.log(val, oldVal)
  }
  setName () {
    this.$store.commit('SET_NAME', this.textInput)
  }
  getName () {
    alert(this.$store.getters.name)
  }
  update () {
    console.log(1)
  }
  testInfot () {
    alert('handleInput')
  }
  mounted () {
    console.log(this.$store.getters.age)
    EventBus.$on('substractie', ({num1, num2}) => {
      console.log(num1 - num2)
    })
    EventBus.$on('testText', ({test}) => {
      console.log(test)
    })
    EventBus.$on('add', ({num1, num2}) => {
      console.log(num1 + num2)
    })
  }
  get IsOk () {
    return this.$store.getters.isOk
  }
}
</script>

<style lang="scss" scope type="text/css">
  .address-select{
    width: 400px;
    margin: 0 auto;
  }
</style>
