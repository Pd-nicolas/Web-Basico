function calculation(){
   var a = document.getElementById('number1').value;
   var b = document.getElementById('number2').value;
   var c = document.getElementById('number3').value;

   if(parseInt(a) > parseInt(b) && parseInt(a) > parseInt(c)){
      alert("o maior é o " + a)
   }else if(parseInt(b) > parseInt(c)){
      alert("o maior é o " + b)
   }else if(parseInt(c) >= parseInt(b)){
      alert("o maior é o " + c)
   }else{
      alert("são iguais")
   }
}

/*
  a) considerando a = 5, b = 4 e c = 5 a função irá entrar no primeiro 
  IF e irá mostrar "O maior é 5"

  b) considerando a = 2, b = 2 e c = 2 irá mostrar "São iguais"

  c) A função getElementById é usada para pegar os valores das tags 
  <input> e colocar em variáveis locais

  d) Considerando a = -7, b = 3, c = 3 a funçãoirá mostrar "O maior é o -7"

  e)O ultimo ELSE nunca é usado

*/
