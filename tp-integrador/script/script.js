var precioTicket = 200;

function totalAPagar(){
    let cantidad = document.getElementById("cantidad").value;
    let descuento = document.getElementById("categoria").value;
    var totalAPagar = cantidad * (precioTicket * descuento);
    document.getElementById("resumen").innerHTML = "Total a pagar: $ " + totalAPagar;

}