def max_end3(nums):
    max=-10
    nums2=[]
    for i in range(3):
        if max<nums[0]:
            max=nums[0]
        if max<nums[2]:
            max=nums[2]
    for i in range(3):
        nums2.append(max)
    return nums2

nums=list(map(int, input().split()))
print(max_end3(nums))
    