let convert = () =>{
    let conv = document.getElementById("celcius").value;
    let fah = (conv*1.8) + 32;
    document.getElementById("fahrenheit").value = fah.toFixed(2);
    let kel = +273.15 + +conv;
    document.getElementById("kelvin").value = kel.toFixed(2);

  
    

}
document.getElementById("button").addEventListener("click", e =>{
    document.getElementById("span").innerHTML = "Convert Succesful !!"
    document.getElementById("celcius").value = '';
})

