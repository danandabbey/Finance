`use strict`;

const stock = {
    symbol: "a",
    price: 100,
    quantity: 10,
    yield: 3,                                //percent
    years: 10,
    reinvest: "yes",
    frequency: "yearly",
    growth: 3,                               //percent
    get value(){                             //this is called a getter in object inisialization
        return this.price * this.quantity
    }
};

function findFinalValue(): number{

    function frequency(){
        if (stock.frequency === "monthly"){
            return 1
        }
        if (stock.frequency === "quarterly"){
            return 3
        }
        if (stock.frequency === "yearly"){
            return 12
        };
    };

    function dividendDivider(){
        if (frequency() === 1){
            return 12;
        }
        if (frequency() === 3){
            return 4;
        }
        if (frequency() === 12){
            return 1;
        };
    };



 
    const numberOfMonths: number = stock.years * 12;
    const yield: number = (stock.yield * .01)/ dividendDivider();
    const growth: number = (stock.growth * .01);
    let value: number = stock.value;

    

    if (stock.reinvest === "yes"){

        for (let i = 1; i <= numberOfMonths; i++){

            if (Number.isInteger(i/frequency())){
                value += (yield * value)
            }
            if (Number.isInteger(i/12)){
                value += (value * growth)
            }
        };
    }else{

        for (let i = 1; i <= numberOfMonths; i++){
            if (Number.isInteger(i/12)){
                value += (value * growth)
            }
        };
    };
    
    return value.toFixed(2);

};


console.log(`Your ${"$"+stock.value} investment in ${stock.symbol} will be worth ${"$"+findFinalValue()} in ${stock.years} years.`);