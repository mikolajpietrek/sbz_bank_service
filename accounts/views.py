from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm
from django.urls import reverse_lazy
from django.views import generic
from django.http import HttpResponseRedirect

from .forms import CustomUserCreationForm
 
def SignUp(request):
    if request.method == 'POST':
        f = CustomUserCreationForm(request.POST)
        if f.is_valid():
            f.save()
            return HttpResponseRedirect('/signup_complete')
    else:
        f = CustomUserCreationForm()
 
    return render(request, 'signup.html', {'form': f})
	
	
# Create your views here.
#class SignUp(generic.CreateView):
#    form_class = UserCreationForm
#    success_url = reverse_lazy('login')
#    template_name = 'signup.html'
