def same_first_last(nums):
    return nums[0]==nums[len(nums)-1]

nums=input().split()
print(same_first_last(nums))