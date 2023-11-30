const seznam = [
    {Jmeno: "Zdeněk", Prijmeni: "Zálešák", Rocnik: "2."},
    {Jmeno: "Jan", Prijmeni: "Novák", Rocnik: "1."}
];

function VypisDoTabulky()
{
    //let seznam = "";

    for(let i = 0; i < seznam.length; i++)
    {
        let table = document.getElementById("studentTable");
        let row = table.insertRow(0);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        cell1.innerHTML = seznam[i].Jmeno;
        cell2.innerHTML = seznam[i].Prijmeni; 
        cell3.innerHTML = seznam[i].Rocnik;   
        
        //seznam[i] += document.innerHTML;
        
    }  

}

function Pridat()
{
    let jmeno = document.getElementById("name").value;
    let prijmeni = document.getElementById("surname").value;
    let rocnik = document.getElementById("rocnik").value;

    if((jmeno != "") && (isNaN(jmeno))) // && (jmeno.value < 0) && (jmeno.value > 10)) 
        if((prijmeni != "") && (isNaN(prijmeni)))
            if((rocnik != "") && (rocnik < 1) && (rocnik > 4))


        {
             
        } 
        else
        {
            alert("jsi kkt") 
        }
    
    VypisDoTabulky(); 
    seznam.push({Jmeno: jmeno, Prijmeni: prijmeni, Rocnik: rocnik})

    
}



