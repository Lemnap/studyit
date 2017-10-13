/**
 * Created by cpp on 2017/10/12.
 */
require.config({
    baseUrl:"/views/assets",
    paths:{
        "jquery":"jquery/jquery",
        "cookie":"jquery-cookie/jquery.cookie",
        "template":"artTemplate/template-web",
        "form":"jquery-form/jquery.form",
        "bootstrap":"bootstrap/js/bootstrap"
    },
    shim:{
        "bootstrap":{
            deps:["jquery"]
        }
    }

})