export const errorMessage=(status, message,err)=>{
    const error = new Error();
    const orignalErr = err?.message || "條件錯誤";
    error.status= status;
    error.message=message+`\n錯誤詳細描述: \n`+orignalErr;
    return error; 
}