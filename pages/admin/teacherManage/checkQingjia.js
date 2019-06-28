// pages/admin/teacherManage/checkQingjia.js

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
      teacherName: '张三',
      reason: '临时有事',
      submitTime: '2019/5/6 22:19',
      changeClassTime: '2019/5/15',
      loading: false,
      score: "审核",
      color: "blue"
    },
    {
      teacherName: '李四',
      reason: '公事出差',
      submitTime: '2019/5/6 22:19',
      changeClassTime: '2019/5/15',
      loading: false,
      score: "审核",
      color: "blue"
    },
    ],
    unhomeworkList: [{
      teacherName: '赵倩',
      reason: '公事出差',
      submitTime: '2019/5/6 22:19',
      changeClassTime: '2019/5/15',
      loading: false,
      score: "审核通过",
      color: "green"
    },
    {
      teacherName: '666',
      reason: '公事出差',
      submitTime: '2019/5/6 22:19',
      changeClassTime: '2019/5/15',
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