from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.shortcuts import redirect


def go_back(request):
    get_app = request.GET.get('app')
    if str(get_app) == "expert":
        return render(request, 'expert/expert.html')
    elif str(get_app) == "manager":
        return render(request, 'manager/manager.html')
    else:
        return render(request, 'user/user.html')




def details_comparison(request):
    check_app = request.GET.get('app')
    return render(request, 'visual/details_comparison.html', {'check_app': check_app})

def overview_research(request):
    check_app = request.GET.get('app')
    return render(request, 'visual/overview_research.html', {'check_app': check_app})

def overview_institute(request):
    check_app = request.GET.get('app')
    return render(request, 'visual/overview_institute.html', {'check_app': check_app})

def overview_system(request):
    check_app = request.GET.get('app')
    return render(request, 'visual/overview_zcdw.html', {'check_app': check_app})

def network_manage(request):
    check_app = request.GET.get('app')
    return render(request, 'visual/network_manage.html', {'check_app': check_app})

def network_tech(request):
    check_app = request.GET.get('app')
    return render(request, 'visual/network_tech.html', {'check_app': check_app})

def app_education(request):
    check_app = request.GET.get('app')
    return render(request, 'visual/app_education.html', {'check_app': check_app})

def app_manage(request):
    check_app = request.GET.get('app')
    return render(request, 'visual/app_manage.html', {'check_app': check_app})

def app_research_calculate(request):
    check_app = request.GET.get('app')
    return render(request, 'visual/app_research_calculate.html', {'check_app': check_app})

def app_research_cloud(request):
    check_app = request.GET.get('app')
    return render(request, 'visual/app_research_cloud.html', {'check_app': check_app})

def app_research_data(request):
    check_app = request.GET.get('app')
    return render(request, 'visual/app_research_data.html', {'check_app': check_app})

def app_research_share(request):
    check_app = request.GET.get('app')
    return render(request, 'visual/app_research_share.html', {'check_app': check_app})

def app_science(request):
    check_app = request.GET.get('app')
    return render(request, 'visual/app_science.html', {'check_app': check_app})

def env_infrastructure(request):
    check_app = request.GET.get('app')
    return render(request, 'visual/env_infrastructure.html', {'check_app': check_app})

def env_management(request):
    check_app = request.GET.get('app')
    return render(request, 'visual/env_management.html', {'check_app': check_app})

def env_resource(request):
    check_app = request.GET.get('app')
    return render(request, 'visual/env_resource.html', {'check_app': check_app})

def comparison(request):
    return render(request, 'visual/chartjs3_1.html')

def comparison2(request):
    return render(request,'visual/chartjs3_2.html')

def comparison3(request):
    return render(request,'visual/chartjs3_3.html')

def comparison4(request):
    return render(request,'visual/chartjs3_4.html')

def comparison5(request):
    return render(request,'visual/chartjs3_5.html')

