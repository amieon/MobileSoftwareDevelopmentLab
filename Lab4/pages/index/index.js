Page({

  /**
   * 页面的初始数据
   */
  data:{
    danmuTxt:'',
    list:[
    {
    id:'299371',
    title:'杨国宜先生口述校史实录',
    videoUrl:'http://arch.ahnu.edu.cn/__local/E/31/EB/2F368A265E6C842BB6A63EE5F97_425ABEDD_7167F22.mp4?e=.mp4'
        },
    {
      id:'299396',
      title:'唐成伦先生口述校史实录',
      videoUrl:'http://arch.ahnu.edu.cn/__local/E/31/EB/2F368A265E6C842BB6A63EE5F97_425ABEDD_7167F22.mp4?e=.mp4'
    },
    {
    id:'299378',
    title:'倪光明先生口述校史实录',
    videoUrl:'http://arch.ahnu.edu.cn/__local/9/DC/3B/35687573BA2145023FDAEBAFE67_AAD8D222_925F3FF.mp4?e=.mp4'
    },{
    id:'299392',
    title:'吴兴仪先生口述校史实录',
    videoUrl:'http://arch.ahnu.edu.cn/__local/9/DC/3B/35687573BA2145023FDAEBAFE67_AAD8D222_925F3FF.mp4?e=.mp4'
    }
    ],
  },
  /**
   * 生命周期函数--监听页面加载
   */
  getDanmu : function(e){
    this.setData({
      danmuTxt: e.detail.value
    })
  },
  sendDanmu() {
    let text = this.data.danmuTxt;
    if (!text) return;
    this.videoCtx.sendDanmu({
      text: text,
      color: this.getRandomColor(),
    });
    this.setData({ danmuTxt: '' });
  },
  getRandomColor: function() {
    let rbg = []
    for(let i=0;i<3;++i){
      let color = Math.floor(Math.random()*256).toString(16)
      color = color.length == 1 ? '0' + color : color
      rbg.push(color)
    }
    return '#' + rbg.join('')
  },
  playVideo: function(e){
    this.setData({
      src:e.currentTarget.dataset.url
    })
    this.videoCtx.play()
  },
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoCtx  = wx.createVideoContext('myvideo', this);
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