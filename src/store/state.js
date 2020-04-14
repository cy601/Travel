let defaultCity = '上海'
//防止用户关闭本地存储 导致直接抛出异常
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (error) {

}

export default {

    city: defaultCity

}