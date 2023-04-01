let url = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL"

fetch(url)
    .then((res) =>{
        
        return res.json()

    }).then((data)=>{
        console.log(data.low.USD_BRL)
    })
    
    
    
    function converter (){
        let input = document.getElementById("valor")
        let valor = input.value

        
    }

    
        "USDBRL": {
            "code": "USD",
            "codein": "BRL",
            "name": "Dólar Americano/Real Brasileiro",
            "high": "5.37",
            "low": "5.2257",
            "varBid": "-0.1351",
            "pctChange": "-2.52",
            "bid": "5.2279",
            "ask": "5.2285",
            "timestamp": "1591109752",
            "create_date": "2020-06-02 11:55:53"
        },
        "EURBRL": {
            "code": "EUR",
            "codein": "BRL",
            "name": "Euro/Real Brasileiro",
            "high": "6.0046",
            "low": "5.844",
            "varBid": "-0.1235",
            "pctChange": "-2.07",
            "bid": "5.8462",
            "ask": "5.8497",
            "timestamp": "1591109753",
            "create_date": "2020-06-02 11:55:56"
        }
    