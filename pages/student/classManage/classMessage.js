// pages/student/classManage/classMessage.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
    color: 'grey',
    score: 0.0,
    anwserList: [],
    status:'提交',
    statusColor:'red',
    workList: [{
        problem: '1.大数据的第四特性是什么？',
        anwser: [{
            message: '大量',
            isCheck: "",
            bgColor: 'white'
          },
          {
            message: '多样',
            isCheck: "",
            bgColor: 'white'
          },
          {
            message: '高速',
            isCheck: "",
            bgColor: 'white'
          },
          {
            message: '价值',
            isCheck: "",
            bgColor: 'white'
          }
        ],
        truely: 3
      },
      {
        problem: '2.大数据的第四特性是什么？',

        anwser: [{
            message: '大量',
            isCheck: "",
            bgColor: 'white'
          },
          {
            message: '多样',
            isCheck: "",
            bgColor: 'white'
          },
          {
            message: '高速',
            isCheck: "",
            bgColor: 'white'
          },
          {
            message: '价值',
            isCheck: "",
            bgColor: 'white'
          }
        ],
        truely: 3
      },
      {
        problem: '3.大数据的第四特性是什么？',

        anwser: [{
            message: '大量',
            isCheck: "",
            bgColor: 'white'
          },
          {
            message: '多样',
            isCheck: "",
            bgColor: 'white'
          },
          {
            message: '高速',
            isCheck: "",
            bgColor: 'white'
          },
          {
            message: '价值',
            isCheck: "",
            bgColor: 'white'
          }
        ],
        truely: 3
      }, {
        problem: '4.大数据的第四特性是什么？',
        anwser: [{
            message: '大量',
            isCheck: "",
            bgColor: 'white'
          },
          {
            message: '多样',
            isCheck: "",
            bgColor: 'white'
          },
          {
            message: '高速',
            isCheck: "",
            bgColor: 'white'
          },
          {
            message: '价值',
            isCheck: "",
            bgColor: 'white'
          }
        ],
        truely: 3
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    that = this
    that.setData({
      title: options.message
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */

  onReady: function(res) {
    this.videoContext = wx.createVideoContext('myVideo')
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
  videoErrorCallback: function(e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },
  fullscreenchange: function(e) {
    console.log(e.detail.value)
  },
  radioChange: function(e) {
    var truely = e.currentTarget.dataset.truely
    var idx = e.currentTarget.dataset.idx
    var index = e.currentTarget.dataset.index
    if (truely != idx) {
      let temp = that.data.anwserList
      temp.push({
        tf: false,
        idx: idx,
        truely: truely,
        index: index
      })
      that.setData({
        anwserList: temp
      })
    } else {
      let temp = that.data.anwserList
      temp.push({
        tf: true,
        idx: idx,
        truely: truely,
        index: index
      })
      that.setData({
        anwserList: temp
      })
    }
  },
  submit: function(e) {
    wx.showToast({
      title: '批阅中',
      icon: 'loading',
      duration: 2000
    })
    setTimeout(function() {
      for (var i = 0; i < that.data.anwserList.length; i++) {
        if (that.data.anwserList[i].tf != true) {
          var index = that.data.anwserList[i].index
          var idx = that.data.anwserList[i].idx
          var truely = that.data.anwserList[i].truely
          var falseitem = "workList[" + index + "].anwser[" + idx + "].bgColor"
          var trueitem = "workList[" + index + "].anwser[" + truely + "].bgColor"
          var falsecheck = "workList[" + index + "].anwser[" + idx + "].isCheck"
          var truecheck = "workList[" + index + "].anwser[" + truely + "].isCheck"

          that.setData({
            [falseitem]: "red",
            [trueitem]: "blue",
            [falsecheck]:"",
            [truecheck]:"true",
          })
        } else {
          that.setData({
            score: that.data.score + 25
          })
        }
      }
      that.setData({
        color: "red",
        status:'已完成',
        statusColor:'gray'
      })
    }, 2000)
  }
})