// pages/teacher/classManage/editWork.js
var that;
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["待批阅", "已批阅"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    homeworkList: [{
        studentName: '张三',
        workName: '实验报告一',
        submitTime: '2019/5/6 22:19',
        loading: false,
        score: "优",
        color: "blue"
      },
      {
        studentName: 'xmc',
        workName: '实验报告一',
        loading: false,
        submitTime: '2019/5/6 22:19',
        score: "优",
        color: "blue"
      },
      {
        studentName: '李四',
        workName: '实验报告一',
        loading: false,
        score: "良",
        submitTime: '2019/5/6 22:19',
        color: "green"
      },
      {
        studentName: '赵倩',
        workName: '实验报告一',
        loading: false,
        score: "差",
        submitTime: '2019/5/6 22:19',
        color: "red"
      }
    ],
    unhomeworkList: [{
      studentName: '111',
      workName: '实验报告一',
      submitTime: '2019/5/6 22:19',
      loading: false,
      score: "待批阅",
      color: "orange"
    },
      {
        studentName: '222',
        workName: '实验报告一',
        loading: false,
        submitTime: '2019/5/6 22:19',
        score: "待批阅",
        color: "orange"
      },
      {
        studentName: '333',
        workName: '实验报告一',
        loading: false,
        
        submitTime: '2019/5/6 22:19',
        score: "待批阅",
        color: "orange"
      },
      {
        studentName: '444',
        workName: '实验报告一',
        loading: false,
        submitTime: '2019/5/6 22:19',
        score: "待批阅",
        color: "orange"
      }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
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
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
})