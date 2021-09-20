from django.contrib import admin
from .models import Entry

class WallAdmin(admin.ModelAdmin):
    list = ('message')

admin.site.register(Entry, WallAdmin)
