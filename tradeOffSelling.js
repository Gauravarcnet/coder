function MaxProfit(prices) {
    let maxProfit = 0;
    let leftPointer = 0;
    let rightPointer = 1;
    let buyTradeDay = -1;
    let sellTradeDay = -1;

    while (rightPointer < prices.length) {
        if (prices[rightPointer] > prices[leftPointer]) {
            const currentProfit = prices[rightPointer] - prices[leftPointer];
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
                buyTradeDay = leftPointer;
                sellTradeDay = rightPointer;
            }
        } else {
            leftPointer = rightPointer;
        }
        rightPointer++;
    }
    // console.log(maxProfit);
    return { maxProfit, buyTradeDay, sellTradeDay };
}

console.log("MaxDiff>>>", MaxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 8]));
