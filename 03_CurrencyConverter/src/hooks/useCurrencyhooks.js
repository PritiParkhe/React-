import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() =>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then(() => setData(res[currency]))
    },[currency])
    console.log(data);
    return data
}
export default useCurrencyInfo;





//Approach

//Api call when useEffect hook is load 
//event lifecycle is triggered then useEffect hook is called(automatically fetch call)
//in data fecting url the passed value of currency varable then key value also posses the same
//string data converted to json but json data is not 
//to store in regular variable bacuse it does not reflect in UI
//this hook directly returns value from useState 
//(empty object is contengency value because the data not found then it doesn crash)
// all the method is return using export