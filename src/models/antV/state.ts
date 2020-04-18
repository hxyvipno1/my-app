
export interface node{
    id: any,
    sortAttr: number,
    sortAttr2: string,
    size?:any,
    style?:any
}

interface edge{
    source: string|number,
    target: string|number
}

interface ComponentType{
    nodes: node[];
    edges:edge[]
}


export function getInitState(){
    const componentsGraphData = {
        nodes:[] ,
        edges:[]
    }
    return {
        componentsGraphData
    }
}

export default getInitState()