// pages/admin/index.js
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
    functionList:[{
      icon:'friend',
      name:'教师管理',
      url:'/pages/admin/teacherManage/teacherManage'
    },{
      icon:'calendar',
      name:'班级管理',
        url:'/pages/admin/classroomManage/classroomManage'
    },{
        icon: 'rank',
      name:'成绩管理',
        url:'/pages/admin/scoreManage/scoreManage'
    },{
        icon: 'qrcode',
      name:'课程管理',
      url:'/pages/admin/classManage/classManage'
    },{
        icon: 'profile',
      name:'学生管理',
        url:'/pages/admin/studentManage/studentManage'
    },{
        icon: 'my',
      name:'角色管理',
        url:'/pages/admin/roleManage/roleManage'
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

  },
  exit: function (e) {
    wx.setStorageSync("userInfo",'')
    wx.redirectTo({
      url: '/pages/login/login',
    })
  }
})