import config from "../js/config.js"; //导入公共配置文件
export default{
    getMovieListData(){
        const url =  '${config.HTTP}${config.SERVER_PATH}:${config.PORT}/getMovieListData?message=${message}';
        return new Promise(function(resolve,reject){
            setTimeout(function(){
                const data = {}
            })
        })
    }
}