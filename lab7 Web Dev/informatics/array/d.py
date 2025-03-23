n=int(input())
count=0
arr=input().split()
if(len(arr)!=n):
    print("there must be n elements")
else:
    for i in range(n):
        if(int(arr[i])>int(arr[i-1]) and i-1!=-1):
            count+=1
print(count)