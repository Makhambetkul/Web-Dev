def array_count9(nums):
    count=0
    for i in range(len(nums)):
        if int(nums[i])==9:
            count+=1
    return count

nums=input().split()
print(array_count9(nums))