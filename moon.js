window.geofs.api.imageryProvider = new Cesium.UrlTemplateImageryProvider({
    maximumLevel: 17,
    url: "https://lroc-tiles.quickmap.io/tiles/wac_nac_nacroi/lunar-fulleqc/{z}/{x}/{y}.jpg"
});
window.geofs.api.setImageryProvider(window.geofs.api.imageryProvider, false);