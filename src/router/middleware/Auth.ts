import { checkAuth } from "@/services/AuthApiServices";

export default async function authMiddleware({ next }: any) {
    if (!await checkAuth()) {
        return next({
            name: "home"
        })
    } else {
    
        return next()
    }

}