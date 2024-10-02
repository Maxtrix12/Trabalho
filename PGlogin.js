function handleLogin() {
    location.reload(); 
    

}

function logar() {

 var login = document.getElementById('usuario').value;
 var senha =document.getElementById('senha').value;

 if(login =="Marcos2424@gmail.com" && senha == "Marcosamatraveco"){

    alert('Sucesso');
    location.href = "Gerente.html"
 }else{
    alert('Usuario ou senha incorreta')
 }
 
}

function logar() {

   var login = document.getElementById('usuario').value;
   var senha =document.getElementById('senha').value;
  
   if(login =="yago" && senha == "matos"){
  
      alert('Sucesso');
      location.href = "Vendedor.html"
   }else{
      alert('Usuario ou senha incorreta')
   }
   
  }
  

   


  


