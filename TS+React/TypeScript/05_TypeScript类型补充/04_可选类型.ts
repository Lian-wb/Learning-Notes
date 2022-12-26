// Point: x/y/z -> 对象类型
// {x: number, y: number, z?: number}
function printPoint(point: {x: number, y: number, z?: number}) {
  console.log(point.x)
  console.log(point.y)
  console.log(point.z);//可选类型没赋值是打印出来是undefined
  
}

printPoint({x: 123, y: 321})

export {}