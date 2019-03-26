<template>
  <div class="scroll-list"
    :style="nopadding ? 'padding: 20px 15px;width: 100%;height:100%;' : 'width: calc(100% - 40px);height: calc(100% - 40px);'">
    <ul class="list-wrapper"
      style="height: 45px; font-weight:bold;">
      <li class="header-wrapper">
        <div class="header-tab"
          v-for="(ele, index) in header"
          :style="`flex:${ele.flex};`"
          :key="index">{{ele.des}}</div>
      </li>
    </ul>
    <ul class="list-wrapper"
      :id="formId"
      @mousemove="stopScroll"
      @mouseout="doScroll">
      <li class="list-item"
        v-for="(item, index) in source"
        :key="index"
        @click="recordClick(item)">
        <div :title="des"
          class="header-tab list-row"
          v-for="(des, cIndex) in item.textArr"
          :key="cIndex"
          :style="`flex:${header[cIndex].flex};background:${index % 2 > 0 ? '#161a2b' : '#1e1e30'};color:${index % 2 > 0 ? '#fff' : '#333'}`">
          <span v-if="item.textArr.length-1 != cIndex">{{formatValue(cIndex,des)}}</span>
          <div v-else
            class="ratePercent">
            <div class="rateNumber">{{formatValue(cIndex,des)}}%</div>
            <Progress :percent="des"
              :stroke-width="8"
              v-if="item.textArr.length-1 === cIndex"
              hide-info />
          </div>
        </div>
      </li>
      <li style="display:flex">
        <div class="header-tab list-row"
          v-for="(des, cIndex) in source[0].textArr"
          :key="cIndex" style="flex: 1">
          <span>{{formatValue(cIndex,des)}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'scroll-list',
  props: {
    formId: {
      type: String,
      default: 'list-body'
    },
    colorDic: {
      type: Object,
      default: () => {
        return {
          '1': '#a3152e',
          '2': '#ff5bf5',
          '3': '#ffdd60'
        }
      }
    },
    header: {
      type: Array,
      default: () => {
        return [
          { des: '排名', flex: 4, color: '#000' },
          { des: '区域', flex: 6, color: '#000' },
          { des: '实学人数', flex: 6, color: '#000' },
          { des: '应学人数', flex: 6, color: '#000' },
          { des: '参学率', flex: 10, color: '#000' }
        ]
      }
    },
    source: {
      type: Array,
      default: () => [
        {
          textArr: [
            '新增:区地税局领导慰问社区低保户',
            '文峰街道第一网格朝晖小区8幢第一单元',
            '大联动公众版'
          ],
          level: 1,
          msg: [
            { des: '邻里', content: '文本标签' },
            { des: '议事地点', content: '学田区第一网格' },
            { des: '议事时间', content: '2017-08-08 14:25' },
            { des: '录入时间', content: '2017-08-08 14:25' },
            { des: '议事类型', content: '矛盾纠纷排解' },
            {
              des: '具体事项',
              content:
                '矛盾纠纷排解矛盾纠纷排解排解矛盾纠纷排解矛盾纠纷排解矛盾纠纷排解矛盾纠纷排解矛盾纠纷排解矛盾纠纷排解矛盾纠纷排解矛盾纠纷排解矛盾纠纷排解矛盾纠纷排解'
            },
            { des: '与会人员', content: '老王、齐雪松、高晓松' }
          ]
        }
      ]
    },
    nopadding: {
      type: Boolean,
      default: false
    },
    formatValue: {
      type: Function,
      default: (index, value) => {
        return value
      }
    }
  },
  data () {
    return {
      allowScroll: true,
      hasScroll: false
    }
  },
  methods: {
    recordClick (item) {
      this.$emit('click', item)
    },
    stopScroll () {
      this.allowScroll = false
    },
    doScroll () {
      this.allowScroll = true
    },
    autoScroll (startTimeTemp, listWrapper, flag = true) {
      let maxHeight = listWrapper.scrollHeight
      let currentTimeTemp = new Date().getTime()
      if (currentTimeTemp - startTimeTemp > 50 && flag) {
        if (listWrapper.scrollTop + listWrapper.offsetHeight < maxHeight - 1) {
          listWrapper.scrollTop += 1
        } else {
          listWrapper.scrollTop = 0
        }
        startTimeTemp = new Date().getTime()
      }
      requestAnimationFrame(() =>
        this.autoScroll(startTimeTemp, listWrapper, this.allowScroll)
      )
    }
  },
  mounted () {
    let startTimeTemp = new Date().getTime()
    const listWrapper = document.getElementById(this.formId)
    setTimeout(
      () =>
        requestAnimationFrame(() =>
          this.autoScroll(startTimeTemp, listWrapper, this.allowScroll)
        ),
      500
    )
  }
}
</script>
<style scoped>
.scroll-list {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow: hidden;
  height: 330px !important;
  background: #333;
}
.list-wrapper {
  height: 100%;
  overflow: hidden;
}
.header-wrapper {
  display: flex;
  width: 100%;
  background: #72a3fe;
}
.header-tab {
  margin-left: 5px;
  /* color: #9da6d1; */
  color: #fff;
  line-height: 36px;
  font-size: 12px;
  text-align: center;
  text-indent: 10px;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.header-tab:last-child {
  text-align: left;
  display: flex;
  justify-content: flex-start;
}
.list-item {
  display: flex;
  height: 36px;
  line-height: 36px;
}
.list-item:hover {
  cursor: pointer;
}
.list-row {
  font-size: 14px;
  background: transparent;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
/* .list-item:nth-child(2n + 1) {
  background-color: rgb(30, 30, 48) !important;

  color: #3687f5 !important;
}
.list-item:nth-child(2n + 1) div {
  color: #fff !important;
} */
.list-item .header-tab {
  width: 100%;
  background-color: transparent !important;
}
.list-item:nth-child(2n) {
  background-color: #7794bb !important;
  color: #fff !important;
}
.list-item div {
  /* color: #3687f5 !important; */
  font-size: 12px;
  color: #fff !important;
}
.list-item >>> .ivu-progress {
  display: flex;
  width: 50%;
  margin-right: 30px;
  align-items: center;
}
.list-item >>> .ivu-progress-inner {
  display: block;
}
.list-item >>> .ivu-progress-bg {
  background-color: #3bb564;
}
.ratePercent {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.list-item .ratePercent .rateNumber {
  min-width: 45px;
}
</style>