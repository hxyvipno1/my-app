import React from 'react';
import { ZoomInOutlined, ZoomOutOutlined, LayoutOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import styles from './index.module.scss';
import { Popover, Radio, Tooltip } from 'antd';

const radioStyle={
    display:"block",
    height:"30px",
    lineHeight:"30px"
}

const LayoutItem = (
    <Radio.Group>
        <Radio style={radioStyle}>力导布局</Radio>
        <Radio style={radioStyle}>圆形布局</Radio>
        <Radio style={radioStyle}>同心圆布局</Radio>
    </Radio.Group>
)

export default function ToolBar() {
    return (
        <div className={styles.toolBarCont}>
            <Popover
                title="布局方案"
                trigger="hover"
                placement="right"
                content={LayoutItem}
            >
                <button type="button" className={classnames(styles.tooBarBtn,"ant-btn")}><LayoutOutlined /></button>
            </Popover>
            <Tooltip title="放大" placement="right">
                <button type="button" className={classnames(styles.tooBarBtn,"ant-btn")}><ZoomInOutlined /></button>
            </Tooltip>
            <Tooltip title="缩小" placement="right">
                <button type="button" className={classnames(styles.tooBarBtn,"ant-btn")}><ZoomOutOutlined /></button>
            </Tooltip>
        </div>
    )
}
