// pages/student/askLeave/leaveList.js
var that;
Page({

  /**
   * 页面的初始数据
   */
  data: {
leaveList:[{
  reason:'比赛时间与上课时间冲突',
  type:'学生',
  leaveTime:'2019/5/6~2019/5/9',
  loading:false,
  title:'待处理',
  color:'blue'
},
  {
    reason: '生病请假',
    type: '学生',
    leaveTime: '2019/4/6~2019/4/10',
    loading: false,
    title: '申请通过',
    color:'green'
  },
  {
    reason: '有事',
    type: '学生',
    leaveTime: '2019/5/6~2019/5/10',
    loading: false,
    title: '申请失败',
    color: 'red',
    failReason:'失败原因：请假原因不明确'
  }]
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

  }
})