class Util {
    public formatDate(date: any, rule?: any){
        let fmt = rule || 'yyyy-MM-dd hh:mm:ss'
        // /(y+)/.test(fmt) 判断是否有多个y
        if (/(y+)/.test(fmt)) {
            // RegExp.$1 获取上下文，子正则表达式 /(y+)/.test(fmt)
            fmt = fmt.replace(RegExp.$1, date.getFullYear())
        }
        const o: { [key: string]: any } = {
            'M+': date.getMonth() + 1,
            'd+': date.getDate(),
            'h+': date.getHours(),
            'm+': date.getMinutes(),
            's+': date.getSeconds()
        }
        for (let k in o) {
            if (new RegExp(`(${k})`).test(fmt)) {
                const val = o[k] + ''
                fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? val : ('00' + val).substr(val.length))
            }
        }
        return fmt
    }
}

module.exports = new Util()