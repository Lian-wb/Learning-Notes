// 如果判断对象键值对类型的固定的话，通过interface定义索引类型
interface IIndexLanguage {
    [index: number]: string
}
const frontLangguage: IIndexLanguage = {
    0: "HTML",
    1: "CSS",
    2: "JavaScript",
    3: "Vue"
}
