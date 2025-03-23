def rotate_left3(nums):
    nums2=[]
    for i in range(3):
        nums2.insert(i-1, nums[i])
    return nums2

nums=list(map(int, input().split()))
print(rotate_left3(nums))
