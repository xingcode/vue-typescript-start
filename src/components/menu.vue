<template>
  <div>
    <Menu active-name="1-2"
    ref="menu"
      :open-names="['neirognguanli']">
      <Submenu :name="item.name"
        v-for="(item, index) in menu"
        :key="index">
        <template slot="title">
          <Icon type="ios-paper" />
        {{ item.label }}
        </template>
        <div v-if="item.children">
          <MenuItem :name="item1.name" v-for="(item1, index) in item.children" :key="index" :to="item1.name">
          {{ item1.children ? '': item1.label }}
          <div v-if="item1.children">
              <Submenu name="item1.name">
                <template slot="title">
                  <Icon type="ios-paper" />
                  {{item1.label}}
                </template>
                <MenuItem :name="item2.label" v-for="(item2, index) in item1.children" :key="index" :to="item2.label">{{ item2.label }}</MenuItem>
              </Submenu>
            </div>
            </MenuItem>
        </div>
      </Submenu>
    </Menu>
  </div>
</template>

<script lang="js">
export default {
  data () {
    return {
      menu: [
        {
          label: '内容管理',
          name: 'neirognguanli',
          children: [
            {
              label: '评论管理',
              name: 'pinglunguanli'
            },
            {
              label: '举报管理',
              name: 'jubaoguanli'
            },
            {
              label: '测试三级导航',
              name: 'sanjidaohang',
              children: [
                {
                  label: '1',
                  name: '1'
                },
                {
                  label: '2',
                  name: '2'
                }
              ]
            }
          ]
        },
        {
          label: '用户管理',
          name: 'yonghu'
        }
      ]
    }
  },
  mounted () {
    const that = this
    that.$nextTick(() => {
      that.$refs.menu.updateOpened()
    })
  },
  watch: {
    '$route': 'isChange'
  },
  methods: {
    isChange () {
      console.log(this.$route)
    }
  }
}
</script>
