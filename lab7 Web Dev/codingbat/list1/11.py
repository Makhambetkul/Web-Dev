def make_ends(nums):
    nums2=[]
    nums2.append(nums[0])
    nums2.append(nums[2])
    return nums2

nums=list(map(int, input().split()))
print(make_ends(nums))