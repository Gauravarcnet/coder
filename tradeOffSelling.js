function MaxProfit(prices) {

    let maxProfit = 0;
    let leftPointer = 0;
    let rightPointer = 1;
    let buyTradeDay;
    let sellTradeDay;

    for (rightPointer; rightPointer < prices.length;) {
        // If the current profit is positive, calculate maxProfit
        if (prices[rightPointer] > prices[leftPointer]) {
            const currentProfit = prices[rightPointer] - prices[leftPointer];
            maxProfit = Math.max(maxProfit, currentProfit);
            buyTradeDay = leftPointer;
            sellTradeDay = rightPointer;
        } else {
            // If the price at rightPointer is lower, move the leftPointer to rightPointer
            leftPointer = rightPointer;
        }
        // Always move the rightPointer
        rightPointer++;
    }
    return ({ maxProfit, buyTradeDay, sellTradeDay })
}

    

console.log("MaxDiff>>>", MaxProfit([1,2,4,2,5,7,2,4,9,0,9]));