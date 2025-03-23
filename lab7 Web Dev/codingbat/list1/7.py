def reverse3(nums):
    nums2=[]
    for i in range(len(nums)):
        nums2.append(nums[len(nums)-i-1])
    return nums2        

nums=list(map(int, input().split()))
print(reverse3(nums))