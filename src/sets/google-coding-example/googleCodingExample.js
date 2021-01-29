/**
 * @description: Given a non-sorted array of numbers and a target number, 
 * find whether the array contains a pair that the sum equals the target.
 * @author: Melkis Espinal (https://github.com/melkisespinal)
 * 
 * Problem: Given a non-sorted array of numbers and a target number, 
 * find whether the array contains a pair that its sum equals the target.
 * 
 * Constraints: It has to be a pair and the numbers have to be at different indexes.
 * 
 * Brute Force Approach: The brute force approach is to have a nested-loop to add
 * two numbers at a time. If solution is found, then return true. The issue with this
 * is that it runs in a time complexity of O(n^2), which is pretty bad if the array
 * is big.
 * 
 * Google Interview Question Sample Link: https://www.youtube.com/watch?v=XKu_SEDAykw
 */

 /**
  * @param {*} arr: The array to find the sum of pair of numbers to equal
  * the target.
  * @param {*} target: The target that the sum of the pair needs to equal to
  * @returns: Boolean representing if the algorithm found a pair that its sum
  * equals to the given target
  * 
  * Time Complexity: O(n) -> We only loop through the array once
  * Space Complexity: O(n) -> The Set could grow as big as the given Array
  */
 const findPairEqualToTarget = (arr, target) => {
    //Set to hold the complement of each number in the array
    const complementsSet = new Set();

    for(num of arr){
        //if a number of the array is found in the complements Set,
        //that means that we have found a pair
        if(complementsSet.has(num)) return true;

        complementsSet.add(target-num);//add complement to array
    }
    return false;
 }