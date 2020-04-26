import React from 'react'
import { Drawer, Button, Form, Select, Input } from 'antd';
import { useConcent, NoMap, ComputedValType } from 'concent';
import { CtxMS,GraphinM, RootState} from 'types/store';
import initState from '../../models/state';
import { CloseOutlined } from '@ant-design/icons';
import styles from './index.module.scss';
import { Store } from 'rc-field-form/lib/interface'

const istate = ()=> ({ nodeValue:"" })

type CtxPre = CtxMS<{},GraphinM,ReturnType<typeof istate>>;

const cuDesc = {
    title({drawerKey}:typeof initState){
        let title = "";
        switch(drawerKey){
            case "addNodes":
                title = "加点";
                break;
            case "extendRelation":
                title= "关系扩散";
                break;
            default:
                title = "加点";
        };
        return title;
    }
}

const setup = (ctx: CtxPre)=>{

    ctx.computed(cuDesc);
    const Ctx = ctx as Ctx;
    return{
        close(){ Ctx.setState({ drawerVisible:false }) },
        handleAddBtn(values:Store){
            const { targetType, targetValue } =values;
            const nodeData =targetValue.trim().split((/[/\s,，;:(/\r/\n)]/)).map((item:string) => ({id:`${item}_${targetType}`,label:item,type:targetType}));
            Ctx.dispatch("addNodes",nodeData);
            Ctx.settings.close();
        }
    }
}
type Ctx = CtxMS<{},GraphinM,ReturnType<typeof istate>,ReturnType<typeof setup>,ComputedValType<typeof cuDesc>>;

export default function AutoDrawer() {

   const {state, settings, refComputed} = useConcent<{}, Ctx, NoMap, RootState, GraphinM>({module:"graphin",state:istate,setup});

   return (
        <Drawer
            title={
            <>{refComputed.title}<CloseOutlined className={styles.closeBtn} onClick={settings.close}/></>
            }
            className={styles.drawerCont}
            placement="right"
            closable={false}
            mask={false}
            visible={state.drawerVisible}
            onClose={settings.close}
            width={400}
        >
            {
                state.drawerKey==="addNodes"?
                <Form 
                    size="middle" 
                    layout="vertical" 
                    initialValues={{targetType:1}} 
                    onFinish={settings.handleAddBtn}
                >
                    <Form.Item label="实体类型" name="targetType">
                        <Select>
                            <Select.Option value={1}>手机</Select.Option>
                            <Select.Option value={2}>身份证</Select.Option>
                            <Select.Option value={3}>账户</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="实体值" name="targetValue">
                        <Input.TextArea rows={4} placeholder="单个或多个值，以空格或逗号隔开"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="default" style={{width:"100%"}} htmlType="submit">添加节点</Button>
                    </Form.Item>
                </Form>:null
            }
        </Drawer>
    )
}
