from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Item(models.Model):
  _id = models.AutoField(primary_key=True, editable=False)
