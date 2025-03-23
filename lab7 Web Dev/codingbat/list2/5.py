def sum67(nums):
    sum=0
    in_ignore=False
    for num in nums:
        if num==6:
            in_ignore=True
        elif num==7:
            in_ignore=False
        elif not in_ignore:
            sum+=num
    return sum

nums=list(map(int, input().split()))
print(sum67(nums))