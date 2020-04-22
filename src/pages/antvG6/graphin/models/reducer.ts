
import { GraphinState, RootState, RootComputed, GraphinM } from 'types/store';
import { IActionCtx } from 'concent';
import { Nodedatas } from 'types/graphin';

type Ac = IActionCtx< RootState, RootComputed, GraphinM>;

export async function extendRelation(){

}





export async function addNodes(payload:[], moduleState:GraphinState,action:Ac){
    const { graph } = moduleState;
    console.log(graph)
    // payload.forEach(item=>{
    //     const nodeItem = {
    //         id: item,
    //         label:item,
    //         text: '\ue674'
    //     }
    //     graph.addItem("node",nodeItem)
    // })
    
}