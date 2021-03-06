# Generated by Django 3.1 on 2020-10-28 16:31

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TableQuestionaire',
            fields=[
                ('table_questionaire_col_id', models.IntegerField(db_column='Table_Questionaire_col_id', primary_key=True, serialize=False)),
                ('table_questionaire_col_organization_id', models.CharField(db_column='Table_Questionaire_col_organization_id', max_length=50)),
                ('table_questionaire_col_organization_contact', models.CharField(db_column='Table_Questionaire_col_organization_contact', max_length=50)),
                ('table_questionaire_col_organization_email', models.CharField(db_column='Table_Questionaire_col_organization_email', max_length=50)),
                ('table_questionaire_col_indicator_id', models.CharField(db_column='Table_Questionaire_col_indicator_id', max_length=50)),
                ('table_questionaire_col_question_id', models.CharField(db_column='Table_Questionaire_col_question_id', max_length=50, unique=True)),
                ('table_questionaire_col_question_number', models.CharField(db_column='Table_Questionaire_col_question_number', max_length=50)),
                ('table_questionaire_col_question_content', models.CharField(db_column='Table_Questionaire_col_question_content', max_length=50)),
                ('table_questionaire_col_question_status', models.CharField(db_column='Table_Questionaire_col_question_status', max_length=50)),
            ],
            options={
                'db_table': 'Table_Questionaire',
                'managed': True,
            },
        ),
    ]
