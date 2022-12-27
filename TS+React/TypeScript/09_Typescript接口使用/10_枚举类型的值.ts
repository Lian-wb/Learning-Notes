enum Direction{
    // LEFT = "Left"也可以设置为字符串，但一个设为字符串了其他都得设置
    LEFT,//默认是0
    RIGHT,//默认是1
    TOP,//默认是2
    BOTTOM//默认是3
}
function turnDirection(direction: Direction){
    switch(direction){
        case Direction.LEFT:
            console.log("改变角色方向向左");
            break;
        case Direction.RIGHT:
            console.log("改变角色方向向右");
            break;
        case Direction.TOP:
            console.log("改变角色方向向上");
            break;
        case Direction.BOTTOM:
            console.log("改变角色方向向下");
            break;
        default:
            const foo: never = direction;
            break;
    }
}
turnDirection(Direction.LEFT)