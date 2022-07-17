

import './FormikComp.css';

import {useFormik} from 'formik';
import * as Yup from 'yup';

//ВЕРИФИКАЦИЯ 
//РУЧНАЯ
// const validate=(values)=>{ //создаем функцию валидации которую указываем в параметрах хука
//     const errors={};

//     if(!values.name)errors.name='Обязательное поле';
//     else if(values.name.length<2)errors.name='Мин 2 символа';

//     if(!values.email)errors.email='Обязательное поле';
//     else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))errors.email='Не верная запись почты';

//     return errors;
// }


//---ГЛАВНЫЙ КОМПОНЕНТ
const FormikComp=()=>{
    //---СОЗДАЕМ ПЕРЕМЕННУЮ С ХУКА И УКАЗЫВАЕМ НАЧАЛЬНЫЕ ЗНАЧЕНИЯ ИНПУТОВ-----!!!
    const formik=useFormik({ 
        initialValues:{ // начальные значения инпутов , используются  по name атрибутов
            name:'',
            email:'',
            amount:0,
            currency:'',
            text:'',
            terms:false
        },
        //validate,//срабатывает при каждом handleChange, результатом заполняет объект formik.errors
        //---------Указываем валидацию формика по схеме испоьзуя Yup-валидации----!!!!
        validationSchema:Yup.object({ //ВАЛИДАЦИЯ С YUP (указываем поле и вызываем ченинг(цепочку) функций проверки и возвращающих указываемый текст)
            name:Yup.string().min(2,'Минимум 2 символа').required('Обязательное поле'),
            email:Yup.string().email('Не верная запись почты').required('Обязательное поле'),
            amount:Yup.number().min(5,'Мин 5').required('Обязательное поле'),
            currency:Yup.string().required('Укажите валюту'),
            text:Yup.string().min(10,'Мин 10 сиволов'),
            terms:Yup.boolean().required('Необходимо согласие').oneOf([true],'Необходимо согласие')
        }),
        onSubmit:values=>console.log(JSON.stringify(values)), //перевод объекта в строку для вывода 
        
    });

    //console.log(formik);

// добавляем в форме onSubmit={formik.handleSubmit}

//---Связываем инпуты через формик
//value={formik.values.name}
//onChange={formik.handleChange}
//onBlur={formik.handleBlur} // записывает в formik.touched // можно использовать в проверке отображения ошибок 

//принимаем имя поля и проверяем наличие ошибок и блур
const showError=field=>formik.errors[field]&&formik.touched[field]?<div style={{color:'red',fontSize:12,fontWeight:'bold'}}>{formik.errors[field]}</div>:null

    return(
        <div className='Formic'>
            <h1>Formic - через useFormik</h1>
            <form className="form" onSubmit={formik.handleSubmit}>
            <h2>Отправить пожертвование</h2>
            <label htmlFor="name">Ваше имя</label>
            <input
                id="name"
                name="name"
                type="text"
                {...formik.getFieldProps('name')}
            />
            {showError('name')}
            <label htmlFor="email">Ваша почта</label>
            <input
                id="email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {showError('email')}
            <label htmlFor="amount">Количество</label>
            <input
                id="amount"
                name="amount"
                type="number"
                value={formik.values.amount}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {showError('amount')}
            <label htmlFor="currency">Валюта</label>
            <select
                id="currency"
                name="currency"
                value={formik.values.currency}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                >
                    <option value="">Выберите валюту</option>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="RUB">RUB</option>
            </select>
            {showError('currency')}
            <label htmlFor="text">Ваше сообщение</label>
            <textarea 
                id="text"
                name="text"
                value={formik.values.text}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            {showError('text')}
            <label className="checkbox">
                <input 
                name="terms" 
                type="checkbox" 
                value={formik.values.terms}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
                Соглашаетесь с политикой конфиденциальности?
            </label>
            {showError('terms')}
            <button type="submit">Отправить</button>
        </form>
        </div>
    )
}


export default FormikComp