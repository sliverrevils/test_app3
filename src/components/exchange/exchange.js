
import { useState, useEffect } from 'react';
import './exchange.css';
import axios from 'axios';

// const getRate = async (url) => {
//     console.log('AXIOS');
//     return await axios.get(url);
// }

const Exchange = () => {
    const [rub, setRub] = useState('');
    const [rates, setRates] = useState();
    const [curRate, setCurRate] = useState();
    const [output, setOutput] = useState('none');
    const [error,setError]= useState(false);


    const setCurrentRate = ({ target: { innerText: currency } }) => {
        console.log(currency);
        setCurRate(currency);
    };

    useEffect(() => {
        //getRate("https://www.cbr-xml-daily.ru/latest.js")
        
        axios.get("https://www.cbr-xml-daily.ru/latest.js")
        .then(data => setRates(data.data.rates))
        .catch(error=>setError(error));
    }, []);


    const rubConvert = () => {
        if (!curRate || !rub) return;
        let tmp = (rub * rates[curRate]).toFixed(2);
        console.log(tmp);
        setOutput(tmp);
    };

    useEffect(() => {
        rub > 0 && rubConvert();
    }, [curRate, rub]);



    const Btn = props => <button
        style={['UAH', 'USD', 'EUR'].includes(props.children) ? { backgroundColor: 'darkorchid' } : null}
        className={curRate === props.children ? 'active' : ''}
        onContextMenu={e => {
            e.preventDefault();
            setCurRate('');
        }}
        onClick={setCurrentRate}
        disabled={props.children === curRate} >
        {props.children}
    </button>

    const RatesBtns = () => {
        if (rates) {
            const btnsArr = [];
            for (const rate in rates) {
                btnsArr.push(<Btn key={`key_${Math.random() * 10000}`} >{rate}</Btn>);
            }
            return btnsArr;
        }else{            
            return <div><h2>LOADING</h2> </div>
        }

    }

    return (

        <div className="Exchange">
            <h2><input type="text" disabled={true} value={curRate && rub && `${curRate} : ${output}`} />   </h2>
            <input type="number" placeholder='input rubs' onContextMenu={e => { e.preventDefault(); setRub('') }} onChange={e => setRub(parseInt(e.target.value) || '')} value={rub} tabIndex={0} />
            <div className='ButtonsRates'>
                {error?<h2>SERVER ERROR</h2>:<RatesBtns/>}
            </div>

        </div>
    )
}

export default Exchange;