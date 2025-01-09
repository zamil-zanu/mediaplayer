import commonApi from "./commonAPI";
import server_url from "./server_url";


// api call for upload video
export const addVideoAPI=async(video)=>{
    return await commonApi("POST",`${server_url}/allVideos`,video)
}
//api call for get videos
export const getVideoAPI=async()=>{
    return await commonApi("GET",`${server_url}/allVideos`,"")
}
// api call for delete videocard

export const deleteVideoAPI=async(videoId)=>{
    return await commonApi("DELETE",`${server_url}/allVideos/${videoId}`,{})
}
// api call for save watch History
export const saveHistoryAPI=async(historyDetails)=>{
    return await commonApi("POST",`${server_url}/history`,historyDetails)
}
// api call for get watchHistory
export const getHistoryAPI=async()=>{
    return await commonApi("GET",`${server_url}/history`,"")
}
// api call to delete videocard
export const deleteHistoryAPI=async(videoId)=>{
    return await commonApi("DELETE",`${server_url}/history/${videoId}`,{})
}
// api call for add category
export const addCategoryAPI=async(categoryDetails)=>{
    return await commonApi("POST",`${server_url}/allCategory`,categoryDetails)
}
// api call for get watchHistory
export const getCategoryAPI=async()=>{
    return await commonApi("GET",`${server_url}/allCategory`,"")
}
// api call to delete category

export const deleteCategoryAPI=async(categoryId)=>{
    return await commonApi("DELETE",`${server_url}/allCategory/${categoryId}`,{})
}
// api call to get single video
export const getSingleVideoAPI=async(videoId)=>{
    return await commonApi("GET",`${server_url}/allVideos/${videoId}`,"")
}
// api call to update category

export const updateCategoryAPI=async(categoryId,categoryDetails)=>{
    return await commonApi("PUT",`${server_url}/allCategory/${categoryId}`,categoryDetails)
}




