n=int(input())
arr=input().split()
if(len(arr)!=n):
    print("there must be n elements in the array")
else:
    for i in range(n):
        if(i%2==0):
            print(arr[i], end=" ")
