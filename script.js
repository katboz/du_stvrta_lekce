let jmeno =String(prompt('Napiš své křestní jméno bez diakritiky.'))
let prijimeni =String(prompt('Napiš své příjmeníbez diakritiky')
)
let jmenoBezMezer=jmeno.trim()
let prijimeniBezMezer = prijimeni.trim()


let email = prijimeniBezMezer.slice(0,5) + jmenoBezMezer.slice(0,2)

let emailAdress = email.toLowerCase()

if (emailAdress !== null){
document.body.innerHTML = `Vaše emailová adresa je ${emailAdress}@fit.cvut.cz`
}

else{
    document.body.innerHTML = 'chyba'
}
// nefunguje to jak chci, neco je spatne.