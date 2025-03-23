def sum3(nums):
    sum=0
    if len(nums)==3:
        for i in range(3):
            sum+=int(nums[i])
    return sum

nums=list(map(int, input().split()))
print(sum3(nums))