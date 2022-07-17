

import {useCallback, useState} from 'react';


export const useHTTP=()=>{
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState(null);

    const request=useCallback(async(url,method="GET", body=null, headers={'Content-Type':'application/json'})=>{
        try{
            setLoading(true);
            const responce=await fetch(url,{method,body,headers});           

            if(!responce.ok)throw new Error(`Can't FETCH,\n Status error :${responce.status}`);
                        
            const data= await responce.json();
            setLoading(false);
            return data;
        }catch(e){
            setLoading(false);
            setError(e.message);
            throw e;
        }        
    },[])

    const clearError=useCallback(()=>setError(null),[]);
   
    return {loading,error,request,clearError}
}