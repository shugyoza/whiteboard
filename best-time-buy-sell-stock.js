/* Leetcode 20210122
Runtime: 92 ms, faster than 90.34% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 49 MB, less than 30.40% of JavaScript online submissions for Best Time to Buy and Sell Stock.
*/
var maxProfit = (prices) => {
    let profit = 0;
    let sell = prices[prices.length - 1];
    for (let i = prices.length - 2; i >= 0; i--) {
        sell = Math.max(sell, prices[i]);
        profit = Math.max(profit, sell - prices[i])
    }
    return profit;
}

/* time limit exceeded
var maxProfit = (prices) => {       // num: [idx, max diff]
  let dif = {};						// {7:6,1:5,5:2,3:3,6:2,4:0}
  let max = 0;						// max=6
  for (let i = 0; i < prices.length; i++) {		// i=6 < 6 F
    let num = prices[i];				// 4
    for (let key in dif) {				//
        if (num - key > dif[key][1]) dif[key][1] = num - key;
        max = Math.max(max, dif[key][1]);
    }
    if (!dif.hasOwnProperty(num)) {			// 4 T
      dif[num] = [i, 0];					// dif[4] = 0
    }
  }
  return max;						// 6
} */

/* output limit exceeded
var maxProfit = (prices) => {       // num: [idx, max diff]
    let max = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i+1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            console.log(profit)
            if (profit > 0 && j > i && profit > max) max = profit;
        }
    }
    console.log(max)
    return max;
}
*/

/*
I: array of nums;
O: an int, max difference between any two nums in arr;
C: no method?
Q:
- what if arr is not an arr;
- what if any nums is not a number;
- what if arr is undefined;
- what if arr.length == 0;
P:
- define an object to check max we could get on each num;
- do single loop to iterate over the array;
- if object has no num as the key, create one val key:0, and check/update all vals in that key.
- at the end do another loop to get max. val we got

{7:6,1:5,5:2,3:3,6:2,4:0} O(1), O(n), O(n), O(2N), O(n)
 0 1 2 3 4 5 = 6
[7,1,5,3,6,4]

*/
/* Does not work. If sorted descending, we can't make a profit at all.
var maxProfit = (prices) => {
  let dif = {};						// {7:6,1:5,5:2,3:3,6:2,4:0}
  let max;	// => max = 0;					// max=6
  for (let i = 0; i < prices.length; i++) {		// i=6 < 6 F
    let num = prices[i];				// 4
    for (let key in dif) {				//
      dif[key] = Math.max(Math.abs(num - key));	// -> Math.max(dif[key], Math.abs(num - key));
      if (!max || max < dif[key]) max = dif[key];	// max=6
    }
    if (!dif.hasOwnProperty(num)) {			// 4 T
      dif[num] = 0;					// dif[4] = 0
    }
  }
  return max;						// 6
}
*/
/*

 0 1 2 3 4 5 = 6
[7,1,5,3,6,4]

121. Best Time to Buy and Sell Stock
Easy

13293

468

Add to List

Share
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.



Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.


Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
*/
