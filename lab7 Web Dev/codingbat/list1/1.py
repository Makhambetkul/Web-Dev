def first_last6(nums):
    return int(nums[0])==6 or int(nums[len(nums)-1])==6

nums=input().split()
print(first_last6(nums))