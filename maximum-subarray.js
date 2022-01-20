function maxSubArray(nums) {
    let count = {} // {'0':1,'1':3,'2':2,'3':5,'4':7,'5':6,'6':0}
    for (let i = 0; i < nums.length; i++) {	//i=8 < i=9 => T
      let num = nums[i];				//n=4
      for (let key in count) {			//
        let prevSum = count[key];
        let currSum = prevSum + num;
        count[key] += Math.max(prevSum, currSum);			//
      }
      count[i] = num;				// count['6']=1
    }
    let max = 0;
    for (let key in count) {
      if (max < count[key]) {
        max = count[key];
      }
    }
    console.log(count)
    return max;
  }
let nums = [-2,1,-3,4,-1,2,1,-5,4]
maxSubArray(nums)
