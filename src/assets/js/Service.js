/**
 * Created by heyuanxiang on 7/19/2018.
 */

import {Message} from 'element-ui';
import axios from 'axios';

axios.defaults.withCredentials = true;

class Service {
    constructor(url) {
        this.url = url;
        this.successHandler = this.successHandler.bind(this);
    }

    successHandler(response, callback) {
        response = response.data;
        if (callback !== undefined) {
            callback(response);
        }
    }

    errorHandler(error) {
        if (error !== null && error !== undefined) {
            let msg = error.message;
            if (msg !== null) {
                console.log('error: ' + msg);
            } else {
                console.log('unknown error occurred!');
            }
        } else {
            console.log('unknown error occurred!');
        }
    }

    post(param, callback, headers) {
        let root = this.url,
            errorHandler = this.errorHandler,
            successHandler = this.successHandler;
        axios.post(root, param, headers)
            .then(function (response) {
                successHandler(response, callback);
            })
            .catch(function (error) {
                errorHandler(error);
            });
    }

    get(param, callback) {
        let root = this.url,
            errorHandler = this.errorHandler,
            successHandler = this.successHandler;
        if (!param) {
            param = {};
        }
        param._ = new Date().getTime();
        axios.get(root, {params: param})
            .then(function (response) {
                successHandler(response, callback);
            })
            .catch(function (error) {
                errorHandler(error);
            });
    }

    put(param, callback, headers) {
        let root = this.url,

            // this.rootUrl = url;
            // url: root + '/' + urlParam,
            errorHandler = this.errorHandler,
            successHandler = this.successHandler;
        axios.put(root, param, headers)
            .then(function (response) {
                successHandler(response, callback);
            })
            .catch(function (error) {
                errorHandler(error);
            });
    }


    delete(param, callback, headers) {
        let root = this.url,
            errorHandler = this.errorHandler,
            successHandler = this.successHandler;
        axios.delete(root, param, headers)
            .then(function (response) {
                successHandler(response, callback);
            })
            .catch(function (error) {
                errorHandler(error);
            });
    }
}

Date.prototype.format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

export default Service;
