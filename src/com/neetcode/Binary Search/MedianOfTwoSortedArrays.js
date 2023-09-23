/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const canSwap = nums2.length < nums1.length;
    if(canSwap)
        [nums1, nums2] = [nums2, nums1];
    
    let total = nums1.length + nums2.length;
    let mid = total >> 1;
    let [left, right] = [0, nums1.length - 1];
    let isEven = total % 2 === 0;

    while(true){
        let mid1 = Math.floor((left + right)/ 2);
        let mid2 = mid - mid1 - 2;
        let[aLeft, aRight, bLeft, bRight] = 
            getPointers(nums1, mid1, nums2, mid2);

        const isTarget = aLeft <= bRight && bLeft <= aRight;
        if(isTarget){
            return isEven ? (Math.max(aLeft, bLeft) + Math.min(aRight, bRight)) / 2 : Math.min(aRight, bRight);
        }

        const isTargetGreater = aLeft <= bRight;
        if (isTargetGreater) left = mid1 + 1;

        const isTargetLess = bLeft <= aRight;
        if (isTargetLess) right = mid1 - 1;
    }
};

const getPointers = (nums1, mid1, nums2, mid2) => {
    const getLeft = (nums, index) => 
        (0 <= index ? nums[index] : -Infinity);
    const getRight = (nums, index) =>
        (index + 1 < nums.length ? nums[index + 1] : Infinity);

    const [aLeft, bLeft] = [getLeft(nums1, mid1), getLeft(nums2, mid2)];
    const [aRight, bRight] = [getRight(nums1, mid1),getRight(nums2, mid2)]

    return [ aLeft, aRight, bLeft, bRight ];
}