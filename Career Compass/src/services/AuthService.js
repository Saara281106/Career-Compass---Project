class AuthService{

    setData(data){
        localStorage.setItem("email" , data.email)
        localStorage.setItem("uid" , data.uid)
        localStorage.setItem("name" , data.name)
        localStorage.setItem("userType" , data.userType)
    }
}

export default new AuthService()