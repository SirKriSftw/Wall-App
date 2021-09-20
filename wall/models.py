from django.db import models

class Entry(models.Model):
   message = models.CharField(max_length=250)

   def _str_(self):
     return self.message