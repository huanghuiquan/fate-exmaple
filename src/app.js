/**
 * @file app
 * @author ()
 */

define(function (require) {

    var Resolver = require('saber-promise');
    var firework = require('saber-firework');
    // 使用slide转场效果
    require('saber-viewport/transition/slide');

    // FIXME
    // Only For Debug
    // 关闭Promise的异常捕获，方便调试
    Resolver.disableExceptionCapture();

    // saber-firework全局配置信息
    var config = {
            index: 'index',
            templateConfig: require('./common/view'),
            templateData: {},
            viewport: {
                transition: 'slide'
            }
        };

    // 加载路由配置
    firework.load(require('./router'));

    return {
        init: function () {
            // 启动应用
            firework.start('viewport', config);
        }
    };

});
