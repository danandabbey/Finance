'use strict';

function standardDeviation(priceArray: number[]): number{

    const stdDev: number= Math.sqrt(sumSquaredVarianceOfDataPoints()/priceArray.length);

    function sumSquaredVarianceOfDataPoints(): number{
        let sumTotal: number = 0;
        for (const variance of dataPointVariance()){
            const x: number = Math.pow(variance , 2);
            sumTotal += x;
        };
        
        function dataPointVariance(): number[]{
            let dataPointVariance: number[] = [];

            for (const price of priceArray){
                let x: number = price - mean();
                dataPointVariance.push(x);
            };
    
            function mean(): number{
                let dataTotal: number = 0;
                for (const price of priceArray){
                    dataTotal += price;
                };

                return dataTotal/priceArray.length;
            };
    
            return dataPointVariance;
        };

        return sumTotal;
    ;}

    return stdDev;
};

() => {
    const priceArray: number[] = [1,2,3,4,5,6,7,8,9,10]
    
    console.log(standardDeviation(priceArray));
};
