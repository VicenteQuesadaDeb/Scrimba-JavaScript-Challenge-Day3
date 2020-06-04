function firstDuplicate(nums) {
    //  write code here.
    var reps = whichReps(nums)
    console.log(reps)
}
//Returns an array with objects, each of them with the number and the index of those which are repeated.
function whichReps(nums) {
  var reps = [];
  var elem = {
    num: 0,
    index: 0,
  };
  var count = 1;
  for (var i = 0; i < nums.length; i++) {
    for (var j = 1; j < nums.length; j++) {
      var count2 = count++;
      var comparingNumberAdded;
      if (nums[i] === nums[j]) {
        //if first element = next element
        //Save repeated element
        if (comparingNumberAdded === undefined) {
          //if we didn't add the aux element
          //First elem
          elem.num = nums[i];
          elem.index = count;
          reps.unshift(elem);
          comparingNumberAdded = true;
          //Second elem
          elem.num = nums[j];
          elem.index = count2;
          reps.push(elem);
        } else {
          //if we added already aux element
          //Second elem
          elem.num = nums[j];
          elem.index = count2;
          reps.push(elem);
        }
        //increase counter of 2nd loop because we added the current element on [j]
        count2++;
      } else {
        //if not equal
        count2++;
      }
    }
    count++;
  }
  return reps;
}



/**
* Test Suite 
*/
describe('firstDuplicate()', () => {
    it('returns first duplicated value', () => {
        // arrange
        const nums = [2, 1, 3, 5, 3, 2];
        
        // act
        const result = firstDuplicate(nums);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(3);
    });
    
    it('returns -1 when no duplicated values', () => {
        // arrange
        const nums = [2, 1, 3, 5, 4, 6];
        
        // act
        const result = firstDuplicate(nums);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(-1);
    });
});