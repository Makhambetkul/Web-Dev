def has23(nums):
    for i in range(2):
        if(nums[i]==2 or nums[i]==3):
            return True
        else:
            return False
    
nums=list(map(int, input().split()))
print(has23(nums))