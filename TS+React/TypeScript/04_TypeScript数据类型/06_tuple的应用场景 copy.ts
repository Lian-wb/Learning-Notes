// function useState(state: any){
//     let currentState = state
//     const changeState = (newState: any) =>  {
//         currentState = newState
//     }
//     const arr: any[] = [currentState, changeState]
//     return arr
// }
// const [counter, setCounter] = useState(10)
// 此时拿到的属性和方法都是any类型

function useState(state: any){
    let currentState = state
    const changeState = (newState: any) =>  {
        currentState = newState
    }
    // (newState: any) => void是函数类型的写法
    const tuple: [any, (newState: any) => void] = [currentState, changeState]
    return tuple
}
const [counter, setCounter] = useState(10)
export{}