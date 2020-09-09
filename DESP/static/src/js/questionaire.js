$.ajaxSetup({
    data: {csrfmiddlewaretoken: "{{ csrf_token }}"},
});

// codes works on all bootstrap modal windows in application
$('.modal').on('hidden.bs.modal', function (e) {
    $(this).find('tbody').empty();
});

function answerfilling() {
    var len = $(".div_question").length + 1;
    $('#question_list').append("                                      <div class=\"div_question\" id = " + len + ">\n" +
        "                                                    <form method=\"post\" class=\"form-horizontal\">\n" +
        "                                                    <div onclick = \"toggle_edit(event)\" class='toggle'>\n" +
        "                                                        <div>\n" +
        "                                                            <h5 style=\"display: inline\">" + len + '.' + ' ' + "</h5>\n" +
        "                                                            <h5 style=\"display: inline\">" + 'Question' + ' ' + len + " </h5>\n" +
        "                                                            <button class=\"btn mr-1 btn-secondary\" onclick='delquestion(event)'>del</button>\n" +
        "<textarea class=\'form-control\' name=\'answerarea\' disabled>答题区域</textarea>" +
        "                                                        </div>\n" +
        "                                                    </div>\n" +
        "                                                    <div>\n" +
        "                                                        <input style=\"display: none\" name=\"questiontype\" value=\'简答题\'>\n" +
        "                                                        <input style=\"display: none\" name=\"questionnumber\" value= " + len + ">\n" +
        "                                                        <input style=\"display: none\" name=\"indicatorID\" value=" + nodeID + ">\n" +
        "<div class=\'row\' style='margin-top: 15px\'></div>" +
        "                                                        <textarea class=\"form-control\"\n" +
        "                                                                  onkeyup=\"SwapTxt(event)\" name=\"choicetitle\"></textarea>\n" +
        "                                                        <div class=\"row\" style=\"margin-top: 15px\">\n" +
        "                                                            <div class=\"col-md-9\">\n" +
        "                                                        <span>尺寸 高： <input name=\"height\" size=\"10\" onkeyup=\'areaheight(event)\'>\n" +
        "                                                            </span>\n" +
        "                                                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input\n" +
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
        "                                                                                name=\"importanswer\"\n" +
        "                                                                                type=\"checkbox\"><span>导入答案</span></span>\n" +
        "                                                                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>满分: </span>\n" +
        "                                                                            <input type=\"text\" name=\"points\" size=\"10\">\n" +
        "                                                                        </span>\n" +
        "                                                                       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                        <div>\n" +
        "                                                        <div style=\"margin-left: 10px;margin-bottom: 15px\">\n" +
        "                                                        </div>\n" +
        "                                                        <input type=\"button\"\n" +
        "                                                               class=\"btn btn-outline-danger btn-lg  btn-round\"\n" +
        "                                                               value=\"保存\" onclick=\"submit_answer(event); hide_edit_blank(event)\">\n" +
        "                                                        <input type=\"button\"\n" +
        "                                                               class=\"btn btn-outline-danger btn-lg  btn-round\"\n" +
        "                                                               value=\"清空\" onclick='clearForm_blank(event)'>\n" +
        "                                                    </div>\n" +
        "                                                        </div>\n" +
        "                                                        </form>\n" +
        "                                                </div>");
    variableID(10);
}

function blankfilling() {
    var len = $(".div_question").length + 1;
    $('#question_list').append("                                               <div class=\"div_question\" id = " + len + ">\n" +
        "                                                        <form method=\"post\" class=\"form-horizontal\">\n" +
        "                                                            <div onclick=\"toggle_edit(event)\" class = 'toggle'>\n" +
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
        "                                                        <textarea class=\"form-control\"\n" +
        "                                                                  name=\"question\"></textarea>\n" +
        "                                                        <div class=\"row\" style=\"margin-top: 15px\">\n" +
        "                                                            <div class=\"col-md-9\">\n" +
        "                                                                <span><input\n" +
        "                                                                        name=\"required\"\n" +
        "                                                                        type=\"checkbox\"><span>必答题</span></span>\n" +
        "                                                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input\n" +
        "                                                                        name=\"attachment\"\n" +
        "                                                                        type=\"checkbox\"><span>含附件上传</span></span>\n" +
        "                                                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select\n" +
        "                                                                        name=\"markmethod\" class=\"form-control-sm\" onchange=\"markrule(this)\">\n" +
        "                                                            <option>自动打分-文字型</option>\n" +
        "                                                            <option>自动打分-数字型</option>\n" +
        "                                                            <option>手动打分</option>\n" +
        "                                                        </select><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span\n" +
        "                                                                data-toggle='modal' data-target='#filling' onclick=\"marksetting(event)\">设置</span></span></span>\n" +
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
        "                                                        <input type=\"button\"\n" +
        "                                                               class=\"btn btn-outline-danger btn-lg  btn-round\"\n" +
        "                                                               value=\"保存\" onclick=\"submit_blank(event); hide_edit_blank(event)\">\n" +
        "                                                        <input type=\"button\" class=\"btn btn-outline-danger btn-lg  btn-round\" value=\"清空\" onclick='clearForm_blank(event)'>\n" +
        "                                                            </div>\n" +
        "                                                    </div>\n" +
        "                                                            </form>\n" +
        "                                                </div>");
    variableID(10);

}

function markrule(sel) {
    selected = sel.options[sel.options.selectedIndex].text
    $sel = $(sel)
    if (selected.toString().indexOf("自动打分") != -1) {
        $sel.next().show()
    } else {
        $sel.next().hide()
    }
}

function marksetting(e) {
    var sp = $(e.target)
    index = sp.parent().parent().parent().parent().parent().prev().find('h5').eq(0).text()
    title = sp.parent().parent().parent().parent().parent().prev().find('h5').eq(1).text()
    question = sp.parent().parent().parent().parent().parent().find('textarea').eq(1).val()
    $('#filling-title').text(index + title)
    html = question.replaceAll('__', '<select>' +
        '<option value="0">数字型</option>' +
        '<option value="1">文字型</option>' +
        '</select>')
    $('#filling-body').html(html)
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

function formfilling() {
    var len = $(".div_question").length + 1;
    $('#question_list').append("                                                <div class=\"div_question\" id = " + len + ">\n" +
        "                                                     <form method=\"post\" class=\"form-horizontal\">\n" +
        "                                                   <div onclick=\"toggle_edit(event)\" class = 'toggle'>\n" +
        "                                                        <div>\n" +
        "                                                            <h5 style=\"display: inline\">" + len + '.' + ' ' + "</h5>\n" +
        "                                                            <h5 style=\"display: inline\">" + 'Question' + ' ' + len + " </h5>\n" +
        "                                                            <button class=\"btn mr-1 btn-secondary\" onclick='delquestion(event)'>del</button>\n" +
        "                                                        </div>\n" +
        "                                                         <div>\n" +
        "                                                            <table class=\"table table-responsive-sm text-left\" style=\"table-layout: fixed;\">\n" +
        "                                                                <thead>\n" +
        "                                                                <tr>\n" +
        "                                                                    <td></td>\n" +
        "                                                                    <td>Col1</td>\n" +
        "                                                                    <td>Col2</td>\n" +
        "                                                                    <td>Col3</td>\n" +
        "                                                                </tr>\n" +
        "                                                                </thead>\n" +
        "                                                                <tbody>\n" +
        "                                                                <tr>\n" +
        "                                                                    <td>Row1\n" +
        "                                                                    </td>\n" +
        "                                                                    <td><textarea disabled style='width: 100%'></textarea></td>\n" +
        "                                                                    <td><textarea disabled style='width: 100%'></textarea></td>\n" +
        "                                                                    <td><textarea disabled style='width: 100%'></textarea></td>\n" +
        "\n" +
        "                                                                </tr>\n" +
        "                                                                <tr>\n" +
        "                                                                    <td>Row2\n" +
        "                                                                    </td>\n" +
        "                                                                    <td><textarea disabled style='width: 100%'></textarea></td>\n" +
        "                                                                    <td><textarea disabled style='width: 100%'></textarea></td>\n" +
        "                                                                    <td><textarea disabled style='width: 100%'></textarea></td>\n" +
        "                                                                </tr>\n" +
        "                                                                </tbody>\n" +
        "                                                            </table></div></div>\n" +
        "\n" +
        "                                                        <div>\n" +
        "                                                            <input style=\"display: none\" name=\"questiontype\"\n" +
        "                                                                   value=\"表格题\">\n" +
        "<input style=\"display: none\" name=\"questionnumber\"\n" +
        "                                                                   value= " + len + ">\n" +
        "<input style=\'display: none\' name='\indicatorID\'\n value=" + nodeID + ">" +
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
        "                                                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>满分: </span><input type=\"text\" name=\"points\" size=\"10\"></span>\n" +
        "                                                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                        <div style=\"margin-top: 15px;display: flex;flex-direction: row\">\n" +
        "                                                            <div style=\"float: left;width: 50%\">\n" +
        "                                                      <textarea onkeyup=\"table_title_split(event)\"\n" +
        "                                                              style=\" width: 90%;height:100% \" rows='10' name=\"row\"></textarea>\n" +
        "                                                            </div>\n" +
        "                                                            <div style=\"float: left;width: 50%\">\n" +
        "                                                            <textarea onkeyup=\"table_choice_split(event)\"\n" +
        "                                                                    style=\" width: 90%;height:100% \" rows='10' name=\"column\"></textarea></div>\n" +
        "                                                        </div>\n" +
        "                                                         <div style='clear: both'></div>\n" +
        "                                                         <div style='margin-top: 15px'></div>\n" +
        "                                                        <input type=\"button\"\n" +
        "                                                               class=\"btn btn-outline-danger btn-lg  btn-round\"\n" +
        "                                                               value=\"保存\" onclick=\"submit_form(event); hide_edit(event)\">\n" +
        "                                                        <input type=\"button\"\n" +
        "                                                               class=\"btn btn-outline-danger btn-lg  btn-round\"\n" +
        "                                                               value=\"清空\" onclick='clearForm_matrix(event)'>\n" +
        "\n" +
        "                                                </div>\n" +
        "                                            </form>\n" +
        "                                            </div>");
    variableID(10);
}

function matrixfilling() {
    var len = $(".div_question").length + 1;
    $('#question_list').append("                                <div class=\"div_question\" id = " + len + ">\n" +
        "                                                    <form method=\"post\" class=\"form-horizontal\">\n" +
        "                                                        <div onclick=\"toggle_edit(event)\" class = 'toggle'>\n" +
        "                                                            <div>\n" +
        "                                                                <h5 style=\"display: inline\">" + len + '.' + ' ' + "</h5>\n" +
        "                                                                <h5 style=\"display: inline\">" + 'Question' + ' ' + len + " </h5>\n" +
        "                                                                <input type=\'button\' class=\"btn mr-1 btn-secondary\"\n" +
        "                                                                        onclick='delquestion(event)' value=\'del\'>\n" +
        "                                                            </div>\n" +
        "                                                            <div>\n" +
        "                                                                <table class=\"table table-responsive-sm text-left\"  style=\"table-layout:fixed;\">\n" +
        "                                                                    <thead>\n" +
        "                                                                    <tr>\n" +
        "                                                                        <td></td>\n" +
        "                                                                        <td>Col1</td>\n" +
        "                                                                        <td>Col2</td>\n" +
        "                                                                        <td>Col3</td>\n" +
        "                                                                        <td>Col4</td>\n" +
        "                                                                        <td>Col5</td>\n" +
        "                                                                    </tr>\n" +
        "                                                                    </thead>\n" +
        "                                                                    <tbody>\n" +
        "                                                                    <tr>\n" +
        "                                                                        <td>Row1\n" +
        "                                                                        </td>\n" +
        "                                                                        <td><a class=\"ft-circle\"\n" +
        "                                                                        ></a></td>\n" +
        "                                                                        <td><a class=\"ft-circle\"\n" +
        "                                                                        ></a></td>\n" +
        "                                                                        <td><a class=\"ft-circle\"\n" +
        "                                                                        ></a></td>\n" +
        "                                                                        <td><a class=\"ft-circle\"\n" +
        "                                                                        ></a></td>\n" +
        "                                                                        <td><a class=\"ft-circle\"\n" +
        "                                                                        ></a></td>\n" +
        "                                                                    </tr>\n" +
        "                                                                    <tr>\n" +
        "                                                                        <td>Row2\n" +
        "                                                                        </td>\n" +
        "                                                                        <td><a class=\"ft-circle\"\n" +
        "                                                                        ></a></td>\n" +
        "                                                                        <td><a class=\"ft-circle\"\n" +
        "                                                                        ></a></td>\n" +
        "                                                                        <td><a class=\"ft-circle\"\n" +
        "                                                                        ></a></td>\n" +
        "                                                                        <td><a class=\"ft-circle\"\n" +
        "                                                                        ></a></td>\n" +
        "                                                                        <td><a class=\"ft-circle\"\n" +
        "                                                                        ></a></td>\n" +
        "                                                                    </tr>\n" +
        "                                                                    </tbody>\n" +
        "                                                                </table>\n" +
        "                                                            </div>\n" +
        "                                                        </div>\n" +
        "                                                        <div>\n" +
        "                                                            <input style=\"display: none\" name=\"questiontype\"\n" +
        "                                                                   value=\"矩阵题\">\n" +
        "<input style=\"display: none\" name=\"questionnumber\"\n" +
        "                                                                   value= " + len + ">\n" +
        "<input style=\'display: none\' name='\indicatorID\'\n value=" + nodeID + ">" +
        "                                                        <textarea class=\"form-control\"\n" +
        "                                                                  onkeyup=\"SwapTxt(event)\"\n" +
        "                                                                  name=\"choicetitle\"></textarea>\n" +
        "                                                            <div class=\"row\" style=\"margin-top: 15px\">\n" +
        "                                                                <div class=\"col-md-9\">\n" +
        "                                                        <span><select class=\"form-control-sm\" name=\"class\">\n" +
        "                                                            <option>单选</option>\n" +
        "                                                            <option>多选</option>\n" +
        "                                                        </select>\n" +
        "                                                            </span>\n" +
        "                                                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input\n" +
        "                                                                            name=\"required\"\n" +
        "                                                                            type=\"checkbox\"><span>必答题</span></span>\n" +
        "                                                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input\n" +
        "                                                                            name=\"attachment\"\n" +
        "                                                                            type=\"checkbox\"><span>含附件上传</span></span>\n" +
        "                                                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select\n" +
        "                                                                            name=\"markmethod\" class=\"form-control-sm\">\n" +
        "                                                            <option>自动打分</option>\n" +
        "                                                            <option>手动打分</option>\n" +
        "                                                        </select></span>\n" +
        "                                                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input\n" +
        "                                                                            name=\"importanswer\"\n" +
        "                                                                            type=\"checkbox\"><span>导入答案</span></span>\n" +
        "                                                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>满分: </span><input type=\"text\" name=\"points\" size=\"10\"></span>\n" +
        "                                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" +
        "                                                                </div>\n" +
        "                                                            </div>\n" +
        "                                                            <div style=\"margin-top: 15px;display: flex;flex-direction: row\">\n" +
        "<div style='float: left;width:50%'>" +
        "                                                                <textarea onkeyup=\"matrix_title_split(event)\"\n" +
        "                                                                          placeholder=\"编辑行\"\n" +
        "                                                                          class=\"form-control\"\n" +
        "                                                                   name=\"row\" style = \"width: 90%; height: 100%\"></textarea>\n" +
        "</div>" +
        "<div style='float: left;width: 50%'>" +
        "                                                                <table class=\"table table-responsive-sm text-left\"  style=\"table-layout: fixed\">\n" +
        "                                                                    <tbody>\n" +
        "                                                                    <tr>\n" +
        "                                                                        <td>选项文字</td>\n" +
        "                                                                        <td>追加填空</td>\n" +
        "                                                                        <td>移动</td>\n" +
        "                                                                    </tr>\n" +
        "                                                                    <tr>\n" +
        "                                                                        <td>\n" +
        "                                                                            <input type=\"text\" name=\"choice\"\n" +
        "                                                                                   onkeyup=\"matrix_text_swap(event)\"\n" +
        "                                                                                   >\n" +
        "                                                                            <a><i class=\"ft-minus-circle\"\n" +
        "                                                                                  onclick=\"minuscolumn(event)\"></i></a>\n" +
        "                                                                        </td>\n" +
        "                                                                        <td>\n" +
        "                                                                            <input name=\"allowblank\" type=\"button\" class=\"btn mr-1 btn-info\" value=\'增加填空符\' onclick=\"addblank(event,'matrix')\">\n" +
        "                                                                        </td>\n" +
        "                                                                        <td>\n" +
        "                                                                            <a onclick=\"moveleft(event)\"><i\n" +
        "                                                                                    class=\"ft-arrow-up\"></i></a>\n" +
        "                                                                            <a onclick=\"moveright(event)\"><i\n" +
        "                                                                                    class=\"ft-arrow-down\"></i></a>\n" +
        "                                                                        </td>\n" +
        "                                                                    </tr>\n" +
        "                                                                    <tr>\n" +
        "                                                                        <td>\n" +
        "                                                                            <input type=\"text\" name=\"choice\"\n" +
        "                                                                                   onkeyup=\"matrix_text_swap(event)\"\n" +
        "                                                                                   >\n" +
        "                                                                            <a><i class=\"ft-minus-circle\"\n" +
        "                                                                                  onclick=\"minuscolumn(event)\"></i></a>\n" +
        "                                                                        </td>\n" +
        "                                                                        <td>\n" +
        "                                                                            <input name=\"allowblank\" type=\"button\" class=\"btn mr-1 btn-info\" value=\'增加填空符\' onclick=\"addblank(event,'matrix')\">\n" +
        "                                                                        </td>\n" +
        "                                                                        <td>\n" +
        "                                                                            <a onclick=\"moveleft(event)\"><i\n" +
        "                                                                                    class=\"ft-arrow-up\"></i></a>\n" +
        "                                                                            <a onclick=\"moveright(event)\"><i\n" +
        "                                                                                    class=\"ft-arrow-down\"></i></a>\n" +
        "                                                                        </td>\n" +
        "                                                                    </tr>\n" +
        "                                                                    <tr>\n" +
        "                                                                        <td>\n" +
        "                                                                            <input type=\"text\" name=\"choice\"\n" +
        "                                                                                   onkeyup=\"matrix_text_swap(event)\"\n" +
        "                                                                                   >\n" +
        "                                                                            <a><i class=\"ft-minus-circle\"\n" +
        "                                                                                  onclick=\"minuscolumn(event)\"></i></a>\n" +
        "                                                                        </td>\n" +
        "                                                                        <td>\n" +
        "                                                                            <input name=\"allowblank\" type=\"button\" class=\"btn mr-1 btn-info\" value=\'增加填空符\' onclick=\"addblank(event,'matrix')\">\n" +
        "                                                                        </td>\n" +
        "                                                                        <td>\n" +
        "                                                                            <a onclick=\"moveleft(event)\"><i\n" +
        "                                                                                    class=\"ft-arrow-up\"></i></a>\n" +
        "                                                                            <a onclick=\"moveright(event)\"><i\n" +
        "                                                                                    class=\"ft-arrow-down\"></i></a>\n" +
        "                                                                        </td>\n" +
        "                                                                    </tr>\n" +
        "                                                                    <tr>\n" +
        "                                                                        <td>\n" +
        "                                                                            <input type=\"text\" name=\"choice\"\n" +
        "                                                                                   onkeyup=\"matrix_text_swap(event)\"\n" +
        "                                                                                  >\n" +
        "                                                                            <a><i class=\"ft-minus-circle\"\n" +
        "                                                                                  onclick=\"minuscolumn(event)\"></i></a>\n" +
        "                                                                        </td>\n" +
        "                                                                        <td>\n" +
        "                                                                           <input name=\"allowblank\" type=\"button\" class=\"btn mr-1 btn-info\" value=\'增加填空符\' onclick=\"addblank(event,'matrix')\">\n" +
        "                                                                        </td>\n" +
        "                                                                        <td>\n" +
        "                                                                            <a onclick=\"moveleft(event)\"><i\n" +
        "                                                                                    class=\"ft-arrow-up\"></i></a>\n" +
        "                                                                            <a onclick=\"moveright(event)\"><i\n" +
        "                                                                                    class=\"ft-arrow-down\"></i></a>\n" +
        "                                                                        </td>\n" +
        "                                                                    </tr>\n" +
        "                                                                    <tr>\n" +
        "                                                                        <td>\n" +
        "                                                                            <input type=\"text\" name=\"choice\"\n" +
        "                                                                                   onkeyup=\"matrix_text_swap(event)\"\n" +
        "                                                                                  >\n" +
        "                                                                            <a><i class=\"ft-minus-circle\"\n" +
        "                                                                                  onclick=\"minuscolumn(event)\"></i></a>\n" +
        "                                                                        </td>\n" +
        "                                                                        <td>\n" +
        "                                                                            <input name=\"allowblank\" type=\"button\" class=\"btn mr-1 btn-info\" value=\'增加填空符\' onclick=\"addblank(event,'matrix')\">\n" +
        "                                                                        </td>\n" +
        "                                                                        <td>\n" +
        "                                                                            <a onclick=\"moveleft(event)\"><i\n" +
        "                                                                                    class=\"ft-arrow-up\"></i></a>\n" +
        "                                                                            <a onclick=\"moveright(event)\"><i\n" +
        "                                                                                    class=\"ft-arrow-down\"></i></a>\n" +
        "                                                                        </td>\n" +
        "                                                                    </tr>\n" +
        "                                                                    </tbody>\n" +
        "                                                                </table>\n" +
        "                                                                     <div style=\"margin-left: 10px;margin-bottom: 15px\">\n" +
        "                                                                    <a class=\"addchoice\"\n" +
        "                                                                       onclick=\"addcolumn(event)\"><span>添加选项</span></a>\n" +
        "                                                                </div>\n" +
        "</div>" +
        "<div style='clear: both'></div>" +
        "                                                            </div>\n" +
        "<div style='margin-top: 15px'></div>" +
        "                                                            <input type=\"button\"\n" +
        "                                                                   class=\"btn btn-outline-danger btn-lg  btn-round\"\n" +
        "                                                                   value=\"保存\"\n" +
        "                                                                   onclick=\"submit_matrix(event); hide_edit(event)\">\n" +
        "                                                            <input type=\"button\"\n" +
        "                                                                   class=\"btn btn-outline-danger btn-lg  btn-round\"\n" +
        "                                                                   value=\"清空\" onclick='clearForm_matrix(event)'>\n" +
        "                                                        </div>\n" +
        "                                                    </form>\n" +
        "                                                </div>");
    variableID(10);

}


function choice() {
    var len = $(".div_question").length + 1;
    $('#question_list').append("                                                <div class=\"div_question\" id = " + len + ">\n" +
        "                                                    <form method=\"post\" class=\"form-horizontal\">\n" +
        "                                                        <div onclick=\"toggle_edit(event)\" class='toggle'>\n" +
        "                                                            <div>\n" +
        "<h5 style=\'display: inline\'>" + len + '.' + ' ' + "</h5>" +
        "                                                                <h5 style=\"display: inline\">" + 'Question' + ' ' + len + ' </h5>\n' + "<input type=\'button\' class=\"btn mr-1 btn-secondary\" onclick=\'delquestion(event)\' value=\'del\' ></input>" +
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
        "                                                                            class=\"form-control-sm\" name=\"markmethod\" onchange=\'option_value(event)\'>\n" +
        "                                                            <option value='0'>手动打分</option>\n" +
        "                                                            <option value='1'>自动打分----逐项累计</option>\n" +
        "                                                            <option value='2'>自动打分----固定选项</option>\n" +
        "                                                            <option value='3'>自动打分----按选项数</option>\n" +
        "                                                        </select></span>\n" +
        "                                                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
        "                                                        <a name=\"choicemark\" onclick='choice_mark(event)' class='choice_mark' style='display:none;'><span>设置计分规则</span></a></span>" +
        "                                                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input\n" +
        "                                                                            type=\"checkbox\" name=\"importanswer\"><span>导入答案</span></span>\n" +
        "                                                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>满分: </span><input type=\"text\" name=\"points\" size=\'10\'></span>\n" +
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
        "                                                                            <input type=\"button\"\n" +
        "                                                                                   class=\"btn mr-1 btn-info\" value=\'增加填空符\' onclick=\"addblank(event,'choice')\"\n" +
        "                                                                                   name=\"allowblank\">\n" +
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
        "                                                                            <input type=\"button\"\n" +
        "                                                                                   class=\"btn mr-1 btn-info\" value=\'增加填空符\' onclick=\"addblank(event,'choice')\"\n" +
        "                                                                                   name=\"allowblank\">\n" +
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
        "                                                                   value=\"保存\" onclick=\"submit_choice(event); hide_edit(event)\">\n" +
        "                                                            <input type='button'" +
        "                                                                   class=\"btn btn-outline-danger btn-lg btn-round\"\n" +
        "                                                                   value=\"清空\" onclick='clearForm_choice(event)'>\n" +
        "                                                        </div>\n" +
        "                                                    </form>\n" +
        "                                                </div>"
    );
    variableID(10);
}

function option_value(event) {
    a = $(event.target);
    value = a.find('option:selected').val();
    if (value != 0) {
        $(event.target).closest('.div_question').find("a[name='choicemark']").show()
    } else {
        $(event.target).closest('.div_question').find("a[name='choicemark']").hide();
    }
}

function addrow(event) {
    table = $(event.target).prev();
    var addtr = $("<tr>" +
        "<td contenteditable='false'></td>" +
        "<td contenteditable=\"true\">0</td>" +
        "<td><input type=\"button\" value=\"删除\" class=\"btn mr-1 btn-danger\" onclick=\"deleteRow(event)\"></td>" +
        "</tr>");
    addtr.appendTo(table);
}

function deleteRow(event) {
    Row = $(event.target);
    index = Row.closest('tr').index();
    table = Row.closest('table');
    table[0].deleteRow(index);
}

function choice_mark(event) {
    value = $(event.target).closest('.div_question').find('option:selected').eq(1).val();
    indicatorID = $(event.target).closest('.div_question').find('input[name="indicatorID"]').val();
    questionnumber = $(event.target).closest('.div_question').find('input[name="questionnumber"]').val();
    console.log(indicatorID);
    if (value === '1') {
        choicelist = $(event.target).closest('.div_question').find('input[name="choice"]');
        arr = [];
        for (i = 0; i < choicelist.length; i++) {
            arr.push(choicelist.eq(i).val());
            $("div[data-model-name='accumulation']").find('tbody').append("<tr>\n" +
                "                                <td contenteditable=\"false\">" + arr[i] + "</td>\n" +
                "                                <td contenteditable=\"true\">0</td>\n" +
                "                                <td>\n" +
                "                                    <input type=\"button\" value=\"删除\" class=\"btn mr-1 btn-danger\" onclick=\"deleteRow(event)\">\n" +
                "                                </td>\n" +
                "                            </tr>");
        }
        $("div[data-model-name='accumulation']").find('tbody').append("<input style=\"display: none\" name=\"questionnumber\"\n" +
            "value= " + questionnumber + ">\n" +
            "<input style=\'display: none\' name='\indicatorID\'\n value=" + indicatorID + ">");
        $("div[data-model-name='accumulation']").modal('show');
    }
}

function schemeedit(event) {
    table = $(event.target).parent().parent().children().eq(0);
    indicatorID = table.find('input[name="indicatorID"]').val();
    questionnumber = table.find('input[name="questionnumber"]').val();
    accumulation = [];
    for (var i = 0; i < table[0].rows.length - 1; i++) {
        for (var j = 0; j < table[0].rows[i].cells.length - 1; j++) {
            if (!accumulation[i]) {
                accumulation[i] = [];
            }
            accumulation[i][j] = table[0].rows[i].cells[j].innerHTML;
        }
    }
    console.log(accumulation);
    $.ajax({
        type: 'post',
        data: {
            indicatorID: indicatorID,
            questionnumber: questionnumber,
            datalist: JSON.stringify(accumulation)
        },
        dataType: 'json',
        url: "/administrator/accumulation",
        success: function () {
            alert('修改成功')
        }
    })
}

function clearForm_choice(e) {
    var bt = $(e.target);
    val = bt.parent().children().eq(1).val();
    var txt = bt.closest('.div_question').find('textarea');
    txt.parent().prev().find('h5').eq(1).html('Question' + ' ' + val);
    var form = bt.closest('form');
    var choicelist = bt.closest('.div_question').find('.choice_list').children().length;
    for (i = 0; i < choicelist; i++) {
        bt.closest('.div_question').find('.choice_list').children().eq(i).children('span').html('Answer' + (i + 1))
    }
    form[0].reset();

}

function clearForm_matrix(event) {
    var bt = $(event.target);
    val = bt.parent().children().eq(1).val();
    var txt = bt.closest('.div_question').find('textarea');
    txt.parent().prev().find('h5').eq(1).html('Question' + ' ' + val);
    var form = bt.closest('form');
    var rowlength = bt.closest('.div_question').find('table').eq(0).find('tbody').children().length;
    var collength = bt.closest('.div_question').find('table').eq(0).find('thead').children().children().length;
    for (i = 0; i < rowlength; i++) {
        bt.closest('.div_question').find('table').eq(0).find('tbody').children().eq(i).children().eq(0).html('Row' + (i + 1))
    }
    for (i = 0; i < collength; i++) {
        bt.closest('.div_question').find('table').eq(0).find('thead').children().children().eq(i + 1).html('Col' + (i + 1))
    }
    form[0].reset();
}


function areaheight(e) {
    var bt = $(e.target);
    var textarea = bt.closest('.div_question').find('textarea').eq(0);
    textarea.attr('rows', bt.val())
}


function clearForm_blank(e) {
    var bt = $(e.target);
    var val = bt.parent().parent().children().eq(1).val();
    var form = bt.closest('form');
    var txt = bt.closest('.div_question').find('textarea');
    txt.parent().prev().find('h5').eq(1).html('Question' + ' ' + val);
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
        '                                                                            <input type="button" class=\"btn mr-1 btn-info\" value=\'增加填空符\' onclick=\"addblank(event,\'choice\')\" name="allowblank">\n' +
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
        $("#" + (i - 1)).find($('[name = "questionnumber"]')).attr('value', i - 1);

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
        url: '/administrator/choice_add',
        success: function (data) {
            console.log(data)
        }
    });
}

function submit_blank(e) {
    e.preventDefault();
    var a = $(e.target);
    var form = a.closest('.form-horizontal');
    console.log(form);
    $.ajax({
        type: 'post',
        data: form.serialize(),
        url: '/administrator/blank_add',
        success: function (data) {
            console.log(data)
        }
    });
}

function submit_answer(e) {
    e.preventDefault();
    var a = $(e.target);
    var form = a.closest('.form-horizontal');
    console.log(form);
    $.ajax({
        type: 'post',
        data: form.serialize(),
        url: '/administrator/answer_add',
        success: function (data) {
            console.log(data)
        }
    });
}

function submit_matrix(e) {
    e.preventDefault();
    var a = $(e.target);
    var form = a.closest('.form-horizontal');
    console.log(form);
    $.ajax({
        type: 'post',
        data: form.serialize(),
        url: '/administrator/matrix_add',
        success: function (data) {
            console.log(data)
        }
    });
}

function submit_form(e) {
    e.preventDefault();
    var a = $(e.target);
    var form = a.closest('.form-horizontal');
    console.log(form);
    $.ajax({
        type: 'post',
        data: form.serialize(),
        url: '/administrator/form_add',
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

function hide_edit(event) {
    var next = event.currentTarget.parentElement;
    $(next).hide();
}

function hide_edit_blank(event) {
    var next = event.currentTarget.parentElement.parentElement;
    $(next).hide()
}

function synchronize_matrix(event) {
    var question_titles = event.parentElement.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[1].children; //tbody里的tr
    var lines = $(event).val().split(/\n/);
    for (var i = 0; i < lines.length; i++) {
        question_titles[i].firstElementChild.innerHTML = lines[i];
        if (lines[i] === '') {
            question_titles[i].firstElementChild.innerHTML = 'Row' + (i + 1)
        }
    }
}

function matrix_title_split(event) {
    var text_edit = event.currentTarget;
    var question_titles = text_edit.parentElement.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[1].children; //tbody里的tr
    var question_table = text_edit.parentElement.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[1]; //上面的tbody
    var lines = $(text_edit).val().split(/\n/);
    if (lines.length > question_titles.length) {
        var a = lines.length;
        $("<tr>\n" +
            "                                                                        <td>" + 'Row' + a + "</td>\n" +
            "                                                                    </tr>").appendTo(question_table);
        column_length = $(event.currentTarget).closest('.div_question').find('thead').children().children().length;
        var target = $(question_titles).last();
        for (i = 0; i < column_length - 1; i++) {
            target.append("<td><a class=\"ft-circle\"></a></td>\n")
        }
        synchronize_matrix(text_edit);
    } else if (lines.length < question_titles.length) {
        $(question_titles[question_titles.length - 1]).remove();
        synchronize_matrix(text_edit);
    } else {
        synchronize_matrix(text_edit);
    }
}

function synchronize_table(event) {
    var question_titles = event.parentElement.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[1].children; //tbody里的tr
    var lines = $(event).val().split(/\n/);
    for (var i = 0; i < lines.length; i++) {
        question_titles[i].firstElementChild.innerHTML = lines[i];
        if (lines[i] === '') {
            question_titles[i].firstElementChild.innerHTML = 'Row' + (i + 1)
        }
    }
}

function table_title_split(event) {
    var text_edit = event.currentTarget;
    var question_table = text_edit.parentElement.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[1]; //tbody
    var question_titles = question_table.children; //tbody里的tr
    var lines = $(text_edit).val().split(/\n/);
    if (lines.length > question_titles.length) {
        var a = lines.length;
        $("<tr>\n" +
            "                                                                        <td>" + 'Row' + a + "</td>\n" +
            "                                                                    </tr>").appendTo(question_table);
        column_length = $(event.currentTarget).closest('.div_question').find('thead').children().children().length;
        var target = $(question_titles).last();
        for (i = 0; i < column_length - 1; i++) {
            target.append("<td><textarea disabled style='width: 100%'></textarea></td>\n")
        }
        synchronize_table(text_edit);
    } else if (lines.length < question_titles.length) {
        $(question_titles[question_titles.length - 1]).remove();
        synchronize_table(text_edit);
    } else {
        synchronize_table(text_edit);
    }
}

function synchronize_table_col(event) {
    var question_titles = event.parentElement.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[0].children[0];//tbody里的tr
    var lines = $(event).val().split(/\n/);
    for (var i = 0; i < lines.length; i++) {
        question_titles.children[i + 1].innerHTML = lines[i];
        if (lines[i] === '') {
            question_titles.children[i + 1].innerHTML = 'Col' + (i + 1)
        }
    }
}

function table_choice_split(event) {
    var text_edit = event.currentTarget;
    var question_titles = text_edit.parentElement.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[1].children; //tbody的tr
    var choice_name = text_edit.parentElement.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[0].firstElementChild.children; //thead里的td
    var question_table = text_edit.parentElement.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[1].closest('table'); // 上面的table
    var lines = $(text_edit).val().split(/\n/);
    var add_choice = $('<td><textarea disabled style=\'width: 100%\'></textarea></td>');
    if (lines.length > (choice_name.length - 1)) {
        a = lines.length;
        add_choice.appendTo(question_titles);
        var Cell = $('<td>' + 'Col' + a + '</td>');
        var thead = text_edit.parentElement.parentElement.parentElement.previousElementSibling.children[1].firstElementChild.children[0].children[0]; //thead里的tr
        Cell.appendTo(thead);
        synchronize_table_col(text_edit);
    } else if (lines.length < (choice_name.length - 1)) {
        var index = lines.length;
        $(question_table).find('tr').each(function () {
            var target = $(this);
            var td = target.children();
            for (i = index + 1; i < td.length; i++) {
                $(td[i]).remove();
            }
        });
        synchronize_table_col(text_edit);
    } else {
        synchronize_table_col(text_edit);
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

function addcolumn(event) {
    var e = event.currentTarget;
    var table = e.closest('form').firstElementChild.children[1].firstElementChild;
    var choice_add = e.parentElement.previousElementSibling.firstElementChild;
    $(choice_add).append('<tr>\n' +
        '<td>\n' +
        '<input type="text" name="choice"\n' + 'onkeyup="matrix_text_swap(event)">\n' +
        '<a><i class="ft-minus-circle" onclick="minuscolumn(event)"></i></a>\n' +
        '</td>\n' +
        '<td>\n' +
        '<input name=\"allowblank\" type=\"button\" class=\"btn mr-1 btn-info\" value=\'增加填空符\' onclick=\"addblank(event,\'matrix\')\">\n' +
        '</td>\n' +
        '<td>\n' +
        '<a onclick="moveleft(event)"><i class="ft-arrow-up"></i></a>\n' +
        '<a onclick="moveright(event)"><i class="ft-arrow-down"></i></a>\n' +
        '</td>\n' +
        "</tr>')\n");
    //console.log(table);
    $(table).find('tr').each(function () {
        var target = $(this);
        var length = $(table).find('thead').children().children().length;
        if (target.parent().get(0) == table.firstElementChild) { //&& (target.parent() === $(table.children[0]))){
            target.append('<td>' + 'Col' + length + '</td>');
        } else {
            target.append('<td><a class="ft-circle"></a></td>');
        }
    })
}

function moveleft(event) {
    a = $(event.target);
    index = a.closest('tr').index();
    column = $(event.target).closest('.div_question').find('table')[0].rows[0].cells[index];
    console.log($(column).prev());
    if (index > 1) {
        $(column).insertBefore($(column).prev());
        $(a.closest('tr')).insertBefore($(a.closest('tr')).prev());
    }
}

function moveright(event) {
    a = $(event.target);
    index = a.closest('tr').index();
    column = $(event.target).closest('.div_question').find('table')[0].rows[0].cells[index];
    next = a.parent().parent().parent().next();
    if (next) {
        $(column).insertAfter($(column).next());
        $(a.closest('tr')).insertAfter($(a.closest('tr')).next());
    }
}


function addblank(event, type) {
    questiontype = type;
    a = $(event.target);
    blank = a.closest('tr').find('input[name="choice"]');
    blank.val(blank.val() + '___');
    if (questiontype === 'matrix') {
        var thead = a.closest('form').find('thead');
        thead.children().children().eq(a.closest('tr').index())[0].innerHTML = blank.val();
    }
    else if(questiontype === 'choice'){
        a.closest('.div_question').find('.choice_list').children().eq(a.closest('tr').index() - 1).find('span').html(blank.val())
    }
}

function minuscolumn(event) {
    var e = event.currentTarget;
    var table = e.closest('form').firstElementChild.children[1].firstElementChild;
    // console.log($(e).closest('.div_question').find('table')[1]); //下面的table
    // console.log($(e).closest('tr').index()); //要删第几行
    var index = $(e).closest('tr').index();
    var length = $(e).closest('tbody').children().length;
    for (i = index + 1; i <= length - 1; i++) {
        if ($(e).closest('tbody').children().eq(i).find("input[name='choice']")[0].value === '') {
            // console.log($(table).find('thead').children().children().eq(i));
            $(table).find('thead').children().children().eq(i).html('Col' + (i - 1))
        }
    }
    $(table).find('tr').each(function () {
        var target = $(this);
        var td = target.children();
        // console.log(td);
        $(td[index]).remove();
    });
    $(e.closest('tr')).remove();

}

function matrix_text_swap(event) {
    var e = event.currentTarget;
    var table = e.closest('tbody');
    var thead = e.closest('form').firstElementChild.children[1].firstElementChild.children[0].firstElementChild.children;
    thead[$(e.closest('tr')).index()].innerHTML = $(e).val();
    if($(e).val() === ''){
        thead[$(e.closest('tr')).index()].innerHTML = 'Col' + $(e.closest('tr')).index()
    }
}

function attachmentfilling() {

}
