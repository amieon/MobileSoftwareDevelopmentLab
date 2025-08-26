Page({
  data: {
    region: ['山东省', '青岛市', '黄岛区'],
    city: '青岛',

    // 实时天气
    temperature: '--',
    weather: '--',
    weatherIcon: '/images/100.svg',

    // 其他气象要素
    humidity: '--',
    pressure: '--',
    windDirection: '--',
    visibility: '--',
    windSpeed: '--',

    // 日出日落
    sunrise: '--:--',
    sunset: '--:--',

    // 空气质量
    aqi: '--',
    category: '--',

    // 紫外线
    uvIndex: '--',
  },
  // picker 选择地区
  bindRegionChange(e) {
    let region = e.detail.value
    let city = region[1]   // 取城市名
    this.setData({
      region,
      city
    })
    this.getWeather(city)
  },

  // 按钮选择城市
  chooseCity() {
    wx.chooseCity({
      success: (res) => {
        // 更新 city 和 region
        this.setData({
          city: res.city,
          region: [res.province, res.city, res.area]
        })
        this.getWeather(res.city)
      },
      fail: (err) => {
        console.log('选择城市失败：', err)
      }
    })
  },
  onLoad() {
    this.getWeather(this.data.city)
  },



  getWeather(cityName) {
    const key = "58cde137c76f44f5bc7885fc1e711aa9"
    wx.request({
      url: "https://geoapi.qweather.com/v2/city/lookup",
      data: {
        location: cityName,    
        key: key
      },
      success: (res) => {
        if (res.data.code === "200" && res.data.location.length > 0) {
          // 找到第一个结果
          const cnCity = res.data.location[0]  
          const cityId = cnCity.id
          console.log("城市ID:", cityId, cnCity.name)
        
          this.getNowWeather(cityId, key)
          this.getSunInfo(cityId, key)
          this.getAirQuality(cityId, key)
          this.getLifeIndex(cityId, key)
        } else {
          wx.showToast({ title: '未找到城市', icon: 'none' })
        }
      },
      fail: (err) => {
        console.error("城市查询失败:", err)
      }
    })
  },
  // 实时天气
getNowWeather(cityId, key) {
  wx.request({
    url: "https://devapi.qweather.com/v7/weather/now",
    data: { location: cityId, key: key },
    success: (res) => {
      if (res.data.code === "200") {
        let now = res.data.now
        this.setData({
          temperature: now.temp,
          weather: now.text,
          weatherIcon: `/images/${now.icon}.svg`,
          humidity: now.humidity,
          pressure: now.pressure,
          windDirection: now.windDir,
          windSpeed: now.windSpeed,
          visibility: now.vis
        })
      }
    }
  })
},


  // 日出日落
  getSunInfo(cityId, key) {
    const date = new Date()
    const yyyy = date.getFullYear()
    const mm = String(date.getMonth() + 1).padStart(2, '0')
    const dd = String(date.getDate()).padStart(2, '0')
    const today = `${yyyy}${mm}${dd}`

    wx.request({
      url: "https://devapi.qweather.com/v7/astronomy/sun",
      data: { location: cityId, date: today, key: key },
      success: (res) => {
        if (res.data.code === "200") {
          this.setData({
            sunrise: res.data.sunrise,
            sunset: res.data.sunset
          })
        }
      }
    })
  },

  // 空气质量
  getAirQuality(cityId, key) {
    wx.request({
      url: "https://devapi.qweather.com/v7/air/now",
      data: { location: cityId, key: key },
      success: (res) => {
        if (res.data.code === "200") {
          let air = res.data.now
          this.setData({
            aqi: air.aqi,
            category: air.category,
          })
        }else {
          this.setData({
            category: '良好'
          })
        }
      }
    })
  },

  // 生活指数（紫外线）
  getLifeIndex(cityId, key) {
    wx.request({
      url: "https://devapi.qweather.com/v7/indices/1d",
      data: { 
        location: cityId,
        type: 5,   // type=5 表示紫外线指数
        key: key
      },
      success: (res) => {
        if (res.data.code === "200" && res.data.daily.length > 0) {
          let uv = res.data.daily[0]
          this.setData({
            uvIndex: uv.category
          })
        }
      }
    })
  }
})
