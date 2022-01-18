let priceTv1 = 500
let priceTv2 = 1000
let priceTv3 = 2000
let priceTv4 = 2500
let priceTv5 = 2800
let priceTv6 = 3400
let priceTv7 = 3800
let priceTv8 = 4300
let priceTv9 = 5000
let priceTv10 = 6000
let priceTv11 = 8000

let pricePlayer1 = 292
let pricePlayer2 = 249
let pricePlayer3 = 480


function getSelectedValue3(){
    top.selectedValue3 = document.getElementById('planos2').value
}

function getSelectedValue2(){
    top.selectedValue2 = document.getElementById('pagamento').value
}

function getSelectedValue(){
    top.selectValue = document.getElementById("quantLicencas2").value
}




let resultadoTotal = document.getElementById("btn");
    resultadoTotal.addEventListener("click", function(){

        let quantTv1 = Number(document.getElementById('quant_Tv1').value)
        let somaTv1 = quantTv1 * priceTv1
        document.getElementById("total_price_Tv_1").innerHTML = `R$${somaTv1}`;
        
        let quantTv2 = Number(document.getElementById('quant_Tv2').value)
        let somaTv2 = quantTv2 * priceTv2
        document.getElementById("total_price_Tv_2").innerHTML = `R$${somaTv2}`;

        let quantTv3 = Number(document.getElementById('quant_Tv3').value)
        let somaTv3 = quantTv3 * priceTv3
        document.getElementById("total_price_Tv_3").innerHTML = `R$${somaTv3}`;

        let quantTv4 = Number(document.getElementById('quant_Tv4').value)
        let somaTv4 = quantTv4 * priceTv4
        document.getElementById("total_price_Tv_4").innerHTML = `R$${somaTv4}`;

        let quantTv5 = Number(document.getElementById('quant_Tv5').value)
        let somaTv5 = quantTv5 * priceTv5
        document.getElementById("total_price_Tv_5").innerHTML = `R$${somaTv5}`;
        
        let quantTv6 = Number(document.getElementById('quant_Tv6').value)
        let somaTv6 = quantTv6 * priceTv6
        document.getElementById("total_price_Tv_6").innerHTML = `R$${somaTv6}`;

        let quantTv7 = Number(document.getElementById('quant_Tv7').value)
        let somaTv7 = quantTv7 * priceTv7
        document.getElementById("total_price_Tv_7").innerHTML = `R$${somaTv7}`;

        let quantTv8 = Number(document.getElementById('quant_Tv8').value)
        let somaTv8 = quantTv8 * priceTv8
        document.getElementById("total_price_Tv_8").innerHTML = `R$${somaTv8}`;

        let quantTv9 = Number(document.getElementById('quant_Tv9').value)
        let somaTv9 = quantTv9 * priceTv9
        document.getElementById("total_price_Tv_9").innerHTML = `R$${somaTv9}`;

        let quantTv10 = Number(document.getElementById('quant_Tv10').value)
        let somaTv10 = quantTv10 * priceTv10
        document.getElementById("total_price_Tv_10").innerHTML = `R$${somaTv10}`;

        let quantTv11 = Number(document.getElementById('quant_Tv11').value)
        let somaTv11 = quantTv11 * priceTv11
        document.getElementById("total_price_Tv_11").innerHTML = `R$${somaTv11}`;

        let resultadoTotalTv = somaTv1 + somaTv2 + somaTv3 + somaTv4 + somaTv5 + somaTv6 + somaTv7 + somaTv8 + somaTv9 + somaTv10 + somaTv11
        document.getElementById("all_Price_Tv").innerHTML = `R$${resultadoTotalTv}`;


        //Players
        let quantPlayer1 = Number(document.getElementById('quant_player1').value)
        let somaPlayer1 = quantPlayer1 * pricePlayer1
        document.getElementById("total_price_player1").innerHTML = `R$${somaPlayer1}`;

        let quantPlayer2 = Number(document.getElementById('quant_player2').value)
        let somaPlayer2 = quantPlayer2 * pricePlayer2
        document.getElementById("total_price_player2").innerHTML = `R$${somaPlayer2}`;

        let quantPlayer3 = Number(document.getElementById('quant_player3').value)
        let somaPlayer3 = quantPlayer3 * pricePlayer3
        document.getElementById("total_price_player3").innerHTML = `R$${somaPlayer3}`;

        let resultadoTotalPlayer = somaPlayer1 + somaPlayer2 + somaPlayer3
        document.getElementById("all_price_players").innerHTML = `R$${resultadoTotalPlayer}`;

        //Mão de Obra
        let maoDeObra = 2000


        getSelectedValue();
        getSelectedValue2();
        getSelectedValue3();
            //Licenças
            if(top.selectedValue2 == "Anual"){
                let brAnual = 15.90
                let prAnual = 19.60
                let ouAnual = 23.01
                top.diAnual = 26.91
                if(top.selectValue == 1){
                    top.diAnual = 26.91
                }else if(top.selectValue == 10){
                    top.diAnual = 26.67
                }else if(top.selectValue == 15){
                    top.diAnual = 26.50
                }else if(top.selectValue == 20){
                    top.diAnual = 26.17
                }else if(top.selectValue == 30){
                    top.diAnual = 25.83
                }else if(top.selectValue == 40){
                    top.diAnual = 25.50
                }else if(top.selectValue == 60){
                    top.diAnual = 24.90
                }else if(top.selectValue == 100){
                    top.diAnual = 24.50
                }else if(top.selectValue == 0){
                    top.diAnual = 26.91
                }
                document.getElementById("brValue").innerHTML = `R$${brAnual}`;
                document.getElementById("prValue").innerHTML = `R$${prAnual}`;
                document.getElementById("ouValue").innerHTML = `R$${ouAnual}`;
                document.getElementById("diValue").innerHTML = `R$${top.diAnual}`;
                let quantPlanos = Number(document.getElementById('quantPlanos').value)
                if((top.selectedValue3 == 0)){
                    top.somaPlanos = quantPlanos * brAnual
                    document.getElementById("unitPricePlan").innerHTML = `R$${brAnual}`;
                    document.getElementById("preçoTotalPlan").innerHTML = `R$${top.somaPlanos}`;
                    top.mensalidade = brAnual;
                }else if(top.selectedValue3 == 1){
                    top.somaPlanos = quantPlanos * prAnual
                    document.getElementById("unitPricePlan").innerHTML = `R$${prAnual}`;
                    document.getElementById("preçoTotalPlan").innerHTML = `R$${top.somaPlanos}`;
                    top.mensalidade = prAnual;
                }else if(top.selectedValue3 == 2){
                    top.somaPlanos = quantPlanos * ouAnual
                    document.getElementById("unitPricePlan").innerHTML = `R$${ouAnual}`;
                    document.getElementById("preçoTotalPlan").innerHTML = `R$${top.somaPlanos}`;
                    top.mensalidade = ouAnual;
                }else{
                    top.somaPlanos = quantPlanos * top.diAnual
                    document.getElementById("unitPricePlan").innerHTML = `R$${top.diAnual}`;
                    document.getElementById("preçoTotalPlan").innerHTML = `R$${top.somaPlanos}`;
                    top.mensalidade = top.diAnual;
                }
            }else if(top.selectedValue2 == "Mensal"){
                let brMensal = 39.00
                let prMensal = 49.00
                let ouMensal = 59.00
                top.diMensal = 69.00
                if(top.selectValue == 1){
                    top.diMensal = 69.00
                }else if(top.selectValue == 10){
                    top.diMensal = 59.00
                }else if(top.selectValue == 15){
                    top.diMensal = 57.00
                }else if(top.selectValue == 20){
                    top.diMensal = 55.00
                }else if(top.selectValue == 30){
                    top.diMensal = 53.00
                }else if(top.selectValue == 40){
                    top.diMensal = 51.00
                }else if(top.selectValue == 60){
                    top.diMensal = 45.00
                }else if(top.selectValue == 100){
                    top.diMensal = 39.00
                }else if(top.selectValue == 0){
                    top.diMensal = 69.00
                }
                document.getElementById("brValue").innerHTML = `R$${brMensal}`;
                document.getElementById("prValue").innerHTML = `R$${prMensal}`;
                document.getElementById("ouValue").innerHTML = `R$${ouMensal}`;
                document.getElementById("diValue").innerHTML = `R$${top.diMensal}`;
                let quantPlanos = Number(document.getElementById('quantPlanos').value)
                if(top.selectedValue3 == 0){
                    top.somaPlanos = quantPlanos * brMensal
                    document.getElementById("unitPricePlan").innerHTML = `R$${brMensal}`;
                    document.getElementById("preçoTotalPlan").innerHTML = `R$${top.somaPlanos}`;
                    top.mensalidade = brMensal;
                }else if(top.selectedValue3 == 1){
                    top.somaPlanos = quantPlanos * prMensal
                    document.getElementById("unitPricePlan").innerHTML = `R$${prMensal}`;
                    document.getElementById("preçoTotalPlan").innerHTML = `R$${top.somaPlanos}`;
                    top.mensalidade = prMensal;
                }else if(top.selectedValue3 == 2){
                    top.somaPlanos = quantPlanos * ouMensal
                    document.getElementById("unitPricePlan").innerHTML = `R$${ouMensal}`;
                    document.getElementById("preçoTotalPlan").innerHTML = `R$${top.somaPlanos}`;
                    top.mensalidade = ouMensal;
                }else{
                    top.somaPlanos = quantPlanos * top.diMensal
                    document.getElementById("unitPricePlan").innerHTML = `R$${top.diMensal}`;
                    document.getElementById("preçoTotalPlan").innerHTML = `R$${top.somaPlanos}`;
                    top.mensalidade = top.diMensal;
                }
            }
        let orçamentoTotal = resultadoTotalTv + resultadoTotalPlayer + maoDeObra + top.somaPlanos;
        document.getElementById('investimentoInicial').innerHTML =  `R$${orçamentoTotal}`;


        document.getElementById('Mensalidade').innerHTML =  `R$${top.somaPlanos}`;

        document.getElementById('text4').innerHTML = `E ai Gostou!?`;
        document.getElementById('text2').innerHTML = `Após suas escolhas o nosso algoritmo identificou que seu Investimento inicial seria de R$${orçamentoTotal} é o valor mensal que você pagaria pelos serviços seria dê: R$${top.somaPlanos} !`;
        

    })
