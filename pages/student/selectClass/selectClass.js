// pages/student/selectClass/selectClass.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    classList: [{
        id: 0,
        className: '数据结构',
      eveTime:'星期一 8:00~11:05',
      planStartDate: '2019/03/29',
        planEndDate: '2021/02/25',
        personNum: 60,
        personChooseNum: 60,
        price:180.00,
       
        loading: false,
        title: '点击加入',
      },
      {
        id: 1,
        className: '大数据导论',
        eveTime: '星期一 14:00~16:35',
        planStartDate: '2019/03/29',
        planEndDate: '2021/02/25',
       
        personNum: 60,
        personChooseNum: 23,
        price: 180.00,
       
        loading: false,
        title: '点击加入',
      },
      {
        id: 2,
        className: '需求工程',
        eveTime: '星期二 14:00~15:40',
        planStartDate: '2019/03/29',
        planEndDate: '2021/02/25',

        personNum: 60,
        personChooseNum: 23,
        price: 200.00,
      
        loading: false,
        title: '点击加入',
      },
      {
        id: 3,
        className: '软件测试',
        eveTime: '星期三 8:00~11:05',
        planStartDate: '2019/03/29',
        planEndDate: '2021/02/25',
        personNum: 60,
        personChooseNum: 23,
        price: 150.00,
       
        loading: false,
        title: '点击加入',
      },
      {
        id: 4,
        className: 'JAVA',
        eveTime: '星期四 8:00~11:05',
        planStartDate: '2019/03/29',
        planEndDate: '2021/02/25',
        personNum: 60,
        personChooseNum: 23,
        price: 230.00,
        loading: false,
        title: '点击加入',
      }
    ]
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
  joinClass: function(e) {
    var tempItem = e.currentTarget.dataset.item
    if (tempItem.personNum <= tempItem.personChooseNum) {
      wx.showToast({
        title: '当前班级人数已达到最大容量',
        icon: 'none',
        duration: 1500
      })
    } else {
      wx.showModal({
        title: tempItem.className,
        content: '确定加入该课程吗',
        confirmText: "确定",
        cancelText: "取消",
        success: function(res) {
          if (res.confirm) {
            let id = tempItem.id;
            let loading = 'classList[' + id + '].loading';
            let title = 'classList[' + id + '].title'
            that.setData({
              [loading]: true,
              [title]: "等待处理"
            })
          } else {}
        }
      });
    }
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  }
})