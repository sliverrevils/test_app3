


import './hoc.css';

const View=({name='none',age=0})=><h2>Name : {name}, Age : {age}</h2>

const WithData=({Component,data})=><Component {...data}/>

//передаем и деструктуризируем параметры в массиве
const WithStyle=({data:[Comp,data,style,text]})=><div style={style}><h2>{text}</h2> <Comp {...data}/> </div>
//оборачиваем компонент в див и оборачиваем в  полученный стиль
const CssStyle=(Component)=>(css)=><div style={css}><Component/></div>

//используется - Шаблонизация 
const CssStyle2=(Component)=>(cssStyle)=><div ref={el=>{el?.style&&(el.style.cssText=cssStyle)}}><Component/></div>


const Hoc = () => {
    return (
        <div className='Hoc'>
            <h1>Hight Order Component</h1>
            <h4>вызываем НОС как функцию</h4>
            {WithData({ Component: View, data: { name: 'Nik', age: 36 } })}
            <h4>вызываем НОС как компонент</h4>
            <WithData Component={View} data={{ name: 'Nik', age: 36 }} />
            <h4>передаем и деструктуризируем параметры в массиве</h4>
            <WithStyle {...{ data: [View, { name: 'Kate', age: 34 }, { border: '1px solid pink' }, 'Bobrusha'] }} />
            <h4>оборачиваем компонент в див и оборачиваем в  полученный стиль</h4>
            {CssStyle(View)({ background: 'blue' })}
            <h4>используется - Шаблонизация </h4>
            {CssStyle2(View)`color:white;background:black;border-radius:10px;padding:10px`}
                <hr />
            <input type="text" />
        </div>
    )
}

export default Hoc;