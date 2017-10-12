/**
 *
 * Created by cpp on 2017/10/12.
 */
define(["jquery","cookie","form"],function ($) {
    $(function () {
        //给表单注册提交事件
        $("form").submit(function () {
//            alert("1");
            //提交表单时一定要设置name属性
            //校验用户输入内容是否为空
            if($("input[name=tc_name]").val().trim()==""){
                alert("请输入用户名");
                return false;
            }
            if($("input[name=tc_pass]").val().trim()==""){
                alert("请输入密码");
                return false;
            }
            //获取输入框内容 表单序列化
           /* var data=$(this).serialize();
            console.log(data);*/
            //1.发送ajax请求
            //2,利用ajaxForm插件自动获取表单内容，并提交给后端
            $(this).ajaxSubmit({
                url:"/api/login",
                type:"post",
                success:function (data) {
                    console.log(data);
                    if(data.code==200){
//                  //将后台返回的数据用户名和头像存储到cookie中，cookie只能存储字符串。需要将
//                        返回的对象转换成字符串
                        $.cookie("userinfo",JSON.stringify(data.result),{path:"/",expires:365});
                        location.href="/";
                    }
                }
            })
           /* $.ajax({
                url:"/api/login",
                type:"post",
                data:data,
                success:function (data) {
                    console.log(data);
                    if(data.code==200){
//                  //将后台返回的数据用户名和头像存储到cookie中，cookie只能存储字符串。需要将
//                        返回的对象转换成字符串
                        $.cookie("userinfo",JSON.stringify(data.result),{path:"/",expires:365});
                        location.href="/";
                    }
                }
            })*/
            return false;
        });


    })
})