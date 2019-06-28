// pages/register/register.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    role: '请选择权限',
    sex: '请选择性别',
    roleList: ['教师', '学生'],
    sexList: ['男', '女']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  getUserName: function(e) {
    that.setData({
      ['userInfo.username']: e.detail.value
    })
  },
  getPassWord: function(e) {
    that.setData({
      ['userInfo.password']: e.detail.value
    })
  },
  getPhoneNumber: function(e) {
    that.setData({
      ['userInfo.phonenumber']: e.detail.value
    })
  },
  getRole: function(e) {
    wx.showActionSheet({
      itemList: ['教师', '学生'],
      success: function(res) {
        if (!res.cancel) {
          that.setData({
            role: that.data.roleList[res.tapIndex],
            ['userInfo.role']: that.data.roleList[res.tapIndex]
          })
        }
      }
    });
  },
  getSex: function(e) {
    wx.showActionSheet({
      itemList: ['男', '女'],
      success: function(res) {
        if (!res.cancel) {
          that.setData({
            sex: that.data.sexList[res.tapIndex],
            ['userInfo.sex']: that.data.sexList[res.tapIndex],
          })
        }
      }
    });
  },
  register: function(e) {
    // wx.request({
    //   url: 'http://localhost:8080/user/reister?role=' + that.data.userInfo.role,
    //   data:{
    //     loginName:that.data.userInfo.username,
    //     loginpsd: that.data.userInfo.password,
    //     phone: that.data.userInfo.phonenumber,
    //     sex: that.data.userInfo.sex
    //   },
    //   method: 'POST',
    //   success: function(res) {

    //   },
    //   fail: function(res) {

    //   },
    //   complete: function(res) {
    //     wx.navigateBack({

    //     })
    //   },
    // })
    if (that.data.userInfo.role == "学生") {
      var tempList = wx.getStorageSync("studentList")
      var result = tempList.some(item => {
        if (item.username == that.data.userInfo.username) {
          return true
        }
      })
      if (result) {
        wx.showToast({
          title: '该账号已存在',
          icon: 'none',
          duration: 1500
        })
      } else {
        tempList.push(that.data.userInfo)
        wx.setStorageSync("studentList", tempList)
        wx.navigateBack({

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
        wx.showToast({
          title: '该账号已存在',
          icon: 'none',
          duration: 1500
        })
      } else {
        tempList.push(that.data.userInfo)
        wx.setStorageSync("teacherList", tempList)
        wx.navigateBack({

        })
      }
    }
  }
})