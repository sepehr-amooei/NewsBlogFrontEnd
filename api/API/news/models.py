from django.db import models


CATEGORY_CHOICES = (
    ("sport", "sport"),
    ("movie", "movie"),
    ("celebrity", "celebrity"),
)


class News(models.Model):
    title = models.CharField(max_length=255)
    category = models.CharField(
        max_length = 20,
        choices = CATEGORY_CHOICES,
        default = 'sport'
        )
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
    
