// pages/admin/studentManage/deleteClass.js
var that;
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["待审核", "已审核"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    homeworkList: [{
      studentName: '张三',
      className: '数据结构',
      eveTime: '星期一 8:00~11:05',
      planStartDate: '2019/03/29',
      planEndDate: '2021/02/25',
      personNum: 60,
      personChooseNum: 60,
      loading: false,
      score: "审核",
      color: "blue"
    },
    {
      studentName: '李四',
      className: '大数据导论',
      eveTime: '星期一 14:00~16:35',
      planStartDate: '2019/03/29',
      planEndDate: '2021/02/25',
      personNum: 60,
      personChooseNum: 23,
      loading: false,
      score: "审核",
      color: "blue"
    },
    ],
    unhomeworkList: [{
      studentName: '赵倩',
      className: '需求工程',
      eveTime: '星期一 14:00~16:35',
      planStartDate: '2019/03/29',
      planEndDate: '2021/02/25',
      personNum: 60,
      personChooseNum: 23,
      loading: false,
      score: "审核通过",
      color: "green"
    },
    {
      studentName: '666',
      className: '软件测试',
      eveTime: '星期三 8:00~11:05',
      planStartDate: '2019/03/29',
      planEndDate: '2021/02/25',
      personNum: 60,
      personChooseNum: 23,
      loading: false,
      score: "审核失败",
      color: "red"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
})