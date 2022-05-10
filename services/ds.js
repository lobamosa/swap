var binarySearch = function(nums, target) {
    let pivot;
    left = 0;
    right = nums.length -1 
    while(left <= right)
        {
            pivot = Math.floor( ((left + right) / 2) );
            if(nums[pivot] == target)
                    return nums[pivot];
            if (target < nums[pivot])
                right = pivot - 1;
            else
                left = pivot + 1;
            
        }
    return - 1;
    
};

module.exports = binarySearch