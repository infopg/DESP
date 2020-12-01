from django.shortcuts import render
from administrator.models import TableTimeliner
from login.models import TableUser
from supervisor.models import TableEvaluation
# Create your views here.
def timeliner1(request):
    # pdb.set_trace()
    # administrator = request.session['user_name']
    # current_eval = request.GET.get('timeevalname')
    evalname = TableEvaluation.objects.all().values('table_evaluation_col_name')
    print(evalname)
    timeevalname = TableTimeliner.objects.values('table_timeliner_col_evaluation').distinct().order_by(
        'table_timeliner_col_evaluation')
    print(timeevalname)
    timeline_list = TableTimeliner.objects.filter(
        table_timeliner_col_evaluation=request.GET.get('timeevalname')).order_by('table_timeliner_col_start')
    dateline_list = TableTimeliner.objects.filter(
        table_timeliner_col_evaluation=request.GET.get('timeevalname')).order_by('table_timeliner_col_start')
    date_length = len(dateline_list)
    order_list = []
    order_count = 0
    while order_count < date_length:
        order_list.append(dateline_list.values_list('table_timeliner_col_id')[order_count][0])
        order_count = order_count + 1
    dateline =TableTimeliner.objects.filter(pk__in=order_list)
    for date in dateline:
        date_start = date.table_timeliner_col_start
        date_new_start = str(date_start).replace('-', '/')
        date_use_start = date_new_start[-2:] + date_new_start[4:8] + date_new_start[0:4]
        date.table_timeliner_col_start = date_use_start
        date_end = date.table_timeliner_col_end
        date_new_end = str(date_end).replace('-', '/')
        date_use_end = date_new_end[-2:] + date_new_end[4:8] + date_new_end[0:4]
        date.table_timeliner_col_end = date_use_end
    print(timeline_list)
    return render(request, 'manager/timeliner1.html',
                  {'evalname': evalname, 'timeevalname': timeevalname,
                   'timeline_list': timeline_list, 'dateline': dateline})


def visualization(request):
    check_app = request.GET.get('app')
    return render(request, 'visual/overview_research.html', {'check_app': check_app})

def go_back(request):
    get_app = request.GET.get('timeevalname')
    return render(request, 'manager/timeliner1.html', {'check_app': check_app})