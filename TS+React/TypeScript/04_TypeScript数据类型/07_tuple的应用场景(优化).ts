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

function useState<T>(state: T){
    let currentState = state
    const changeState = (newState: T) =>  {
        currentState = newState
    }
    const tuple: [T, (newState: T) => void] = [currentState, changeState]
    return tuple
}
// 使用泛型，就能根据参数不同返回不同类型的属性
const [counter, setCounter] = useState(10)
const [title, setTitle] = useState("abc")
const [flag, setFlag] = useState(true)