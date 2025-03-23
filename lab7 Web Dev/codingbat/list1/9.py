def sum2(nums):
    if len(nums)<2:
        return nums[0]
    else:
        return nums[0]+nums[1]

nums=list(map(int, input().split()))
print(sum2(nums))