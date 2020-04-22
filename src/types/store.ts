import * as moduleCst from "../base/constant/moduleName";
import { ICtx, StateType, ComputedValType, ReducerType, MODULE_VOID, MODULE_DEFAULT, cst } from "concent";



/** foo模块相关 */
import fooState from "../models/foo/state";

/** antV模块相关 */
import antVState from '../models/antV/state';

/** graphin模块相关 */
import graphinState from 'pages/antvG6/graphin/models/state';
import * as graphinRd from 'pages/antvG6/graphin/models/reducer';

/**
 * 推导SetupDemo模块各个文件的类型组装RootState,RootReducer, RootComputed
 * 后续在SetupDemo模块下添加各种新的函数或属性，组件都能智能感知到
 */
// export type SetupDemoCu = ComputedValType<typeof setupDemoCu>;
// export type SetupDemoRd = ReducerType<typeof setupDemoRd>;

export type FooState = StateType<typeof fooState>;
export type FooM = typeof moduleCst.foo;

export type AntVState = StateType<typeof antVState>;
export type AntVM = typeof moduleCst.antV;

export type GraphinState = StateType<typeof graphinState>;
export type GraphinM = typeof moduleCst.graphin;
export type GraphinRd =  ReducerType<typeof graphinRd>;


/** 构造根State类型 */
export interface RootState {
  [cst.MODULE_VOID]: {};
  [cst.MODULE_GLOBAL]: {};
  [cst.MODULE_DEFAULT]: {};
  [moduleCst.foo]: FooState;
  [moduleCst.antV]: AntVState;
  [moduleCst.graphin]: GraphinState;
}

/** 构造根Reducer类型 */
export interface RootReducer {
  [cst.MODULE_VOID]: {};
  [cst.MODULE_GLOBAL]: {};
  [cst.MODULE_DEFAULT]: {};
  [moduleCst.graphin]: GraphinRd;
}

/** 构造根Computed类型 */
export interface RootComputed {
  [cst.MODULE_VOID]: {};
  [cst.MODULE_GLOBAL]: {};
  [cst.MODULE_DEFAULT]: {};
}

export type Modules = keyof RootState;
// 一些常用的基于Ctx封装的辅助类型

/** 属于某个模块 */
export type CtxM<P, M extends Modules, Se = {}, RefCu = {}> = ICtx<RootState, RootReducer, RootComputed, P, {}, M, MODULE_VOID, Se, RefCu>;

/** 属于某个模块，扩展了私有状态时 */
export type CtxMS<P, M extends Modules, St = {}, Se = {}, RefCu = {}> = ICtx<RootState, RootReducer, RootComputed, P, St, M, MODULE_VOID, Se, RefCu>;

/** 属于某个模块，连接了其他模块 */
export type CtxMConn<P, M extends Modules, Conn extends Modules, Se = {}> = ICtx<RootState, RootReducer, RootComputed, P, {}, M, Conn, Se>;

/** 属于某个模块，扩展了私有状态，连接了其他模块 */
export type CtxMSConn<P, M extends Modules, St, Conn extends Modules, Se = {}> = ICtx<RootState, RootReducer, RootComputed, P, St, M, Conn, Se>;

/** 连接了其他模块 */
export type CtxConn<P, Conn extends Modules, Se = {}> = ICtx<RootState, RootReducer, RootComputed, P, {}, MODULE_DEFAULT, Conn, Se>;

// default系列，没有指定连接模块的组件默认属于$$default模块
export type CtxDe<P, Se = {}> = CtxM<P, MODULE_DEFAULT, Se>;
export type CtxDeS<P, St = {}, Se = {}> = CtxMS<P, MODULE_DEFAULT, St, Se>;
export type CtxDeConn<P, Conn extends Modules, Se = {}> = CtxMConn<P, MODULE_DEFAULT, Conn, Se>;
export type CtxDeSConn<P, St, Conn extends Modules, Se = {}> = CtxMSConn<P, MODULE_DEFAULT, St, Conn, Se>;
