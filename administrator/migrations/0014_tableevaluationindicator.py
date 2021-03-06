# Generated by Django 3.1.3 on 2020-12-22 11:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('administrator', '0013_auto_20201029_1510'),
    ]

    operations = [
        migrations.CreateModel(
            name='TableEvaluationIndicator',
            fields=[
                ('table_evaluation_indicator_col_id', models.IntegerField(db_column='Table_Evaluation_Indicator_col_id', primary_key=True, serialize=False)),
                ('table_evaluation_indicator_col_name', models.CharField(db_column='Table_Evaluation_Indicator_col_Name', max_length=50)),
                ('table_evaluation_indicator_col_weight', models.DecimalField(db_column='Table_Evaluation_Indicator_col_Weight', decimal_places=2, max_digits=10)),
                ('table_evaluation_indicator_col_evaluation_name', models.CharField(db_column='Table_Evaluation_Indicator_col_Evaluation_Name', max_length=50)),
                ('table_evaluation_indicator_col_administrator_id', models.IntegerField(db_column='Table_Evaluation_Indicator_col_Administrator_id')),
                ('table_evaluation_indicator_col_administrator_name', models.CharField(db_column='Table_Evaluation_Indicator_col_Administrator_Name', max_length=50)),
                ('table_evaluation_indicator_col_parent_name', models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.PROTECT, to='administrator.tableevaluationindicator', verbose_name='父部门')),
            ],
            options={
                'db_table': 'Table_Evaluation_Indicator',
                'managed': True,
            },
        ),
    ]
