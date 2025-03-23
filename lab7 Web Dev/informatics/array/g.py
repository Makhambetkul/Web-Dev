n=int(input())
arr=input().split()
if(len(arr)!=n):
    print("there must be n elements")
else:
    for i in range(n):
        print(arr[n-i-1], end=" ")