
            var select = document.querySelector('select')
            select.addEventListener('change', celula)
            
            
            function celula(){
                      var choice = select.value
                                
                if ( (choice == "Jadim Lindoia")
                  || (choice == "Centro") 
                  || (choice == "Colina Verde")
                  || (choice == "Jadins de Monaco")) { 
                                            
                        var endLindoia = 'Jardim Lindóia: Av. Tiradentes, em frente a praça Nordestina!'
                        var res1 = document.getElementById('res')
                        var txt = document.getElementById('name')   
                        var name = String(txt.value)
                        res1.innerHTML = `Que maravilha <strong>${name},
                        </strong> sua Célula é no <strong>${endLindoia}</strong>!
                        <p>Ficaremos Muito Felizes em recebe-lo(a)!!</p>
                        <p>Entre em Contato Conosco: 99772-2270 DANYEL/ 99877-8968 ISABELLE</p>`
    
                    } else {
                         if ( (choice == "Jardim Europa") 
                           || (choice == "Jardim Morumbi")
                           || (choice == "Jardim Canada")
                           || (choice == "Cidade Alta") ) {

                             var endEuropa = `Jardim Europa: Av. Santa Catariana, 721. Na Casa da <strog> Pra. Marli e Pr. Kleber</strong>`
                             var res2 = document.getElementById('res')
                             var txt2 = document.getElementById('name')
                             var name2 = String(txt2.value)
                            res2.innerHTML = `Que benção <strong>${name2},
                            </strong> há uma <strong>CÉLULA PRÓXIMO</strong> a você, fica no <strong>${endEuropa}</strong>!
                            <p>Ficaremos Muito Felizes em recebe-lo(a)!!</p>
                            <p>Entre em Contato Conosco: 99804-7818 Pra. MARLI / 99999-8588 Pr. Kleber.</p>`
                             } 

                        } if ( (choice == "Jardim Curitiba") 
                                || (choice == "Jardim América") 
                                || (choice == "Jardim Galiléia") 
                                || (choice == "Jardim Primavera") 
                                || (choice == "Vila Nsª. das Candeias")
                                || (choice == "Jardim Tropical")
                                ) {
                                
                                var endCuritiba = `Jardim Curitiba: Rua XX, 00. <strong>Na Casa do Luiz Felipe e Maria Vitória</strong>!`
                                var res3 = document.getElementById('res')
                                var txt3 = document.getElementById('name')
                                var name3 = String(txt3.value)
                                    res3.innerHTML = `Que benção <strong>${name3},
                                </strong> há uma <strong>CÉLULA PRÓXIMO</strong> a você, 
                                fica no <strong>${endCuritiba}</strong>!
                                <p>Ficaremos Muito Felizes em recebe-lo(a)!!</p>
                                <p>Entre em Contato Conosco: 99720-8533 IRMÃ CILNEY.</p>`
                              
                            } if ( (choice == "Santa Casa")
                                || (choice == "Vila Guaíra")
                                || (choice == "Jardim Cristo Rei")
                                || (choice == "Jardim Bela Vista") ) {
                                    
                                 var endSantaCasa = `Santa Casa: Rua XXX, 00. <strong>Na Casa XXX</strong>!`
                                 var res4 = document.getElementById('res')
                                 var txt4 = document.getElementById('name')
                                 var name4 = String(txt4.value)
                                    res4.innerHTML = `Que benção <strong>${name4},
                                </strong> há uma <strong>CÉLULA PRÓXIMO</strong> 
                                a você, fica no  <strong>${endSantaCasa}</strong>!
                                <p>Ficaremos Muito Felizes em recebe-lo(a)!!</p>
                                <p>Entre em Contato Conosco: 99942-9280 IRMÃ IDATI.</p>`

                            } if (choice == "Jardim Universitário") {
                                var endJardimUni = `Jardim Universitário: Rua XXXX, 00. <strong>Na Casa xxxxx</strong>`
                                var res5 = document.getElementById('res')
                                var txt5 = document.getElementById('name')
                                var name5 = String(txt5.value)
                                    res5.innerHTML = `Que benção <strong>${name5},
                                </strong> há uma <strong>CÉLULA PRÓXIMO</strong> a você,
                                 fica no <strong>${endJardimUni}</strong>!
                                <p>Ficaremos Muito Felizes em recebe-lo(a)!!</p>
                                <p>Entre em Contato Conosco: 000000</p>`
                            
                            }  if ( (choice == "Jardim Santa Mônica")
                                 || (choice == "Águas Claras")) {
                                 var endAg = `Àguas Clara: Rua XXXX, 00. <strong>Na Casa XXXX</strong>`
                                 var res6 = document.getElementById('res')
                                 var txt6 = document.getElementById('name')
                                 var name6 = String(txt6.value)
                                  res6.innerHTML = `Que benção <strong>${name6},
                                  </strong> há uma <strong>CÉLULA PRÓXIMO</strong> a você, 
                                  fica no  <strong>${endAg}</strong>!
                                  <p>Ficaremos Muito Felizes em recebe-lo(a)!!</p>
                                  <p>Entre em Contato Conosco: 99918-044 IRMÃ CELMA.</p>`
                                 } 

            }                   
    
