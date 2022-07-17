
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import ico from '../../ico/testIco.jpg';

const ReactHelmet = () => {
    const [text,setText]=useState(''); 

    return (
        <div>
            <h1>React-helmet</h1>
            <h2>Позволяет изменять на каждой странице Title и Meta тэги </h2>
            <label >
                <b> <mark> Changing title: </mark> </b>
            <input type="text" onChange={({target:{value}})=>setText(value)} value={text} />
            </label>
            

            <Helmet>
                <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
                <meta
                    name="description"
                    content="Helmet"
                />
                <title>{text}</title>
            </Helmet>
        </div>
    )
}


export default ReactHelmet;