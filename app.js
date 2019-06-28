//app.js
App({
  onLaunch: function () {
    wx.setStorageSync("studentList", [])
    wx.setStorageSync("teacherList", [])
    wx.setStorageSync("adminList", [{username:'admin',password:'123456'}])
    if (wx.getStorageSync("userInfo") == ''){
      wx.showToast({
        title: '正在前往登录界面',
        icon: 'loading',
        duration: 1000
      })
      setTimeout(function () {
        wx.redirectTo({
          url: '/pages/login/login',
        })
      }, 1200)
    }else{
      this.globalData.userInfo = wx.getStorageSync("userInfo")
      if (this.globalData.userInfo.role == "管理员") {
        wx.redirectTo({
          url: '/pages/admin/index',
        })
      }
      if (this.globalData.userInfo.role == "教师") {
        wx.redirectTo({
          url: '/pages/teacher/index',
        })
      }
      if (this.globalData.userInfo.role == "学生") {
        wx.redirectTo({
          url: '/pages/student/index',
        })
      }
    }
  },
  globalData: {
    userInfo: {},
    ColorList: [{
      title: '嫣红',
      name: 'red',
      color: '#e54d42'
    },
    {
      title: '桔橙',
      name: 'orange',
      color: '#f37b1d'
    },
    {
      title: '明黄',
      name: 'yellow',
      color: '#fbbd08'
    },
    {
      title: '橄榄',
      name: 'olive',
      color: '#8dc63f'
    },
    {
      title: '森绿',
      name: 'green',
      color: '#39b54a'
    },
    {
      title: '天青',
      name: 'cyan',
      color: '#1cbbb4'
    },
    {
      title: '海蓝',
      name: 'blue',
      color: '#0081ff'
    },
    {
      title: '姹紫',
      name: 'purple',
      color: '#6739b6'
    },
    {
      title: '木槿',
      name: 'mauve',
      color: '#9c26b0'
    },
    {
      title: '桃粉',
      name: 'pink',
      color: '#e03997'
    },
    {
      title: '棕褐',
      name: 'brown',
      color: '#a5673f'
    },
    {
      title: '玄灰',
      name: 'grey',
      color: '#8799a3'
    },
    {
      title: '草灰',
      name: 'gray',
      color: '#aaaaaa'
    },
    {
      title: '墨黑',
      name: 'black',
      color: '#333333'
    },
    {
      title: '雅白',
      name: 'white',
      color: '#ffffff'
    },
    ]
  }
})