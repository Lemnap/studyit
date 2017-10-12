$(function () {
	//如果不是在登录页面，将获取cookie的数据
	if(location.pathname!="/dashboard/login"){
		var userinfo=$.cookie("userinfo");
		userinfo=JSON.parse(userinfo);
        console.log(userinfo);
        var html=template("profile_tpl",userinfo);
		$("#user-info").html(html);
    }
    NProgress.start();

    NProgress.done();

    $('.navs ul').prev('a').on('click', function () {
        $(this).next().slideToggle();
    });
})
	