def sum13(nums):
    sum=0
    for i in range(len(nums)):
        if nums[i]==13:
            break
        sum+=nums[i]
    return sum

nums=list(map(int, input().split()))
print(sum13(nums))