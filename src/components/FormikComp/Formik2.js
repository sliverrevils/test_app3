
import { type } from '@testing-library/user-event/dist/type';
import {Formik,Field,Form,ErrorMessage,useField} from 'formik';
import * as Yup from 'yup';

import './FormikComp.css';

const MyTextField = ({label, ...props }) => {
    const [field, meta, helpers] = useField(props);
    console.log(meta);
    return (
        <>
            <label htmlFor='props.name'>{label}
                <input type="text" {...props} {...field}  />
            </label>
            {meta.error&&meta.touched?<h3>{meta.error}</h3>:null}
        </>
    )
}

const MyCheckBox=({children,...props})=>{
const [field,meta]=useField({...props,type:'checkbox'})
    return(
        <>
        <label>
            <p>
            <input type="checkbox" {...props} {...field}/>            
            {children}
            </p>
            <b>{meta.touched&&meta.error?meta.error:null}</b>
        </label>
        </>
    )
}

const Formik2=()=>(
    <div className='Formik'>
        <h1>Formik 2 - через Компонент</h1>
        <h3>передаем параметрами начальные значения , схему валидации и онСабмит</h3>

            <Formik initialValues={{name:'',email:'',text:''}}
            validationSchema={Yup.object({
                name:Yup.string().min(5,'MIn 5').required('Name Must be'),
                email:Yup.string().email('Wrong mail').required('Email must be'),
                text:Yup.string().min(5,'Min 10'),
                myfield:Yup.string().min(3,'Min -3').max(10,'Max -10').trim('no spases'),
                mycheck:Yup.boolean().required('Must be checked!').oneOf([true],'Need to accept')

                })}
                onSubmit={value=>console.log(JSON.stringify(value,null,2))}
                >
                    <Form className='Formic'>
                        <label htmlFor='name'> Name</label>
                        <Field id='name' name='name' type='text'/>
                        <ErrorMessage className='Error' name='name' component='div' />

                        <Field id='email' name='email' type='text'/>
                        <ErrorMessage className='Error' name='email' component='div'/>
                        <Field id='text' name='text' as='textarea'  />
                        <ErrorMessage className='Error' name='text' component='h1'/>
                        <MyTextField label='useField' type='text' name='myfield' />
                        <MyCheckBox name='mycheck'>Accept</MyCheckBox>
                        <button type='submit' > OK</button>
                    </Form>
                
            </Formik>
    </div>
)

export default Formik2;