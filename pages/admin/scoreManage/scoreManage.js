// pages/admin/scoreManage/scoreManage.js
// pages/admin/teacherManage/teacherManage.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 显示加载更多 loading
    hothidden: true,
    userInfo: {},
    // loading
    hidden: true,
    functionList: [{

      name: '成绩统计',
      url: '/pages/admin/scoreManage/scoreDetail'
    }, {

      name: '审核成绩',
        url: '/pages/admin/scoreManage/checkScore'
    }, {

      name: '成绩发布',
        url: '/pages/admin/scoreManage/launchScore'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    that = this
    that.setData({
      hidden: false
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    that.setData({
      hidden: true
    })
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