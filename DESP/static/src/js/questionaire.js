$.ajaxSetup({
    data: {csrfmiddlewaretoken: "{{ csrf_token }}"},
});


function blankfilling() {
    var questionlist = document.getElementById('question_list');
    var addblank = $();
    addblank.appendTo(questionlist);
}

function choice() {
    var questionlist = document.getElementById('question_list');
    var addchoice = $("");
    addchoice.appendTo(questionlist)
}

function answerfilling() {
    var questionlist = document.getElementById('question_list');
    var addanswer = $();
    addanswer.appendTo(questionlist)

}

function SwapTxt(e) {
    var bt = $(e.target);
    bt.parent().prev().find('h5').text(bt.val());
    if (bt.parent().prev().find('h5').text() === '') {
        bt.parent().prev().find('h5').text('标题')
    }
}

function trid(e) {
    var col = $(e.target);
    return col.parent().parent().index() - 1
}

function SwapTxt_option(e) {
    var a = trid(e);
    var choice = $(e.target);
    choice.closest('.div_question').find('.choice_list').children()[a].getElementsByTagName('span')[0].innerHTML = choice.val();
    if (choice.closest('.div_question').find('.choice_list').children()[a].getElementsByTagName('span')[0].innerHTML === '') {
        choice.closest('.div_question').find('.choice_list').children()[a].getElementsByTagName('span')[0].innerHTML = 'Answer' + (a + 1)
    }
}

function allowblank(e) {
    var a = $(e.target);
    var tr = a.parent().parent().index();
    var ul = a.closest('.div_question').find('.choice_list').children()[tr - 1];
    blank = $('<a>___________</a>');
    console.log(tr);
    if (a.is(':checked')) {
        blank.appendTo(ul)
    } else if (a.is(':checked') === false) {
        ul.removeChild(ul.getElementsByTagName('a')[0])
    }
}

function delchoice(e) {
    debugger;
    console.log(1);
    var list = $(e.target).closest('form').children()[0].getElementsByTagName('ul')[0];
    var table = $(e.target).closest('.div_question').find('table')[0]; //对应的table
    var tr = $(e.target).parent().parent().parent().index(); //删的是第几行
    table.deleteRow(tr);
    list.removeChild(list.getElementsByTagName('li')[tr - 1]);
}

function addchoiceanswer(e) {
    var add = $(e.target);
    var table = add.closest(".div_question").find('table')[1];
    var addtr = $('                                                                    <tr>\n' +
        '                                                                        <td>\n' +
        '                                                                            <input type="text">\n' +
        '                                                                            <a><i class="ft-minus-circle"></i></a>\n' +
        '                                                                        </td>\n' +
        '                                                                        <td>\n' +
        '                                                                            <input type="text">\n' +
        '                                                                        </td>\n' +
        '                                                                    </tr>');
    addtr.appendTo(table)
}


function addchoice(e) {
    var add = $(e.target);
    var table = add.closest(".div_question").find('table')[0];
    var addtr = $('                                                                    <tr class="choiceedit">\n' +
        '                                                                        <td>\n' +
        '                                                                            <input type="text"\n' +
        '                                                                                   onkeyup="SwapTxt_option(event)" onclick="trid(event)" >\n' +
        '                                                                            <a onclick="delchoice(event)"><i class="ft-minus-circle"></i></a>\n' +
        '                                                                        </td>\n' +
        '                                                                        <td>\n' +
        '                                                                            <input type="checkbox" onchange="allowblank(event)">\n' +
        '                                                                        </td>\n' +
        '                                                                        <td>\n' +
        '                                                                            <a><i class="ft-arrow-up"></i></a>\n' +
        '                                                                            <a><i class="ft-arrow-down"></i></a>\n' +
        '                                                                        </td>\n' +
        '                                                                    </tr>');
    addtr.appendTo(table);
    var choicelist = add.closest(".div_question").find('.choice_list');
    var addli = $('<li class="mb-2">\n' +
        '                                                                        <input type="checkbox">\n' +
        '                                                                        <span>' + 'Answer' + (table.rows.length - 1) + '</span>' + '</li>');
    console.log(table.rows.length - 1);
    addli.appendTo(choicelist);
}

function answershow() {
    $('#editForm').modal('show');
}

variableID(10);

function variableID(prefix) {
    formlist = document.getElementsByClassName('form-horizontal');
    for (var i = 0; i < formlist.length; i++) {
        var testID = (prefix || '') + new Date().getTime().toString(36) + Math.random().toString(36).slice(2);
        formlist[i].setAttribute('id', testID)
    }
    return testID;
}

function test() {
    var len = $(".div_question").length;
    $('#question_list').append("<h5 class='div_question' id = " + len + ">" + len + '.' + ' ' + 'Question' + ' ' + len + ' <button class="btn mr-1 btn-secondary" onclick=\'test1(' + len + ')\' >del</button>' + "</h5>")
}

function test1(index) {
    // debugger;
    var len = $(".div_question").length - 1;
    $("#" + index).remove();
    for (var i = index + 1, j = index; i <= len; i++, j++) {
        $("#" + i).replaceWith("<h5 class='div_question' id = " + (i - 1) + ">" + 'Question' + (i - 1) + ' <button class="btn mr-1 btn-secondary" onclick=\'test1(' + (i - 1) + ')\' >del</button>' + "</h5>");
    }
}

function toggle_edit(event){
    var next = event.currentTarget.nextElementSibling;
    $(next).toggle();
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
    console.log(lines[0])
    var choice_name = text_edit.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[0].firstElementChild.children;
    var item_length = choice_name.length - 1
    if (lines.length > question_titles.length){
        $(question_titles[0]).clone().appendTo(question_table)
    } else if (lines.length < question_titles.length){
        $(question_titles[question_titles.length - 1]).remove();
    } else {
        for (var i = 0; i < lines.length; i++) {
            question_titles[i].firstElementChild.innerHTML = lines[i];
        };
    };
};

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
        };
    };
};

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

