def big_diff(nums):
    s=100
    b=0
    for i in range(len(nums)):
        s=min(s, nums[i])
        b=max(b, nums[i])
    return b-s

nums=list(map(int, input().split()))
print(big_diff(nums))