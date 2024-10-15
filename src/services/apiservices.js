/// these will be common api

import { featuredContent, kpiResult, trendingContent } from '@/constant';

export const getFeaturedContent = () => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve({ featuredContent, trendingContent });
            }, 3000);
        } catch (error) {}
    });
};


export const getKPIResult = ()=>{
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(kpiResult);
            }, 3000);
        } catch (error) {}
    });
}