import request from './http';
export  const getBannerList = (params)=>{
    return request.get("/get_slide_banner",params).then((res)=>{
        return res
    })
}
