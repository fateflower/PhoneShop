

export function getToken(){
	return localStorage.getItem("token")
}

export function isLogined(){
	if(getToken()){
		return true
	}else{
		return false
	}
}