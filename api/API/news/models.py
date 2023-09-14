from django.db import models


CATEGORY_CHOICES = (
    ("sport", "sport"),
    
)


class News(models.Model):
    title = models.CharField(max_length=255)
    category = CATEGORY_CHOICES
    view = models.IntegerField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    intro = models.TextField()
    body = models.TextField()
    image = models.ImageField(upload_to="images/%Y/%m/%d/")

    class Meta:
        verbose_name = "news"
        verbose_name_plural = "news"

    def __str__(self):
        return self.title
    
