from django.db import models


# Create your models here.

class TableEvaluationIndicator(models.Model):
    table_evaluation_indicator_col_id = models.IntegerField(db_column='Table_Evaluation_Indicator_col_id',
                                                            primary_key=True)  # Field name made lowercase.
    table_evaluation_indicator_col_name = models.CharField(db_column='Table_Evaluation_Indicator_col_Name',
                                                           max_length=50)  # Field name made lowercase.
    # table_evaluation_indicator_col_root = models.CharField(db_column='Table_Evaluation_Indicator_col_Root',
    #                                                        max_length=50)  # Field name made lowercase.
    # table_evaluation_indicator_col_parent_id = models.IntegerField(db_column='Table_Evaluation_Indicator_col_Parent_id',
    #                                                                blank=True, null=True)  # Field name made lowercase.
    # table_evaluation_indicator_col_parent_name = models.CharField(
    #     db_column='Table_Evaluation_Indicator_col_Parent_Name', max_length=50, blank=True,
    #     null=True)  # Field name made lowercase.
    table_evaluation_indicator_col_parent_name = models.ForeignKey('self', on_delete=models.PROTECT, db_constraint=False,
                               null=True, blank=True, verbose_name='父部门')
    table_evaluation_indicator_col_weight = models.DecimalField(db_column='Table_Evaluation_Indicator_col_Weight',
                                                                max_digits=10,
                                                                decimal_places=2)  # Field name made lowercase.
    table_evaluation_indicator_col_evaluation_name = models.CharField(
        db_column='Table_Evaluation_Indicator_col_Evaluation_Name', max_length=50)  # Field name made lowercase.
    table_evaluation_indicator_col_administrator_id = models.IntegerField(
        db_column='Table_Evaluation_Indicator_col_Administrator_id')  # Field name made lowercase.
    table_evaluation_indicator_col_administrator_name = models.CharField(
        db_column='Table_Evaluation_Indicator_col_Administrator_Name', max_length=50)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'Table_Evaluation_Indicator'
