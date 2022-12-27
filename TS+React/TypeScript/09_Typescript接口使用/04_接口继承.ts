interface ISwim{
    swimming: () => void
}
interface IFly{
    flying: () => void
}

interface IAction extends ISwim, IFly{}