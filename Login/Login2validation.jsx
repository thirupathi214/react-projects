

function Validation2 (value){

    const error ={}

if(value.email===""){
    error.email="email should not be empty"
}
else if(value.email==="thirupathi81121@gmail.com"){
    error.email="email is matching"
}
else if(value.email !== "thirupathi81121@gmail.com"){
    error.email="email is not matching"
}
else (
   error.email=""
)


if(value.password===""){
    error.password="password should not be empty"
}
else if(value.password ==="thiru1432"){
    error.password="password is matching"
}
else if(value.password !=="thhiru1432"){
    error.password="password is not  matching"
}
else(
    error.password=""
)

}
export default Validation2