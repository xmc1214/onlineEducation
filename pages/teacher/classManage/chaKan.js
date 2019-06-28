// pages/student/classManage/chaKan.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classList: [
      {
        id: 1,
        className: '大数据导论',
        planStartDate: '星期一 14:00',
        planEndDate: '16:35',

        personNum: 60,
        personChooseNum: 23,
        price: 180.00,

        loading: false,
      },
      {
        id: 2,
        className: '需求工程',
        planStartDate: '星期二 14:00',
        planEndDate: '15:40',
        personNum: 60,
        personChooseNum: 23,
        price: 200.00,

        loading: false
      },
      {
        id: 3,
        className: '软件测试',
        planStartDate: '星期三 8:00',
        planEndDate: '11:05',
        personNum: 60,
        personChooseNum: 23,
        price: 150.00,

        loading: false,
      },
      {
        id: 4,
        className: 'JAVA',
        planStartDate: '星期四 8:00',
        planEndDate: '11:05',
        personNum: 60,
        personChooseNum: 23,
        price: 230.00,
        loading: false,
      }
    ]
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

  },
  openClassHome:function(e){
    wx.navigateTo({
      url: '/pages/teacher/classManage/classDetail',
    })
  }
})