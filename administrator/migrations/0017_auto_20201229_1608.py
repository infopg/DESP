# Generated by Django 3.1.2 on 2020-12-29 16:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('administrator', '0016_auto_20201229_1541'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tableuploadfile',
            name='table_upload_file_col_cover',
            field=models.CharField(db_column='Table_Upload_File_col_cover', max_length=256),
        ),
        migrations.AlterField(
            model_name='tableuploadfile',
            name='table_upload_file_col_evaluation',
            field=models.CharField(db_column='Table_Upload_File_col_evaluation', max_length=256),
        ),
        migrations.AlterField(
            model_name='tableuploadfile',
            name='table_upload_file_col_name',
            field=models.CharField(db_column='Table_Upload_File_col_name', max_length=256),
        ),
        migrations.AlterField(
            model_name='tableuploadfile',
            name='table_upload_file_col_time',
            field=models.CharField(db_column='Table_Upload_File_col_time', max_length=256),
        ),
        migrations.AlterField(
            model_name='tableuploadfile',
            name='table_upload_file_col_timeliner',
            field=models.CharField(db_column='Table_Upload_File_col_timeliner', max_length=256),
        ),
    ]
