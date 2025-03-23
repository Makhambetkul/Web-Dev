n=int(input())
arr=input().split()
if(len(arr)!=n):
    print("there must be n elements")
else:
    for i in range(n):
        if(int(arr[i]) % 2==0):
            print(arr[i], end=" ")