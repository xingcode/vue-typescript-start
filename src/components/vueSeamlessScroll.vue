<template>
  <div class="wrapper">
    <vue-seamless-scroll :data="listData"
      class="seamless-warp"
      :class-option="optionCustomer">
      <ul class="item">
        <li v-for="(item, index) in listData"
          :key="index">
          <span class="title">
            {{item.title}}
          </span>
          <span class="date">
            {{item.date}}
          </span>
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>
<style scoped>
.seamless-warp {
  width: 400px;
  height: 242px;
  overflow: hidden;
  border: 1px solid #ddd;
}
.seamless-warp > div  > div{
  background: #333;
}
.seamless-warp .item li {
  height: 30px;
  line-height: 30px;
}
.seamless-warp .item .title {
  margin-right: 20px;
}
</style>
<script>
export default {
  data () {
    return {
      listData: [
        {
          'title': '1',
          'date': '2017-12-16'
        }, {
          'title': '2',
          'date': '2017-12-16'
        }, {
          'title': '3',
          'date': '2017-12-16'
        }, {
          'title': '4',
          'date': '2017-12-16'
        }, {
          'title': '5',
          'date': '2017-12-16'
        }, {
          'title': '6',
          'date': '2017-12-16'
        }, {
          'title': '7',
          'date': '2017-12-16'
        }, {
          'title': '8',
          'date': '2017-12-16'
        }, {
          'title': '9',
          'date': '2017-12-16'
        }
      ],
      optionCustomer: {
        step: 1,
        autoPlay: true,
        limitMoveNum: 8,
        openTouch: false,
        hoverStop: true,
        waitTime: 1,
        direction: 1,
        singleWidth: 30
      }
    }
  }
}
</script>
