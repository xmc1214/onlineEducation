// pages/login/login.js
const app = getApp();
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {username:'',password:'',role:''},
    role:"请选择权限",
    itemList: ['教师', '学生', '管理员'],
    username:'',
    password:''
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
that.setData({
  username:'',
  password:'',
  role:'请选择权限'
})
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
  getUserName:function(e){
    that.setData({
      ['userInfo.username']: e.detail.value
    })
  },
  getPassWord:function(e){
    that.setData({
      ['userInfo.password']:e.detail.value
    })
  },
  getRole:function(e){
    wx.showActionSheet({
      itemList: ['教师', '学生', '管理员'],
      success: function (res) {
        if (!res.cancel) {
         that.setData({
           role: that.data.itemList[res.tapIndex],
           ['userInfo.role']: that.data.itemList[res.tapIndex]
         })
        }
      }
    });
  },
  submit:function(e){
    // wx.request({
    //   url: 'http://localhost:8080/tmp/user/login?role=' + that.data.userInfo.role,
    //   data:{
    //     loginName:that.data.userInfo.username,
    //     loginpsd: that.data.userInfo.password
    //   },
    //   method: 'POST',
    //   success: function(res) {
    //     console.log(res)
    //   },
    //   fail: function(res) {

    //   },
    //   complete: function(res) {

    //   },
    // })
    if(that.data.userInfo.role == "管理员"){
      var tempList = wx.getStorageSync("adminList")
      var result = tempList.some(item => {
        if (item.username == that.data.userInfo.username) {
          return true
        }
      })
      if(result){
        var password = tempList.some(item => {
          if (item.password == that.data.userInfo.password) {
            return true
          }
        })
        if(password){
          wx.setStorageSync("userInfo", that.data.userInfo)
          wx.redirectTo({
            url: '/pages/admin/index',
          })
        }else{
          wx.showToast({
            title: '密码错误！',
            icon: 'none',
            duration: 1500
          })
        }
      }else{
        wx.showToast({
          title: '不存在该管理员账号',
          icon:'none',
          duration:1500
        })
      }
    }
    if (that.data.userInfo.role == "教师") {
      var tempList = wx.getStorageSync("teacherList")
      var result = tempList.some(item => {
        if (item.username == that.data.userInfo.username) {
          return true
        }
      })
      if (result) {
        var password = tempList.some(item => {
          if (item.password == that.data.userInfo.password) {
            return true
          }
        })
        if (password) {
          wx.setStorageSync("userInfo", that.data.userInfo)
          wx.redirectTo({
            url: '/pages/teacher/index',
          })
        } else {
          wx.showToast({
            title: '密码错误！',
            icon: 'none',
            duration: 1500
          })
        }
      } else {
        wx.showToast({
          title: '不存在该教师账号',
          icon: 'none',
          duration: 1500
        })
      }
    }
    if (that.data.userInfo.role == "学生") {
      var tempList = wx.getStorageSync("studentList")
      var result = tempList.some(item => {
        if (item.username == that.data.userInfo.username) {
          return true
        }
      })
      if (result) {
        var password = tempList.some(item => {
          if (item.password == that.data.userInfo.password) {
            return true
          }
        })
        if (password) {
          wx.setStorageSync("userInfo", that.data.userInfo)
          wx.redirectTo({
            url: '/pages/student/index',
          })
        } else {
          wx.showToast({
            title: '密码错误！',
            icon: 'none',
            duration: 1500
          })
        }
      } else {
        wx.showToast({
          title: '不存在该学生账号',
          icon: 'none',
          duration: 1500
        })
      }
    }
  }
})