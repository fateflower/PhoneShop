import {get} from "../utils/request";

export function getList(page=1,per=10){
	return get("/api/v1/products",{
		page,
		per
	})
}

export function getOneProduct(id){
	return get("/api/v1/products/"+id)
}
