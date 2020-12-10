
//发布评论信息
$(function(){
    $("#tomessage").click(function(){
        var val=$("#comments").val();
        console.log(val);
        var msg='<div class="media ">'+
        '<div class="pull-left">'+
            '<img class="avatar comment-avatar" src="avatar2.JPG" style="width:80px;height:80px" alt="">'+
        '</div>'+
        '<div class="media-body">'+
            '<div class="well">'+
                '<div class="media-heading">'+
                    '<span class="heading-font">Cory Mei</span>&nbsp; <small>2020-12</small>'+
                '</div>'+
                '<p>'+val+'</p>'+
                '<a class="btn btn-primary pull-right mt30" href="#">Reply</a>'+
            '</div>'+
        '</div>'+
    '</div>';
    var el_msg=$(msg);
    $("#media").append(el_msg);
    //clear
    $("#comments").val("");
    });
})
