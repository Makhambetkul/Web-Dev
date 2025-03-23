def array_front9(nums):
    count=0
    for i in range(4):
        if int(nums[i])==9:
            count+=1
    return count!=0

nums=input().split()
print(array_front9(nums))