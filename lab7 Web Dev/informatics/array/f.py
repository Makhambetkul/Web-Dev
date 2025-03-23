n=int(input())
arr=input().split()
count=0
if(len(arr)!=n):
    print("there must be n elements")
else:
    for i in range(1, n-1):
        if(int(arr[i])>int(arr[i-1]) and int(arr[i])>int(arr[i+1]) and i-1!=-1):
            count+=1
    print(count)