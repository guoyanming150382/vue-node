
    export function titlesSuccess(mes){
        return this.$message({
            message: mes,
            type: 'success'
            });
    } 
   export function titlesError(mes){
        return this.$message.error(mes);
    }
    export function cos(ms){
        console.log("mssmsmsm",ms)
    }
    export default{
        titlesSuccess,
        titlesError,
        cos
    }
