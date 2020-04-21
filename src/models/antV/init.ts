
import { componentsGraphData } from './data';

function sleepSeconds(data:any){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(data);
        },1000)
    })
}

function getComponentsData(){
    return sleepSeconds(componentsGraphData)
}


export default async ()=>{
    const myComponentsGraphData = await getComponentsData();
    return{ componentsGraphData: myComponentsGraphData }
}