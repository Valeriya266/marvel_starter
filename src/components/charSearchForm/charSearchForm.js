import useMarvelService from '../../services/MarvelService';
import { Formik, Form} from 'formik';
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
                    <h2>Or find a character by name:</h2>
                    <MyTextInput
                        label="Enter name"
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="off"
                    />  
                    <button type="submit">FIND</button>
            </Form>
        </Formik>
    )          
}


export default CharSearchForm;