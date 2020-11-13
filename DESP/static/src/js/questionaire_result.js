function submit() {
    $('form').each(function () {
        console.log($(this).find('input[name="questiontype"]').val()); //题型
        if ($(this).find('input[name="questiontype"]').val() === '选择题') {
            selected = [];
            $(this).find("input:checkbox[name='choice']:checked").each(function () {
                console.log($(this).attr('data-index')) ;//第几个被勾选了 注意是从0开始的
                var reg = /[\s\S*][___]+/;
                 if (reg.test($(this).next().text()) === true){ //选项中包含填空
                     var result = ($(this).next().text()).search(reg);
                     console.log(result)
                 }

            })
        }
        // $.ajax({
        //     type: 'post',
        //     data: $(this).serialize(),
        //     url: '/user/questionaire_submit',
        //     success: function (data) {
        //         console.log(data);
        //         window.location.reload();
        //     }
        // });
    });
    alert('保存成功');
}

function ischecked(event) {
    if($(event.target).is(':checked')){
        console.log($(event.target).next().text());
        var reg = /[___]+/;
        if(reg.test($(event.target).next().text()) === true){
            console.log($(event.target).next().text().match(reg)[0])
        }
    }
}
