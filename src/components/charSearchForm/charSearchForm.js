import useMarvelService from '../../services/MarvelService';
import { Formik, Field, Form, ErrorMessage, useField } from 'formik';
import * as Yup from 'yup';

import './charSearchForm.scss';

const CharSearchForm = () => {
    return (
        <Formik
        initialValues = {{
            name: ''
        }}
        validationSchema = {Yup.object({
            name: Yup.string()
                    .min(2, 'Минимум 2 символа для заполнения')
                    .required('Обязательное поле!'),
        })}
        onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
        >
        <Form className="form">
                <h2>Отправить пожертвование</h2>
                <MyTextInput
                    label="Ваше имя"
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="off"
                />  
                <button type="submit">Отправить</button>
        </Form>
        </Formik>
    )          
}


export default CharSearchForm;