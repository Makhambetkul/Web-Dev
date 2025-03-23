def centered_average(nums):
    sorted(nums)
    a=len(nums)//2
    return nums[a]

nums=list(map(int, input().split()))
print(centered_average(nums))