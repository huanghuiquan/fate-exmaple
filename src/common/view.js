/**
 * @file etpl 配置
 * @author ()
 */

define(function (require) {

    return {
            commandOpen: '{{',
            commandClose: '}}',
            strip: true,
            filters: {
                add: function (source) {
                    return 1 + parseInt(source, 10);
                }
            }
        };

});
