function ganancia() {
    var compra = parseFloat(document.f1.compra.value);
    var ganancia = parseFloat(document.f1.ganancia.value);
    var iva = parseFloat(document.f1.iva.value);
    var ganancia = parseFloat(compra * ganancia/100);
    var venta = ganancia+(iva*compra/100)+compra;

    document.f1.extra.value = ganancia;
    document.f1.venta.value = venta;
}
function resistencia() {
    var b1 = document.f2.b1.value;
    var b2 = document.f2.b2.value;
    var b3 = parseFloat(document.f2.b3.value);
    var r1 = parseFloat(b1+b2);
    document.f2.total.value = r1*b3;

    switch(b1) {
        case "0":
            document.getElementById("b1").style.backgroundColor="#1f1a17";
            document.getElementById("b1").style.color="white";
            document.getElementById("banda1").style.background="linear-gradient(#1f1a17, #000000)";
            break;
        case "1":
            document.getElementById("b1").style.backgroundColor="#ca804e";
            document.getElementById("b1").style.color="black";
            document.getElementById("banda1").style.background="linear-gradient(#ca804e, #895029)";
            break;
        case "2":
            document.getElementById("b1").style.backgroundColor="#fe0005";
            document.getElementById("b1").style.color="black";
            document.getElementById("banda1").style.background="linear-gradient(#fe0005, #980003)";
            break;
        case "3":
            document.getElementById("b1").style.backgroundColor="#e8761c";
            document.getElementById("b1").style.color="black";
            document.getElementById("banda1").style.background="linear-gradient(#e8761c, #8f470f)";
            break;
        case "4":
            document.getElementById("b1").style.backgroundColor="#f9f404";
            document.getElementById("b1").style.color="black";
            document.getElementById("banda1").style.background="linear-gradient(#f9f404, #959202)";
            break;
        case "5":
            document.getElementById("b1").style.backgroundColor="#07fb0b";
            document.getElementById("b1").style.color="black";
            document.getElementById("banda1").style.background="linear-gradient(#07fb0b, #029a05)";
            break;
        case "6":
            document.getElementById("b1").style.backgroundColor="#094ef3";
            document.getElementById("b1").style.color="white";
            document.getElementById("banda1").style.background="linear-gradient(#094ef3, #052e91)";
            break;
        case "7":
            document.getElementById("b1").style.backgroundColor="#954579";
            document.getElementById("b1").style.color="white";
            document.getElementById("banda1").style.background="linear-gradient(#954579, #4f2540)";
            break;
        case "8":
            document.getElementById("b1").style.backgroundColor="#838280";
            document.getElementById("b1").style.color="white";
            document.getElementById("banda1").style.background="linear-gradient(#838280, #4f4f4e)";
            break;
        case "9":
            document.getElementById("b1").style.backgroundColor=" #FFFFFF";
            document.getElementById("b1").style.color="black";
            document.getElementById("banda1").style.background="linear-gradient(#FFFFFF, #cccccc)";
            break;
    }

    switch(b2) {
        case "0":
            document.getElementById("b2").style.backgroundColor="#1f1a17";
            document.getElementById("b2").style.color="white";
            document.getElementById("banda2").style.background="linear-gradient(#1f1a17, #000000)";
            break;
        case "1":
            document.getElementById("b2").style.backgroundColor="#ca804e";
            document.getElementById("b2").style.color="black";
            document.getElementById("banda2").style.background="linear-gradient(#ca804e, #895029)";
            break;
        case "2":
            document.getElementById("b2").style.backgroundColor="#fe0005";
            document.getElementById("b2").style.color="black";
            document.getElementById("banda2").style.background="linear-gradient(#fe0005, #980003)";
            break;
        case "3":
            document.getElementById("b2").style.backgroundColor="#e8761c";
            document.getElementById("b2").style.color="black";
            document.getElementById("banda2").style.background="linear-gradient(#e8761c, #8f470f)";
            break;
        case "4":
            document.getElementById("b2").style.backgroundColor="#f9f404";
            document.getElementById("b2").style.color="black";
            document.getElementById("banda2").style.background="linear-gradient(#f9f404, #959202)";
            break;
        case "5":
            document.getElementById("b2").style.backgroundColor="#07fb0b";
            document.getElementById("b2").style.color="black";
            document.getElementById("banda2").style.background="linear-gradient(#07fb0b, #029a05)";
            break;
        case "6":
            document.getElementById("b2").style.backgroundColor="#094ef3";
            document.getElementById("b2").style.color="white";
            document.getElementById("banda2").style.background="linear-gradient(#094ef3, #052e91)";
            break;
        case "7":
            document.getElementById("b2").style.backgroundColor="#954579";
            document.getElementById("b2").style.color="white";
            document.getElementById("banda2").style.background="linear-gradient(#954579, #4f2540)";
            break;
        case "8":
            document.getElementById("b2").style.backgroundColor="#838280";
            document.getElementById("b2").style.color="white";
            document.getElementById("banda2").style.background="linear-gradient(#838280, #4f4f4e)";
            break;
        case "9":
            document.getElementById("b2").style.backgroundColor=" #FFFFFF";
            document.getElementById("b2").style.color="black";
            document.getElementById("banda2").style.background="linear-gradient(#FFFFFF, #cccccc)";
            break;
    }

    switch(b3) {
        case 1:
            document.getElementById("b3").style.backgroundColor="#1f1a17";
            document.getElementById("b3").style.color="white";
            document.getElementById("banda3").style.background="linear-gradient(#1f1a17, #000000)";
            break;
        case 10:
            document.getElementById("b3").style.backgroundColor="#ca804e";
            document.getElementById("b3").style.color="black";
            document.getElementById("banda3").style.background="linear-gradient(#ca804e, #895029)";
            break;
        case 100:
            document.getElementById("b3").style.backgroundColor="#fe0005";
            document.getElementById("b3").style.color="black";
            document.getElementById("banda3").style.background="linear-gradient(#fe0005, #980003)";
            break;
        case 1000:
            document.getElementById("b3").style.backgroundColor="#e8761c";
            document.getElementById("b3").style.color="black";
            document.getElementById("banda3").style.background="linear-gradient(#e8761c, #8f470f)";
            break;
        case 10000:
            document.getElementById("b3").style.backgroundColor="#f9f404";
            document.getElementById("b3").style.color="black";
            document.getElementById("banda3").style.background="linear-gradient(#f9f404, #959202)";
            break;
        case 100000:
            document.getElementById("b3").style.backgroundColor="#07fb0b";
            document.getElementById("b3").style.color="black";
            document.getElementById("banda3").style.background="linear-gradient(#07fb0b, #029a05)";
            break;
        case 1000000:
            document.getElementById("b3").style.backgroundColor="#094ef3";
            document.getElementById("b3").style.color="white";
            document.getElementById("banda3").style.background="linear-gradient(#094ef3, #052e91)";
            break;
        case 10000000:
            document.getElementById("b3").style.backgroundColor="#954579";
            document.getElementById("b3").style.color="white";
            document.getElementById("banda3").style.background="linear-gradient(#954579, #4f2540)";
            break;
        case 100000000:
            document.getElementById("b3").style.backgroundColor="#838280";
            document.getElementById("b3").style.color="white";
            document.getElementById("banda3").style.background="linear-gradient(#838280, #4f4f4e)";
            break;
        case 1000000000:
            document.getElementById("b3").style.backgroundColor=" #FFFFFF";
            document.getElementById("b3").style.color="black";
            document.getElementById("banda3").style.background="linear-gradient(#FFFFFF, #cccccc)";
            break;
    }
}