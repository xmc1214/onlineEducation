// pages/student/onlineClass/onlineClass.js
var that;
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["首页", "统计", "作业", "评价"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    homeworkList:[{
      workName:'实验报告一',
      startTime:'2019/5/6 10:43',
      endTime:'2019/5/12 11:59',
      loading:false,
      title:'待批阅',
      color:'grey'
    }, {
        workName: '实验报告二',
        startTime: '2019/5/6 10:43',
        endTime: '2019/5/12 11:59',
        loading: false,
        title: '做作业',
        color:'blue'
      }],
    files: [],
    hasInput: 'disabled',
    max: 200,
    currentNumber: 0,
    maximage: 2,
    message: '',
    titleList: [{
      oneNumber: '1.',
      oneTitle: '什么是大数据',
      sonList: [{
        icon: 'title',
        color: "blue",
        number: '1.1',
        message: '大数据概念'
      }]
    },
    {
      oneNumber: '2.',
      oneTitle: '大数据相关技术',
      sonList: [{
        icon: 'title',
        color: "blue",
        number: '2.1',
        message: 'Hadoop'
      }, {
        icon: 'title',
        color: "blue",
        number: '2.2',
        message: 'Zookeeper'
      }]
    },
    {
      oneNumber: '3.',
      oneTitle: '大数据所带来的变革',
      sonList: [{
        icon: 'title',
        color: "grey",
        number: '3.1',
        message: '思维变革'
      }]
    }, {
      oneNumber: '4.',
      oneTitle: '大数据与金融',
      sonList: [{
        icon: 'lock',
        color: "grey",
        number: '4.1',
        message: '大数据在金融领域的应用'
      }]
    }, {
      oneNumber: '5.',
      oneTitle: '大数据与市场营销',
      sonList: [{
        icon: 'lock',
        color: "grey",
        number: '5.1',
        message: '大数据在市场营销领域的应用'
      }]
    }, {
      oneNumber: '6.',
      oneTitle: '大数据与教育',
      sonList: [{
        icon: 'lock',
        color: "grey",
        number: '6.1',
        message: '大数据对教育的影响'
      }]
    }, {
      oneNumber: '7.',
      oneTitle: '大数据与智慧城市',
      sonList: [{
        icon: 'lock',
        color: "grey",
        number: '7.1',
        message: '大数据与智慧城市建设'
      }]
    }, {
      oneNumber: '8.',
      oneTitle: '大数据与安全',
      sonList: [{
        icon: 'lock',
        color: "grey",
        number: '8.1',
        message: '大数据安全'
      }]
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
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },
  check: function (e) {
    var inputValue = e.detail.value;
    var len = parseInt(inputValue.length);
    if (len > this.data.max) return;
    this.setData({
      currentNumber: len
    })
    if (inputValue != '') {
      this.setData({
        hasInput: ''
      })
    } else {
      this.setData({
        hasInput: 'disabled'
      })
    }
  },
  chooseImage: function (e) {
    var that = this;
    if (that.data.files.length >= that.data.maximage) return;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths)
        });
      }
    })
  },
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },
  submit: function () {
    var that = this
    that.setData({
      message: ''
    })
    wx.showToast({
      title: '评价成功',
      icon: 'success',
      duration: 3000
    });
  },
  openSon: function (e) {
    var icon = e.currentTarget.dataset.icon
    var message = e.currentTarget.dataset.message
    var index = e.currentTarget.dataset.index
    var idx = e.currentTarget.dataset.idx
    if (icon == "lock") {
      wx.showToast({
        title: '该章节暂未解锁',
        icon: 'none',
        duration: 1000
      })
    } else {
      wx.navigateTo({
        url: '/pages/student/classManage/classMessage?message=' + message,
      })
    }
  }
})