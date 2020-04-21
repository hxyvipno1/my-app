import React from 'react'
import { Drawer, Button } from 'antd';
import { useConcent, NoMap } from 'concent';
import { CtxMS,GraphinM, RootState} from 'types/store'

const istate = ()=> ({ nodeValue:"" })

type CtxPre = CtxMS<{},GraphinM,ReturnType<typeof istate>>;

const setup = (ctx: CtxPre)=>{

    ctx.computed("title",(newstate)=>{
        console.log(newstate)
        return "加点"
    },["drawerKey"])

    return{
        close(){ ctx.setState({ drawerVisible:false }) }
    }
}
type Ctx = CtxMS<{},GraphinM,ReturnType<typeof istate>,ReturnType<typeof setup>>;

export default function AutoDrawer() {

   const {state, settings, computed} = useConcent<{}, Ctx, NoMap, RootState, GraphinM>({module:"graphin",state:istate,setup});
    return (
        <Drawer
            title={computed.title}
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
