$.ajaxSetup({
    data: {csrfmiddlewaretoken: "{{ csrf_token }}"},
});


function blankfilling() {

    var len = $(".div_question").length + 1;
    $('#question_list').append("                                               <div class=\"div_question\" id = " + len + ">\n" +
        "                                                        <form method=\"post\" class=\"form-horizontal\">\n" +
        "                                                            <div onclick=\"toggle_edit(event)\">\n" +
        "                                                        <div>\n" +
        "                                                            <h5 style=\"display: inline\">" + len + '.' + ' ' + "</h5>\n" +
        "                                                            <h5 style=\"display: inline\">" + 'Question' + ' ' + len + " </h5>\n" +
        "                                                            <button class=\"btn mr-1 btn-secondary\" onclick='delquestion(event)'>del</button>\n" +
        "                                                        </div>\n" +
        "                                                            </div>\n" +
        "\n" +
        "                                                    <div>\n" +
        "                                                        <input style=\"display: none\" name=\"questiontype\" value=\"填空题\">\n" +
        "                                                        <input style=\"display: none\" name=\"questionnumber\" value= " + len + ">\n" +
        "                                                        <input style=\"display: none\" name=\"indicatorID\" value=" + nodeID + ">\n" +
        "                                                        <textarea class=\"form-control\"\n" +
        "                                                                  onkeyup=\"SwapTxt(event)\" name=\"choicetitle\"></textarea>\n" +
        "                                                        <div class=\"row\" style=\"margin-top: 15px\">\n" +
        "                                                            <div class=\"col-md-9\">\n" +
        "                                                                <span><input\n" +
        "                                                                        name=\"required\"\n" +
        "                                                                        type=\"checkbox\"><span>必答题</span></span>\n" +
        "                                                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input\n" +
        "                                                                        name=\"attachment\"\n" +
        "                                                                        type=\"checkbox\"><span>含附件上传</span></span>\n" +
        "                                                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select\n" +
        "                                                                        name=\"markmethod\" class=\"form-control-sm\">\n" +
        "                                                            <option>自动打分</option>\n" +
        "                                                            <option>手动打分</option>\n" +
        "                                                        </select></span>\n" +
        "                                                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input\n" +
        "                                                                        name=\"importanswer\"\n" +
        "                                                                        type=\"checkbox\"><span>导入答案</span></span>\n" +
        "                                                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>满分： </span><input type=\"text\" name=\"points\"></span>\n" +
        "                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                        <div>\n" +
        "                                                        <div style=\"margin-left: 10px;margin-bottom: 15px\">\n" +
        "                                                        </div>\n" +
        "                                                        <input type=\"submit\"\n" +
        "                                                               class=\"btn btn-outline-danger btn-lg  btn-round\"\n" +
        "                                                               value=\"保存\" onclick=\"submit_choice(event)\">\n" +
        "                                                        <input type=\"reset\" class=\"btn btn-outline-danger btn-lg  btn-round\" value=\"清空\">\n" +
        "                                                            </div>\n" +
        "                                                    </div>\n" +
        "                                                            </form>\n" +
        "                                                </div>");
    variableID(10);

}

function GetRequest() {
    var url = location.search; //获取url中"?"符后的字串
    var theRequest = new Object();
    if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
            theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
    }
    return theRequest;
}

var req = GetRequest();
var nodeID = req['nodeID'];
for (var i = 0; i < document.getElementsByName('indicatorID').length; i++) {
    document.getElementsByName('indicatorID')[i].value = nodeID;
}



function choice() {
    var len = $(".div_question").length + 1;
    $('#question_list').append("                                                <div class=\"div_question\" id = " + len + ">\n" +
        "                                                    <form method=\"post\" class=\"form-horizontal\">\n" +
        "                                                        <div onclick=\"toggle_edit(event)\">\n" +
        "                                                            <div>\n" +
        "<h5 style=\'display: inline\'>" + len + '.' + ' ' + "</h5>" +
        "                                                                <h5 style=\"display: inline\">" + 'Question' + ' ' + len + ' </h5>\n' + "<button class=\"btn mr-1 btn-secondary\" onclick=\'delquestion(event)\' >del</button>" +
        "                                                            </div>\n" +
        "                                                            <div>\n" +
        "                                                                <ul class=\"choice_list\">\n" +
        "                                                                    <li class=\"mb-2\">\n" +
        "                                                                        <input type=\"checkbox\">\n" +
        "                                                                        <span>Answer1</span></li>\n" +
        "                                                                    <li class=\"mb-2\">\n" +
        "                                                                        <input type=\"checkbox\">\n" +
        "                                                                        <span>Answer2</span></li>\n" +
        "                                                                </ul>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                        <div>\n" +
        "                                                            <input style=\"display: none\" name=\"questiontype\"\n" +
        "                                                                   value=\"选择题\">\n" +
        "<input style=\"display: none\" name=\"questionnumber\"\n" +
        "                                                                   value= " + len + ">\n" +
        "<input style=\'display: none\' name='\indicatorID\'\n value=" + nodeID + ">" +
        "                                                            <textarea class=\"form-control\"\n" +
        "                                                                      onkeyup=\"SwapTxt(event)\"\n" +
        "                                                                      name=\"choicetitle\"></textarea>\n" +
        "                                                            <div class=\"row\" style=\"margin-top: 15px\">\n" +
        "                                                                <div class=\"col-md-9\">\n" +
        "                                                        <span><select class=\"form-control-sm\" name=\"class\">\n" +
        "                                                            <option>单选</option>\n" +
        "                                                            <option>多选</option>\n" +
        "                                                        </select>\n" +
        "                                                            </span>\n" +
        "                                                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input\n" +
        "                                                                            type=\"checkbox\"\n" +
        "                                                                            name=\"required\"><span>必答题</span></span>\n" +
        "                                                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input\n" +
        "                                                                            type=\"checkbox\" name=\"attachment\"><span>含附件上传</span></span>\n" +
        "                                                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select\n" +
        "                                                                            class=\"form-control-sm\" name=\"markmethod\">\n" +
        "                                                            <option>自动打分</option>\n" +
        "                                                            <option>手动打分</option>\n" +
        "                                                        </select></span>\n" +
        "                                                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input\n" +
        "                                                                            type=\"checkbox\" name=\"importanswer\"><span>导入答案</span></span>\n" +
        "                                                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>满分： </span><input type=\"text\" name=\"points\"></span>\n" +
        "                                                                </div>\n" +
        "                                                            </div>\n" +
        "                                                            <div style=\"margin-top: 15px\">\n" +
        "                                                                <table class=\"table table-responsive-sm text-left\"\n" +
        "                                                                       style=\"table-layout: fixed\">\n" +
        "                                                                    <tbody>\n" +
        "                                                                    <tr>\n" +
        "                                                                        <td>选项文字</td>\n" +
        "                                                                        <td>允许填空</td>\n" +
        "                                                                        <td>上移下移</td>\n" +
        "                                                                    </tr>\n" +
        "                                                                    <tr class=\"choiceedit\">\n" +
        "                                                                        <td>\n" +
        "                                                                            <input type=\"text\"\n" +
        "                                                                                   onkeyup=\"SwapTxt_option(event)\"\n" +
        "                                                                                   onclick=\"trid(event)\" name=\"choice\">\n" +
        "                                                                            <a onclick=\"delchoice(event)\"><i\n" +
        "                                                                                    class=\"ft-minus-circle\"></i></a>\n" +
        "                                                                        </td>\n" +
        "                                                                        <td>\n" +
        "                                                                            <input type=\"checkbox\"\n" +
        "                                                                                   onchange=\"allowblank(event)\"\n" +
        "                                                                                   name=\"blank\">\n" +
        "                                                                        </td>\n" +
        "                                                                        <td>\n" +
        "                                                                            <a onclick=\"moveup(event)\"><i class=\"ft-arrow-up\"></i></a>\n" +
        "                                                                            <a onclick=\"movedown(event)\"><i class=\"ft-arrow-down\"></i></a>\n" +
        "                                                                        </td>\n" +
        "                                                                    </tr>\n" +
        "                                                                    <tr class=\"choiceedit\">\n" +
        "                                                                        <td>\n" +
        "                                                                            <input type=\"text\"\n" +
        "                                                                                   onkeyup=\"SwapTxt_option(event)\"\n" +
        "                                                                                   onclick=\"trid(event)\" name=\"choice\">\n" +
        "                                                                            <a onclick=\"delchoice(event)\"><i\n" +
        "                                                                                    class=\"ft-minus-circle\"></i></a>\n" +
        "                                                                        </td>\n" +
        "                                                                        <td>\n" +
        "                                                                            <input type=\"checkbox\"\n" +
        "                                                                                   onchange=\"allowblank(event)\"\n" +
        "                                                                                   name=\"blank\">\n" +
        "                                                                        </td>\n" +
        "                                                                        <td>\n" +
        "                                                                            <a onclick=\"moveup(event)\"><i class=\"ft-arrow-up\"></i></a>\n" +
        "                                                                            <a onclick=\"movedown(event)\"><i class=\"ft-arrow-down\"></i></a>\n" +
        "                                                                        </td>\n" +
        "                                                                    </tr>\n" +
        "                                                                    </tbody>\n" +
        "                                                                </table>\n" +
        "                                                                <div style=\"margin-left: 10px;margin-bottom: 15px\">\n" +
        "                                                                    <a class=\"addchoice\"\n" +
        "                                                                       onclick=\"addchoice(event)\"><span>添加选项</span></a>\n" +
        "                                                                </div>\n" +
        "                                                            </div>\n" +
        "                                                            <input type=\"button\"\n" +
        "                                                                   class=\"btn btn-outline-danger btn-lg  btn-round\"\n" +
        "                                                                   value=\"保存\" onclick=\"submit_choice(event)\">\n" +
        "                                                            <input " +
        "                                                                   class=\"btn btn-outline-danger btn-lg  btn-round\"\n" +
        "                                                                   value=\"清空\" onclick='clearForm_choice(event)'>\n" +
        "                                                        </div>\n" +
        "                                                    </form>\n" +
        "                                                </div>"
    );
    variableID(10);
}

function answerfilling() {
    var questionlist = document.getElementById('question_list');
    var addanswer = $();
    addanswer.appendTo(questionlist)

}

function clearForm_choice(e) {
    var bt = $(e.target);
    val = bt.parent().children().eq(1).val();
    var txt = bt.closest('.div_question').find('textarea');
    txt.parent().prev().find('h5').eq(1).html('Question' + ' ' + val);
    var form = bt.closest('form');
    form[0].reset();


}

function SwapTxt(e) {
    var bt = $(e.target);
    bt.parent().prev().find('h5').eq(1).html(bt.val());
    val = bt.parent().children().eq(1).val();
    if (bt.parent().prev().find('h5').eq(1).html() === '') {
        bt.parent().prev().find('h5').eq(1).html('Question' + ' ' + val)

    }
}

function trid(e) {
    var col = $(e.target);
    return col.parent().parent().index() - 1
}

function SwapTxt_option(e) {
    var a = trid(e);
    var choice = $(e.target);
    // console.log(choice.closest('.div_question').find('.choice_list').children().eq(a).children('span').html());
    choice.closest('.div_question').find('.choice_list').children().eq(a).children('span').html(choice.val());
    if (choice.closest('.div_question').find('.choice_list').children().eq(a).children('span').html() === '') {
        choice.closest('.div_question').find('.choice_list').children().eq(a).children('span').html('Answer' + (a + 1))

    }
}

function allowblank(e) {
    var a = $(e.target);
    var tr = a.parent().parent().index();
    var ul = a.closest('.div_question').find('.choice_list').children().eq(tr - 1);
    blank = $('<a>___________</a>');
    if (a.is(':checked')) {
        blank.appendTo(ul)
    } else if (a.is(':checked') === false) {
        ul.children('a').remove();
        // ul.removeChild(ul.getElementsByTagName('a')[0])

    }
}

function delchoice(e) {
    var table = $(e.target).closest('.div_question').find('table')[0]; //对应的table
    var tr = $(e.target).parent().parent().parent().index(); //删的是第几行
    length = $(event.currentTarget).closest('.div_question').find('.choice_list').children().length;
    console.log(length);
    // debugger;
    for (var i = tr + 1; i <= length; i++) {
        if ($(e.target).closest('table').children().children().eq(i).find('input')[0].value === '') {
            $(event.currentTarget).closest('.div_question').find('.choice_list').children().eq(i - 1).children('span').html('Answer' + (i - 1));
        }
    }
    $(event.currentTarget).closest('.div_question').find('.choice_list').children().eq(tr - 1).remove();
    table.deleteRow(tr);
    // $(event.currentTarget).closest('.div_question').find('.choice_list').children().eq(tr - 1).remove();
    // table.deleteRow(tr);

}




function addchoice(e) {
    var add = $(e.target);
    var table = add.closest(".div_question").find('table')[0];
    var addtr = $('                                                                    <tr class=\"choiceedit\">\n' +
        '                                                                        <td>\n' +
        '                                                                            <input type="text"\n' +
        '                                                                                   onkeyup="SwapTxt_option(event)" onclick="trid(event)" name="choice">\n' +
        '                                                                            <a onclick="delchoice(event)"><i class="ft-minus-circle"></i></a>\n' +
        '                                                                        </td>\n' +
        '                                                                        <td>\n' +
        '                                                                            <input type="checkbox" onchange="allowblank(event)" name="blank">\n' +
        '                                                                        </td>\n' +
        '                                                                        <td>\n' +
        '                                                                            <a onclick="moveup(event)"><i class="ft-arrow-up"></i></a>\n' +
        '                                                                            <a onclick="movedown(event)"><i class="ft-arrow-down"></i></a>\n' +
        '                                                                        </td>\n' +
        '                                                                    </tr>');
    addtr.appendTo(table);
    var choicelist = add.closest(".div_question").find('.choice_list');
    var addli = $('<li class="mb-2">\n' +
        '                                                                        <input type="checkbox">\n' +
        '                                                                        <span>' + 'Answer' + (table.rows.length - 1) + '</span>' + '</li>');

    addli.appendTo(choicelist);
}

csrf();

function csrf() {
    var form = document.getElementsByTagName('form');
    var inputElem = document.createElement('input');
    inputElem.type = 'hidden';
    inputElem.name = 'csrfmiddlewaretoken';
    inputElem.value = '{{ csrf_token() }}';
    for (var i = 0; i < form.length; i++) {
        form[i].appendChild(inputElem);
    }
} //csrf动态添加？暂时注释


function delquestion(e) {
    var len = $(".div_question").length;
    var index = parseInt($(e.target).closest('.div_question').attr('id'));
    $("#" + index).remove();
    for (var i = index + 1, j = index; i <= len; i++, j++) {
        var cloneElement = $('#' + i).clone();
        $("#" + (i - 1)).replaceWith(cloneElement);
        $("#" + i).attr('id', i - 1);
        $("#" + (i - 1)).find('h5').eq(0).html((i - 1) + '.' + ' ');
        if ($("#" + (i - 1)).find('textarea').eq(0).val() === '') {
            $("#" + (i - 1)).find('h5').eq(1).html('Question' + ' ' + (i - 1));
        }
        $("#" + (i - 1)).find($('[name = "questionnumber"]')).attr('value',i - 1);

    }
}

function submit_choice(e) {
    e.preventDefault();
    var a = $(e.target);
    var form = a.closest('.form-horizontal');
    console.log(form);
    $.ajax({
        type: 'post',
        data: form.serialize(),
        url: '/administrator/questionaire_add',
        success: function (data) {
            console.log(data)
        }
    });
}

function toggle_edit(event) {
    var next = event.currentTarget.nextElementSibling;
    $(next).toggle();
}


function moveup(e) {
    var a = $(e.target).parent().parent().parent();
    var prev = a.prev();
    var list = $(e.target).closest('.div_question').find('.choice_list');
    if (a.index() > 1) {
        list.children().eq(a.index() - 1).insertBefore(list.children().eq(a.index() - 1).prev());
        a.insertBefore(prev);
    }
}
function hide_edit(event){
    var next = event.currentTarget.parentElement;
    $(next).hide();
}

function matrix_title_split(event){
    var add_ques = $('<tr>\n'+
                                                                    '<th align="left"\n'+
                                                                        'style="border-bottom: 1px solid #efefef;">选项\n'+
                                                                    '</th>\n'+
                                                                    '<td><a class="ft-circle"\n'+
                                                                           'style="position: static"></a></td>\n'+
                                                                    '<td><a class="ft-circle"\n'+
                                                                           'style="position: static"></a></td>\n'+
                                                                    '<td><a class="ft-circle"\n'+
                                                                           'style="position: static"></a></td>\n'+
                                                                    '<td><a class="ft-circle"\n'+
                                                                           'style="position: static"></a></td>\n'+
                                                                    '<td><a class="ft-circle"\n'+
                                                                           'style="position: static"></a></td>\n'+
                                                                '</tr>\n');
    var text_edit = event.currentTarget;
    var question_titles = text_edit.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[1].children;
    var question_table = text_edit.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[1];
    var lines = $(text_edit).val().split(/\n/);
    console.log(lines[0]);
    var choice_name = text_edit.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[0].firstElementChild.children;
    var item_length = choice_name.length - 1;
    if (lines.length > question_titles.length){
        $(question_titles[0]).clone().appendTo(question_table)
    } else if (lines.length < question_titles.length){
        $(question_titles[question_titles.length - 1]).remove();
    } else {
        for (var i = 0; i < lines.length; i++) {
            question_titles[i].firstElementChild.innerHTML = lines[i];
        }
    }
}

function table_title_split(event){
    var text_edit = event.currentTarget;
    var question_table = text_edit.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[1];
    var question_titles = question_table.children;
    var add_ques = (Array.prototype.slice.call(question_titles))[0];
    var lines = $(text_edit).val().split(/\n/);
    if (lines.length > question_titles.length){
        $(question_titles[0]).clone().appendTo(question_table);
    } else if (lines.length < question_titles.length){
        $(question_titles[question_titles.length - 1]).remove();
    } else {
        for (var i = 0; i < lines.length; i++) {
            question_titles[i].firstElementChild.innerHTML = lines[i];//bug 空格同步
        }
    }
}

function table_choice_split(event){
    var text_edit = event.currentTarget;
    var question_titles = text_edit.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[1].children;
    var testques = text_edit.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[1];
    var choice_name = text_edit.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[0].firstElementChild.children;
    var question_table = text_edit.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[1].closest('table');
    var lines = $(text_edit).val().split(/\n/);
    var add_choice = $('<td style="border-bottom:1px solid #efefef;"\n'+
                                                                         "align='center'><textarea></textarea></td>')\n");
    if (lines.length > (choice_name.length - 1)){
        add_choice.appendTo(question_titles);
        var Cell = $('<td align = "center"></td>')
        for (var i = 0; i<lines.length;i++){
            var thead =text_edit.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[0].children[0]
            Cell.appendTo(thead)
//            choice_name[i+1].innerHTML = lines[i]
        }
    } else if (lines.length < (choice_name.length - 1)){
//        for (var i = 0; i < lines.length; i++){
//            console.log($((question_titles[i]).children))
//            $((question_titles[i]).children[choice_name.length - 1]).remove();
//        }
        var index = lines.length;
        console.log(index);
        console.log(question_table);
        $(question_table).find('tr').each(function(){
            var target = $(this);
            var td = target.children();
            console.log(td);
            $(td[index+1]).remove();
        })
    }else{
        for (var i = 0; i<lines.length;i++){
            choice_name[i+1].innerHTML = lines[i];
        }

    }

}



function movedown(e) {
    var a = $(e.target).parent().parent().parent();
    var next = a.next();
    var list = $(e.target).closest('.div_question').find('.choice_list');
    if (next) {
        list.children().eq(a.index() - 1).insertAfter(list.children().eq(a.index() - 1).next());
        a.insertAfter(next);

    }
}


function variableID(prefix) {
    formlist = document.getElementsByClassName('form-horizontal');
    for (var i = 0; i < formlist.length; i++) {
        var testID = (prefix || '') + new Date().getTime().toString(36) + Math.random().toString(36).slice(2);
        formlist[i].setAttribute('id', testID)
    }
    return testID;
}

function addcolumn(event){
    var e = event.currentTarget;
    var table = e.closest('form').firstElementChild.children[1].firstElementChild;
    var choice_add = e.parentElement.previousElementSibling.firstElementChild;
    $(choice_add).append('<tr>\n'+
                                                                    '<td>\n'+
                                                                    '<input type="text" name="optionedit"\n'+'onkeyup="matrix_text_swap(event)" value="placeholder">\n'+
                                                                        '<a><i class="ft-minus-circle" onclick="minuscolumn(event)"></i></a>\n'+
                                                                    '</td>\n'+
                                                                    '<td>\n'+
                                                                        '<input name="allowblank" type="checkbox">\n'+
                                                                    '</td>\n'+
                                                                    '<td>\n'+
                                                                        '<a onclick="move_up(event)"><i class="ft-arrow-up"></i></a>\n'+
                                                                        '<a onclick="move_down(event)"><i class="ft-arrow-down"></i></a>\n'+
                                                                    '</td>\n'+
                                                                "</tr>')\n");
    //console.log(table);
    $(table).find('tr').each(function(){
        var target = $(this);
        if(target.parent().get(0) == table.firstElementChild){ //&& (target.parent() === $(table.children[0]))){
            target.append('<td width="9.6%" align="center">placeholder</td>');
        }else{
            target.append('<td><a class="ft-circle" style="position: static"></a></td>');
        }
    })
}

function minuscolumn(event){
    var e = event.currentTarget;
    var table = e.closest('form').firstElementChild.children[1].firstElementChild;
    console.log($(e).closest('.div_question').find('table')[1]); //下面的table
    console.log($(e).closest('tr').index()); //要删第几行
    var index = $(e).closest('tr').index();
    $(e.closest('tr')).remove();
    $(table).find('tr').each(function(){
        var target = $(this);
        var td = target.children();
        console.log(td);
        $(td[index]).remove();
    })
}

function matrix_text_swap(event){
    var e = event.currentTarget;
    var table = e.closest('tbody');
    var thead = e.closest('form').firstElementChild.children[1].firstElementChild.children[0].firstElementChild.children;
    thead[$(e.closest('tr')).index()].innerHTML = $(e).val();

}

