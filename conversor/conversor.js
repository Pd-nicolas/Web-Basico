function calculo(){
    var r = document.getElementById("real").value
    var d = document.getElementById("dolar").value
    var e = document.getElementById("euro").value

    

    if(r){
        var real = 1.00
        var dolar = 4.50
        var euro = 5.15

        alert("Dolar: " + (r / dolar) + " Euro: " + (r / euro))
    
    } else if(d){
        var real = 0.22
        var dolar = 1.00
        var euro = 0.87                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

        alert("Real: " + (d * real) + " Euro: " + (d * euro))
    }
}