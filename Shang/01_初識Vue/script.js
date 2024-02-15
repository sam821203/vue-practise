// 確認 Vue 是否為構造函數
const init = (options) => {
    return new options()
}

const checkVueInstance = (option) => {
    if (!(this instanceof Vue)) {
        console.log('缺少了 new 關鍵字，這將導致 Vue 實例化失敗。')
        // this._init(option)
    }
}

checkVueInstance(Vue)
