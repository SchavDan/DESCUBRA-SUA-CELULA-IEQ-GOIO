
            var select = document.querySelector('select')
            select.addEventListener('change', celula)
            
            
            function celula(){
                      var choice = select.value
                                
                if ( (choice == "Jadim Lindoia")
                  || (choice == "Centro") 
                  || (choice == "Colina Verde")
                  || (choice == "Jadins de Monaco")) { 
                                            
                        var endLindoia = 'Jardim Lindóia: Av. Tiradentes, nº 225, em frente a praça Nordestina!'
                        var res1 = document.getElementById('res')
                        var txt = document.getElementById('name')   
                        var name = String(txt.value)
                        res1.innerHTML = `Que benção <strong>${name},
                        </strong> há uma <strong>CÉLULA PRÓXIMO</strong> a você, 
                        fica no <strong>${endLindoia}</strong>!
                        <p>Ficaremos Muito Felizes em recebe-lo(a)!!</p>
                        <p>Entre em Contato Conosco: LIDERES: DANYEL 99772-2270/  ISABELLE 99877-8968</p>`
    
                    } else {
                         if ( (choice == "Jardim Europa") 
                           || (choice == "Jardim Morumbi")
                           || (choice == "Jardim Canada")
                           || (choice == "Cidade Alta") ) {

                             var endEuropa = `Jardim Europa: Av. Santa Catariana, nº 745. Na Casa da <strog> Pra. Marli e Pr. Kleber</strong>`
                             var res2 = document.getElementById('res')
                             var txt2 = document.getElementById('name')
                             var name2 = String(txt2.value)
                            res2.innerHTML = `Que benção <strong>${name2},
                            </strong> há uma <strong>CÉLULA PRÓXIMO</strong> a você, 
                            fica no <strong>${endEuropa}</strong>!
                            <p>Ficaremos Muito Felizes em recebe-lo(a)!!</p>
                            <p>Entre em Contato Conosco: Pra. MARLI 99804-7818/ Pr. Kleber 99999-8588.</p>`
                             } 

                        } if ( (choice == "Jardim Curitiba") 
                                || (choice == "Jardim América") 
                                || (choice == "Vila Nsª. das Candeias") ) {
                                
                                var endCuritiba = `Jardim Curitiba: Rua Do Café, nº 715. <strong>Na Casa do Luiz Felipe e Maria Vitória</strong>!`
                                var res3 = document.getElementById('res')
                                var txt3 = document.getElementById('name')
                                var name3 = String(txt3.value)
                                    res3.innerHTML = `Que benção <strong>${name3},
                                </strong> há uma <strong>CÉLULA PRÓXIMO</strong> a você, 
                                fica no <strong>${endCuritiba}</strong>!
                                <p>Ficaremos Muito Felizes em recebe-lo(a)!!</p>
                                <p>Entre em Contato Conosco: LIDER CILNEY 99720-8533.</p>`
                              
                            } if ( (choice == "Santa Casa")
                                || (choice == "Vila Guaíra")
                                || (choice == "Jardim Cristo Rei") ) {
                                    
                                 var endSantaCasa = `Santa Casa: Av. Danil Portela, nº 1790. <strong>Na Casa da Irmão Idati</strong>!`
                                 var res4 = document.getElementById('res')
                                 var txt4 = document.getElementById('name')
                                 var name4 = String(txt4.value)
                                    res4.innerHTML = `Que benção <strong>${name4},
                                </strong> há uma <strong>CÉLULA PRÓXIMO</strong> 
                                a você, fica no bairro  <strong>${endSantaCasa}</strong>!
                                <p>Ficaremos Muito Felizes em recebe-lo(a)!!</p>
                                <p>Entre em Contato Conosco: LIDER KLEIA 99960-3013.</p>`

                            } if (choice == "Jardim Universitário") {
                                var endJardimUni = `Jardim Universitário: Rua Nadir Cancian, nº 375. <strong>Na Casa do Pr. Genilson</strong>`
                                var res5 = document.getElementById('res')
                                var txt5 = document.getElementById('name')
                                var name5 = String(txt5.value)
                                    res5.innerHTML = `Que benção <strong>${name5},
                                </strong> há uma <strong>CÉLULA PRÓXIMO</strong> a você,
                                 fica no <strong>${endJardimUni}</strong>!
                                <p>Ficaremos Muito Felizes em recebe-lo(a)!!</p>
                                <p>Entre em Contato Conosco: Pr. Genilson 99863-4887</p>`
                            
                            }  if ( (choice == "Jardim Santa Mônica")
                                 || (choice == "Águas Claras")) {
                                 var endAg = `Àguas Clara: Rua Arapongas, nº 82. <strong>Na Casa da Irmã Domingas</strong>`
                                 var res6 = document.getElementById('res')
                                 var txt6 = document.getElementById('name')
                                 var name6 = String(txt6.value)
                                  res6.innerHTML = `Que benção <strong>${name6},
                                  </strong> há uma <strong>CÉLULA PRÓXIMO</strong> a você, 
                                  fica no bairro <strong>${endAg}</strong>!
                                  <p>Ficaremos Muito Felizes em recebe-lo(a)!!</p>
                                  <p>Entre em Contato Conosco: LIDER CELMA 99918-044.</p>`
                                 
                            }  if ( (choice == "Jardim Primavera") 
                                 || (choice == "Jardim Galiléia")
                                 || (choice == "Jardim Tropical")
                                 || (choice == "Jardim Bela Vista") ) {
                                   var endPri = `Primavera: Travessa Tamarana, nº 44, Casa 5. Na casa do Flavio`
                                   var res7 = document.getElementById('res')
                                   var txt7 = document.getElementById('name')
                                   var name7 = String(txt7.value)
                                    res7.innerHTML = `Que benção <strong>${name7},
                                  </strong> há uma <strong>CÉLULA PRÓXIMO</strong> a você, 
                                  fica no  <strong>${endPri}</strong>!
                                  <p>Ficaremos Muito Felizes em recebe-lo(a)!!</p>
                                  <p>Entre em Contato Conosco: LIDER Pr. Luiz Henrique 99112-6239.</p>`
                            }

            }                   
    
