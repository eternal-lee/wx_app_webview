//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    visitUrl: "",
  },
  onLoad: function() {
    this.setData({
      visitUrl: "http://127.0.0.1:8000/webview.html#/hash",
    });
  },
});