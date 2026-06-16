'use strict';

(() => {

    const scene = geofs.api.viewer.scene;
    const moon = scene.moon;

    // ==========================================
    // 月の地表テクスチャ
    // ==========================================

    geofs.api.imageryProvider =
        new Cesium.UrlTemplateImageryProvider({
            maximumLevel: 17,
            url: "https://lroc-tiles.quickmap.io/tiles/wac_nac_nacroi/lunar-fulleqc/{z}/{x}/{y}.jpg"
        });

    geofs.api.setImageryProvider(
        geofs.api.imageryProvider,
        false
    );

    // ==========================================
    // 月本体テクスチャ
    // ==========================================

    moon.textureUrl =
        "https://raw.githubusercontent.com/supermanone-boop/models/main/2.jpg";

    moon.onlySunLighting = false;

    // ==========================================
    // 常時表示・巨大化
    // ==========================================

    scene.preRender.addEventListener(() => {

        moon.show = true;

        if (moon._ellipsoidPrimitive) {

            const r = 1737400 * 48;

            moon._ellipsoidPrimitive.radii =
                new Cesium.Cartesian3(r, r, r);

            moon._ellipsoidPrimitive._boundingSphere.radius = r;
        }

    });

    console.log("[Moon] Lunar texture + giant moon loaded");

})();