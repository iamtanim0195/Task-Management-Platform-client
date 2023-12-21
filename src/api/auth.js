import axiosSecure from ".";
//save user data in db
export const saveUser = async user => {
    const currentUser = {
        email: user.email,
        name: user.displayName,
    }
    const { data } = await axiosSecure.put(`/users/:${user?.email}`, currentUser)
    return data
}
//get token form server
export const getToken = async email => {
    const { data } = await axiosSecure.post(`/jwt`, email)
    console.log("token received from server")
    return data
}
// remove the token from the browser
export const clearCookie = async () => {
    const { data } = await axiosSecure.get(`/logout`)
    return data
}