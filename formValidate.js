function loginValidation(){
    
    let emailUsuari = document.getElementById("email");
    let passwordUsuari = document.getElementById("pwd");
    let isright = true;

   if (passwordUsuari.value.trim() == ""){
       passwordUsuari.classList.add("is-invalid");
       document.getElementById("errorPassword").innerHTML = "Camp obligatori";
       isright = false;
   } 

   let patro = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
   if (emailUsuari.value.trim() == ""){
           emailUsuari.classList.add("is-invalid");
           document.getElementById("errorEmail").innerHTML = "Camp obligatori";
           isright = false;

    }else if(patro.test(emailUsuari.value)==false){
        emailUsuari.classList.add("is-invalid");
        document.getElementById("errorEmail").innerHTML = "format mail incorrecte";
        isright = false;
    }

    return isright;

}



function searchValidar(){
    
    let searchUsuari;
    let is_right = true;


    searchUsuari = document.getElementById("form1");
    let searchUsuariV = searchUsuari.value.trim();

    if (searchUsuari.value.trim() == ""){
        searchUsuari.classList.add("is-invalid");
        document.getElementById("errorSearch").innerHTML = "Camp obligatori";
        is_right = false;

    }else if(searchUsuariV.length<3){
        searchUsuari.classList.add("is-invalid");
        document.getElementById("errorSearch").innerHTML = "minim 3 caracters"
        is_right = false;
    }

    return is_right;
}



function registreValidation(){

    let nameUsuariReg;
    let cognomUsuariReg;
    let emailUsuariReg;
    let passwordUsuariReg;
    let passwordConfirm;
    let provinciaReg;
    let patroEmail;
    let isRight = true;

    nameUsuariReg = document.getElementById("fname");
    cognomUsuariReg = document.getElementById("lname");
    emailUsuariReg = document.getElementById("emailR");
    passwordUsuariReg = document.getElementById("pwdR");
    passwordConfirm = document.getElementById("pwdConf");
    provinciaReg = document.getElementById("prov");




    patroNomUsuari = /^[a-zA-Z]((\.|_|-)?[a-zA-Z0-9]+){3}$/;
    if (nameUsuariReg.value.trim() == ""){
        nameUsuariReg.classList.add("is-invalid");
        document.getElementById("errorName").innerHTML = "Camp obligatori";
        isRight=false;

    }else if(patroNomUsuari.test(nameUsuariReg.value)==false){
        nameUsuariReg.classList.add("is-invalid");
        document.getElementById("errorName").innerHTML = "Format nom incorrecte";
        isRight=false;
    }



    if (cognomUsuariReg.value.trim() == ""){
        cognomUsuariReg.classList.add("is-invalid");
        document.getElementById("errorCognom").innerHTML = "Camp obligatori";
        isRight=false;

    }else if(patroNomUsuari.test(cognomUsuariReg.value)==false){
        cognomUsuariReg.classList.add("is-invalid");
        document.getElementById("errorCognom").innerHTML = "Format cognom incorrecte";
        isRight=false;
    }



        patroEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (emailUsuariReg.value.trim() == ""){
        emailUsuariReg.classList.add("is-invalid");
        document.getElementById("errorEmailReg").innerHTML = "Camp obligatori";
        isRight=false;

    }else if(patroEmail.test(emailUsuariReg.value)==false){
        emailUsuariReg.classList.add("is-invalid");
        document.getElementById("errorEmailReg").innerHTML = "format mail incorrecte";
        isRight=false;
    }



    if (passwordUsuariReg.value.trim() == ""){
        passwordUsuariReg.classList.add("is-invalid");
        document.getElementById("errorPasswordReg").innerHTML = "Camp obligatori";
        isRight=false;
    }


    if (passwordConfirm.value.trim() == ""){
        passwordConfirm.classList.add("is-invalid");
        document.getElementById("errorPasswordConf").innerHTML = "Camp obligatori";
        isRight=false;

    }else if (passwordUsuariReg.value !== passwordConfirm.value){
        passwordConfirm.classList.add("is-invalid");
        document.getElementById("errorPasswordConf").innerHTML = "Password error";
        isRight=false;
    }


    if (provinciaReg.value == ""){
        provinciaReg.classList.add("is-invalid");
        document.getElementById("errorProvincia").innerHTML = "Camp obligatori";
        isRight=false;
    }

    return isRight;
}