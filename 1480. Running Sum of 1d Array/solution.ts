function runningSum(nums: number[]): number[] {
  const runningSumNumbers: number[] = [];
  let currentSum = 0;

  nums.forEach((num) => {
    currentSum += num;
    runningSumNumbers.push(currentSum);
  });

  return runningSumNumbers;
}
