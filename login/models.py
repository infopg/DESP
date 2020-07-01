# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django.contrib.auth.models import AbstractUser
from datetime import datetime


class TableUser(AbstractUser):
    # password = None
    # last_login = None
    # is_superuser = None
    # username = None
    # first_name = None
    # last_name = None
    # email = None
    # is_staff = None
    # is_active = None
    # date_joined = None
    user_type_choices = (
        (0, 'Super administrator'),
        (1, 'Administrator'),
        (2, 'Organization manager'),
        (3, 'Organization user'),
        (4, 'Specialist')
    )
    table_user_col_id = models.AutoField(db_column='Table_User_col_id', primary_key=True)  # Field name made lowercase.
    table_user_col_type_id = models.IntegerField(db_column='Table_User_col_type_id', choices=user_type_choices,
                                                 null=True)  # Field name made lowercase.
    table_user_col_type = models.CharField(db_column='Table_User_col_Type', max_length=256, null=True)
    table_user_col_name = models.CharField(db_column='Table_User_col_Name', max_length=30)
    table_user_col_real_name = models.CharField(db_column='Table_User_col_Real_Name', max_length=30, null=True)
    # Field name made lowercase.
    table_user_col_organization_id = models.CharField(db_column='Table_User_col_Organization_id',
                                                      max_length=256)  # Field name made lowercase.
    table_user_col_mobile = models.CharField(db_column='Table_User_col_Mobile',
                                             max_length=128)  # Field name made lowercase.
    table_user_col_tel = models.CharField(db_column='Table_User_col_Tel', max_length=128)  # Field name made lowercase.
    table_user_col_address = models.CharField(db_column='Table_User_col_Address',
                                              max_length=128)  # Field name made lowercase.
    table_user_col_password = models.CharField(db_column='Table_User_col_Password',
                                               max_length=256)  # Field name made lowercase.
    table_user_col_email = models.CharField(db_column='Table_User_col_Email',
                                            max_length=128, verbose_name='邮箱')  # Field name made lowercase.
    table_user_col_title = models.CharField(db_column='Table_User_col_Title',
                                            max_length=128)  # Field name made lowercase.
    table_user_col_postcode = models.CharField(db_column='Table_User_col_Postcode',
                                               max_length=128)  # Field name made lowercase.
    table_user_col_department = models.CharField(db_column='Table_User_col_Department',
                                                 max_length=128)  # Field name made lowercase.
    table_user_col_work_field = models.CharField(db_column='Table_User_col_Work_Field',
                                                 max_length=128)  # Field name made lowercase.
    table_user_col_sex = models.CharField(db_column='Table_User_col_Sex', max_length=128,
                                          null=True)  # Field name made lowercase.
    table_user_col_create_time = models.DateTimeField(
        db_column='Table_User_col_Create_Time', null=True)  # Field name made lowercase.
    table_user_col_modify_time = models.DateTimeField(
        db_column='Table_User_col_Modify_Time', null=True)  # Field name made lowercase.
    table_user_col_nationality_id = models.IntegerField(
        db_column='Table_User_col_Nationality_id', null=True)  # Field name made lowercase.
    table_user_col_bachelor = models.CharField(db_column='Table_User_col_Bachelor', max_length=128,
                                               null=True)  # Field name made lowercase.
    table_user_col_memo = models.CharField(db_column='Table_User_col_Memo',
                                           max_length=256)  # Field name made lowercase.

    table_user_col_code = models.CharField(max_length=20, verbose_name='验证码', null=True)
    table_user_col_send_type = models.CharField(verbose_name='验证码类型', choices=(('register', '注册'), ('forget', '忘记密码')),
                                                max_length=20, null=True)
    table_user_col_send_time = models.DateTimeField(verbose_name='发送时间', default=datetime.now)
    table_user_col_birth = models.CharField(db_column='Table_User_col_Birth', default='1990-01-01', max_length=128)
    table_user_col_IdentityID = models.CharField(db_column='Table_User_col_IdentityID', null=True,max_length=128)

    class Meta:
        managed = True
        db_table = 'Table_User'
        verbose_name = '邮箱验证码'
        verbose_name_plural = verbose_name

    def __str__(self):
        return '{0}({1})'.format(self.table_user_col_code, self.table_user_col_email)
