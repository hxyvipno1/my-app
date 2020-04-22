import React from 'react'
import { Drawer, Button } from 'antd';
import { useConcent, NoMap } from 'concent';
import { CtxMS,GraphinM, RootState} from 'types/store'

const istate = ()=> ({ nodeValue:"" })

type CtxPre = CtxMS<{},GraphinM,ReturnType<typeof istate>>;

const setup = (ctx: CtxPre)=>{

    ctx.computed("title",(newstate)=>{
        const { drawerKey } = newstate;
        let title="";
        switch(drawerKey){
            case"addNodes": 
                title="加点";
                break;
            case"extendRelation":
                title="关系扩散";
                break;
            default: title="加点"
        }
        return title;
    },["drawerKey"])

    return{
        close(){ ctx.setState({ drawerVisible:false }) }
    }
}
type Ctx = CtxMS<{},GraphinM,ReturnType<typeof istate>,ReturnType<typeof setup>>;

export default function AutoDrawer() {

   const {state, settings,refComputed } = useConcent<{}, Ctx, NoMap, RootState, GraphinM>({module:"graphin",state:istate,setup});
    console.log(refComputed.title)
   return (
        <Drawer
            title="加点"
            placement="right"
            closable={false}
            visible={state.drawerVisible}
            onClose={settings.close}
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Drawer>
    )
}
