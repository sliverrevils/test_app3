
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Link, NavLink, Routes, Outlet, useParams, useNavigate, Navigate } from 'react-router-dom'
import './myrouter.css';
const MyRouter = () => {

const activeStyle=({isActive})=>isActive?{backgroundColor:'blue',color:'white'}:{backgroundColor:'white',color:'black'};

const [range,setRange]=useState();

    return (
        <BrowserRouter>
            <div className='Routes'>
                
                <h1>Routes</h1>
                <div style={{display:'flex',flexDirection:'column'}}>
                    <ul>                        
                        <li ><NavLink to='route2'> Route 2</NavLink></li>
                        <li><NavLink to='route3'> Route 3 Outlet</NavLink></li>
                        <li>
                        <NavLink to={`route4/:${range}`} > Route 4 -range path /{range} </NavLink>
                            <input type="range" onChange={e=>setRange(e.target.value)} value={range} />
                        </li>
                </ul>
                </div>
                <Routes>
                    <Route path='/' element={<h2>Route 1</h2>} />
                    <Route path='/route2' element={<h2 style={{border:'1px solid black'}}> <h2> Route 2 </h2><Link to='..'>Go back ◀ </Link></h2>} />

                    <Route path='/route3' element={
                        <div><h2>Route3</h2>
                            <div style={{border:'1px solid black'}}>
                                <h3>Links</h3>
                                <NavLink style={activeStyle} to='/route3/way1'>Link Way1 💚</NavLink>
                                <NavLink style={activeStyle} to='/route3/way2'>Link Way2 💙</NavLink>
                            </div>
                            <div style={{border:'2px solid green'}}>
                            <h3>Outlet (вывод дочерних роутов)</h3>
                            <Outlet />
                            </div>
                        </div>}>

                        <Route path='/route3/way1' element={<h3>way1 💚</h3>} />
                        <Route path='/route3/way2' element={<h3>way2 💙</h3>} />

                    </Route>

                    <Route path='/route4/:rangeVal' element={<RangeRoute/>} />
                    <Route path='*' element={<h1>404 </h1>}/>


                </Routes>
            </div>
        </BrowserRouter>
    )
}

const RangeRoute=()=>{
    const param=useParams();
    const navigate=useNavigate();
    const home=()=>navigate('/',{replace:true})
    useEffect(()=>{
        //console.log('NAVIGATE',navigate());
        //navigate(-1);
        if(+Object.keys(param)[0]===NaN){
            Navigate({to:'/',replace:true});
        }
    },[])
    return(
        <div>
            {/* <Navigate to={'/'} replace/> */}
            <button onClick={home}>Go home</button>
            <h1>{Object.keys(param)[0]}  {param[Object.keys(param)[0]]}</h1>
        </div>
    )
}


export default MyRouter;