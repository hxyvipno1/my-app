import React,{ memo } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';
import { Tooltip } from 'antd';
import { FileAddOutlined,ApartmentOutlined} from '@ant-design/icons';
import { useConcent, NoMap } from 'concent';
import { CtxMS,GraphinM, RootState} from 'types/store'

const istate = ()=> ({ nodeValue:"" })

type CtxPre = CtxMS<{},GraphinM,ReturnType<typeof istate>>;

const setup = (ctx: CtxPre)=>{

    return{
        addNodes(){
            ctx.setState({ drawerVisible: true,drawerKey:"addNodes" })
        },
        extendRelation(){
            ctx.setState({ drawerVisible: true,drawerKey:"extendRelation" })
        }
    }
}
type Ctx = CtxMS<{},GraphinM,ReturnType<typeof istate>,ReturnType<typeof setup>>;

export default memo(()=> {
    const {state,settings} = useConcent<{}, Ctx, NoMap, RootState, GraphinM>({module:"graphin",state:istate,setup});
    return (
        <div className={styles.operatorBar}>
            <Tooltip title="加点" placement="bottom">
                <button type="button" className={classnames(styles.operatBtn,"ant-btn")} onClick={settings.addNodes}>
                    <FileAddOutlined style={{display:"block"}}/>
                    加点</button>
            </Tooltip>
            <Tooltip title="关系扩散" placement="bottom">
                <button type="button" className={classnames(styles.operatBtn,"ant-btn")} onClick={settings.extendRelation}>
                    <ApartmentOutlined style={{display:"block"}}/>
                    关系扩散</button>
            </Tooltip>
        </div>
    )
})
