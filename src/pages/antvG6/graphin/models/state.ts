

type State = {
    drawerVisible: boolean,
    drawerKey: string,
    graph: any
}

function getInitState():State{
    return{
        drawerVisible: false,
        drawerKey:'',
        graph: 123
    }
}

export default getInitState();