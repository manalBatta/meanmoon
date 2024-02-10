function logout() {
    localStorage.removeItem("token")  
    localStorage.removeItem("user")  

    signedup()
    showalert("logout from your account","danger")
  }