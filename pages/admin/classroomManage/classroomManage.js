// pages/admin/classroomManage/classroomManage.js

var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputShowed: false,
    inputVal: "",
    classItem:{},
    classList: [{
        className: '数据结构',
        eveTime: '星期一 8:00~11:05',
        personNum: 60,
        teacherName: '张三',
        loading: false,
        title: '解散班级',
      },
      {
       
        className: '大数据导论',
        eveTime: '星期一 14:00~16:35',
      
        teacherName: '张三',
        personNum: 60,
       

        loading: false,
        title: '解散班级',
      },
      {
       
        className: '需求工程',
        eveTime: '星期二 14:00~15:40',
       
        teacherName: '张三',
        personNum: 60,
       

        loading: false,
        title: '解散班级',
      },
      {
      
        className: '软件测试',
        eveTime: '星期三 8:00~11:05',
       
        personNum: 60,
       
        teacherName: '张三',
        loading: false,
        title: '解散班级',
      },
      {
       
        className: 'JAVA',
        eveTime: '星期四 8:00~11:05',
      
        personNum: 60,
      
        loading: false,
        title: '解散班级',
        teacherName: '张三',
      }
    ],
    isShow: '',
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
  deleteClass: function(e) {
    var tempItem = e.currentTarget.dataset.item
    var idx = e.currentTarget.dataset.index
    wx.showModal({
      title: tempItem.className,
      content: '确定解散班级吗',
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
          }, 1500)
        } else {}
      }
    });
  },
  showInput: function() {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function() {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function() {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function(e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  addClassroom:function(e){
    that.setData({
      isShow: 'show'
    })
  },
  hideModal: function (e) {
    that.setData({
      isShow: ''
    })
  },
  getClassName:function(e){
   that.setData({
     ['classItem.className']: e.detail.value
   })
  },
  getTeacherName:function(e){
    that.setData({
      ['classItem.teacherName']: e.detail.value
    })
  },
  getTime:function(e){
    that.setData({
      ['classItem.eveTime']: e.detail.value
    })
  },
  getMaxNumber:function(e){
    that.setData({
      ['classItem.personNum']: e.detail.value
    })
  },
  hideModalAndAddClassroom:function(e){
    if (Object.keys(that.data.classItem).length == 0) {
      wx.showToast({
        title: '内容为空',
        icon: 'none',
        duration: 1500
      })
    } else {
      that.setData({
        isShow: '',
        ['classItem.loading']: false,
        ['classItem.title']: "解散班级"
      })
      var tempList = that.data.classList
      tempList.push(that.data.classItem)
      that.setData({
        classList: tempList,
        classItem: {}
      })
    }
  }
})