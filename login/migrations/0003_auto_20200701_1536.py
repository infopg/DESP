# Generated by Django 3.0.5 on 2020-07-01 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0002_auto_20200701_1534'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tableuser',
            name='table_user_col_code',
            field=models.CharField(max_length=20, null=True, verbose_name='验证码'),
        ),
    ]
