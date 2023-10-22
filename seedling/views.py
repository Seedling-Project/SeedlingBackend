import geocoder as geocoder
from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
from django.template import loader
import requests
from datetime import datetime

now = datetime.now()

#I installed geocoder, for testing, remove that dependency later on.

def display(request):
    endpoint = "https://api.open-meteo.com/v1/forecast"
    location = geocoder.ip('me').latlng
    api_request = f"{endpoint}?latitude={location[0]}&longitude={location[1]}&hourly=temperature_2m"
    now = datetime.now()
    hour = now.hour
    meteo_data = requests.get(api_request).json()
    temp = meteo_data['hourly']['temperature_2m'][hour]
    template = loader.get_template('index.html')
    context = {'temp': temp}
    return HttpResponse(template.render(context, request))
