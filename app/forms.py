from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired 
from flask_wtf.file import FileField, FileRequired, FileAllowed
from wtforms import TextAreaField

class UploadForm(FlaskForm):
    dscp = TextAreaField('description', validators=[DataRequired()])
    iamg = FileField('photo', validators=[FileRequired(), FileAllowed(['jpg', 'jpeg', 'png'],  'Images only!')])