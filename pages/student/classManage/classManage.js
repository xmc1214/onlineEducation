// pages/student/classManage/classManage.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    moduleList:[{
      color:'blue',
      module:'已选课程',
      url:'/pages/student/classManage/selectedClass'
    },
      {
        color:'orange',
        module: '查看课表',
        url: '/pages/student/classManage/chaKan'
    },
      {
        color:'green',
        module: '调课',
        url: '/pages/student/classManage/changeClass'
      },
      {
        color:'red',
        module: '退课记录',
        url: '/pages/student/classManage/deleteClass'
      },]
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
  openModule:function(e){
    var item = e.currentTarget.dataset.item
    wx.navigateTo({
      url:item.url,
    })
  }
})