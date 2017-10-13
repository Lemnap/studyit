/**
 *
 * Created by cpp on 2017/10/13.
 */
define(["jquery","template","bootstrap"],function ($,template) {
    $(function () {
        //使用过滤器计算年龄
        template.defaults.imports.getAge=function(value){
            return new Date().getFullYear()-new Date(value).getFullYear();
        };

        //刷新页面，发送ajax请求，获取讲师列表数据
        $.ajax({
            url:"/api/teacher",
            success:function (data) {
                console.log(data);
                if(data.code==200){
                    //将请求回来的数据渲染到页面中去
                    var html=template("teacher-list-tpl",data);
                    $("#teacher-list").html(html);
                }
            }

        });
        //给查看按钮注册点击事件弹出模态框，利用bootstrap的模态框.modal()方法进行调用
        $("#teacher-list").on("click",".btn-checkinfo",function () {
            //获取tc_id的值
            // alert("1");
            var id=$(this).parent().data("id");
            console.log(id);
            //发送ajax请求
            $.ajax({
                url:"/api/teacher/view",
                type:"get",
                data:id,
                success:function (data) {
                    console.log(data);
                    if(data.code==200){
                        var html=template("teacher-info-tpl",data);
                        $("#teacher-info").html(html);
                        //打开模态框
                        $("#teacherModal").modal("show");
                    }
                }
            })
        })
    })
})