enum Direction{
    LEFT,
    RIGHT,
    TOP,
    BOTTOM
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
export {

}