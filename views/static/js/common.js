define(["jquery","template","cookie"],function ($, template) {
    $(function () {
        //如果不是在登录页面，将获取cookie的数据
        if(location.pathname!="/dashboard/login"){
            //如果没有登录就跳转到登录页面，通过判断cookie中返回的PHPSESSID的状态
            if(!$.cookie("PHPSESSID")){
                //如果没有PHPSESSID自动跳转到登录页面
                location.href="/dashboard/login";
            }
            var userinfo=$.cookie("userinfo");
            userinfo=JSON.parse(userinfo);
            console.log(userinfo);
            var html=template("profile_tpl",userinfo);
            $("#user-info").html(html);


        }
        //给退出按钮注册点击事件，发送ajax请求
        $("#btn_logout").click(function () {
            $.ajax({
                url:"/api/logout",
                type:"post",
                success:function (data) {
                    console.log(data);
                    if(data.code==200){
                        location.href="/dashboard/login";
                    }
                }
            })
        })
        //给有子元素的li注册点击事件，让子元素显示
        $(".navs>ul>li>ul").parent().click(function () {
            $(this).children("ul").slideToggle();
        });
        //让当前的a标签加上active
        var clickA=$(".navs a[href='"+location.pathname+"']");
        clickA.addClass("active");
        //让当前点击的元素判断是否有子元素，如果有子元素，让子元素显示
        if(clickA.parent().parent().siblings("a").length>0){
            clickA.parent().parent().show();
        }
       /* NProgress.start();

        NProgress.done();

        $('.navs ul').prev('a').on('click', function () {
            $(this).next().slideToggle();
        });*/
    })
})
	