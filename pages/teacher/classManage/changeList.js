// pages/student/askLeave/leaveList.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leaveList: [{
      reason: '公事出差',
      type: '数据结构',
      changename: '张三',
      beforeTime: '星期一 14:00-16:35',
      afterTime: '星期二 14:00-16:35',
      loading: false,
      title: '待处理',
      color: 'blue'
    },
    {
      reason: '生病请假',
      type: '软件测试',
      changename: '张三',
      beforeTime: '星期一 14:00-16:35',
      afterTime: '星期二 14:00-16:35',
      loading: false,
      title: '申请通过',
      color: 'green'
    },
    {
      reason: '临时有事',
      type: '需求工程',
      changename: '张三',
      beforeTime: '星期一 14:00-16:35',
      afterTime: '星期二 14:00-16:35',
      loading: false,
      title: '申请失败',
      color: 'red',
      failReason: '失败原因：调课原因不明确'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
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

  }
})