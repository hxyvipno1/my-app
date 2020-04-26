
import { GraphinState, RootState, RootComputed, GraphinM } from 'types/store';
import { IActionCtx } from 'concent';
import { Nodedatas } from 'types/graphin';

type Ac = IActionCtx< RootState, RootComputed, GraphinM>;

export async function extendRelation(){

}





export async function addNodes(payload:[], moduleState:GraphinState,action:Ac){
    const { graph } = moduleState;
    payload.forEach(item=>{
        const { id, label, type } = item;
        const text = type ===1?'\ue674':'\ue692';
        const nodeItem = {
            id,
            label,
            text
        }
        graph.addItem("node",nodeItem);
        graph.updateLayout({
            type: 'grid',
            begin: [0, 0],
            rows: 4
        });
    })
    
}