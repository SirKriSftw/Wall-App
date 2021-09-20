from django.shortcuts import render
from .serializers import EntrySerializer
from rest_framework import viewsets
from .models import Entry

class EntryView(viewsets.ModelViewSet):
    serializer_class = EntrySerializer
    queryset = Entry.objects.all()