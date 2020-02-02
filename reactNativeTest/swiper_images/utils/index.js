import request from './http';
export  const getBannerList = (params)=>{
    return request.get("/api/home/bannerlist",params).then((res)=>{
        return res
    })
}
