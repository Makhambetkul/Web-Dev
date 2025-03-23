def array123(nums):
    a=0
    b=0
    c=0
    for i in range(len(nums)):
        if int(nums[i])==1:
            a+=1
        if int(nums[i])==2:
            b+=1
        if int(nums[i])==3:
            c+=1
    return a>0 and b>0 and c>0

nums=input().split()
print(array123(nums))