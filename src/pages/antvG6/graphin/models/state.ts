

type State = {
    drawerVisible: boolean,
    drawerKey: string,
    graph: any
}

function getInitState():State{
    return{
        drawerVisible: false,
        drawerKey:'',
        graph: null
    }
}

export default getInitState();