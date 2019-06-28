// pages/student/classManage/selectedClass.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classList: [{
        id: 1,
        className: '大数据导论',
        planStartDate: '星期一 14:00',
        planEndDate: '16:35',

        personNum: 60,
        personChooseNum: 23,
        price: 180.00,

        loading: false,
        title: '退课',
      },
      {
        id: 2,
        className: '需求工程',
        planStartDate: '星期二 14:00',
        planEndDate: '15:40',
        personNum: 60,
        personChooseNum: 23,
        price: 200.00,

        loading: false,
        title: '退课',
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
        title: '退课',
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
        title: '退课',
      }
    ],
    totalPrice: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this
    var temp = 0;
    for (var i = 0; i < that.data.classList.length; i++) {
      temp += that.data.classList[i].price;
    }
    that.setData({
      totalPrice: temp
    })
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
  payForClass: function(e) {
    wx.redirectTo({
      url: 'msg_success'
    })
  },
  deleteClass: function(e) {
    var idx = e.currentTarget.dataset.index

    wx.showModal({
      title: that.data.classList[idx].className,
      content: '确定退选该课程吗',
      confirmText: "确定",
      cancelText: "取消",
      success: function(res) {
        if (res.confirm) {
          let loading = 'classList[' + idx + '].loading';
          let title = 'classList[' + idx + '].title'
          that.setData({
            [loading]: true,
            [title]: "等待处理"
          })
          setTimeout(function() {
            let list = that.data.classList
            let filterRes = list.filter((ele, index) => {

              return index != idx

            })
            that.setData({
              classList: filterRes
            })
            var temp = 0;
            for (var i = 0; i < that.data.classList.length; i++) {
              temp += that.data.classList[i].price;
            }
            that.setData({
              totalPrice: temp
            })
          }, 1500)
        } else {}
      }
    });
  }
})