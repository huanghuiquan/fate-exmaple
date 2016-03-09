/**
 * @file 路由配置
 * @author ()
 */

define(function (require) {

    return [
        {path: '/', action: require('./portal/index')},
        {path: '/user', action: require('./user/index')},
        {path: '/wish/list', action: require('./wish/list')},
        {path: '/wish/detail/:id', action: require('./wish/detail')}
    ];

});
