   var Calcular = {
     adicionar: function(num1, num2){
       if(isNaN(num1) || isNaN(num2)){
         return 0;
       }
      result = parseFloat(num1)+ parseFloat(num2)
       return result;
     },

     subtrair: function(num1, num2){
      return 0;
    },

    dividir: function(num1, num2){
      return 0;
    },

    multiplicar: function(num1, num2){
      return 0;
    },
   };

   if(typeof module !== 'undefined' && typeof module.exports !== 'undefined'){
     module.exports = Calcular;
   }