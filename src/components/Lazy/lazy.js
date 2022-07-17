import { useEffect, useState } from 'react';
import {Suspense } from 'react';

//const testFunc=lazy(()=>import('./testfuncs'));
//console.log(testFunc);

const Lazy=()=>{
    
    const [test,setTest]=useState('');


    // useEffect(()=>{        
    //     import('./testfuncs')
    //     .then(obj=>setTest(obj.testFunc()))
    //     .catch(console.log);
    // },[])

    //-----АСИНХРОННАЯ ДИСТРУКТУРИЗАЦИЯ ИМПОРТА ОБЪЯЕКТА
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // useEffect(async()=>{
    //     const {testFunc}=await import('./testfuncs');
    //     setTest(await testFunc());
    // },[])

    //--ИМПОРТ ЭКСПОРТИРОВАННОГО  В DEFAULT
    useEffect(()=>{
        import('./testfuncs').then(obj=>setTest(obj.default()));
    },[])

    return(
        <div>
            <Suspense fallback={<h1>L⏱ading...</h1>}>
            Import file in  promise-object and call func - {test}
            </Suspense>
        </div>
    )

}

export default Lazy;