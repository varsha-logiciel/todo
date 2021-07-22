angular
  .module('starter')
//Show value divided by 2
.filter('myFormat2',function(){
    return function (x){
       
        var selectedOjs = [];
        
        x.forEach(element => {
       if (element.value % 2 == 0 ) selectedOjs.push(element);            
        })
        return selectedOjs;
    };
})