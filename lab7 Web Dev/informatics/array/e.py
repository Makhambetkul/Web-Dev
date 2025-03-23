n=int(input())
arr=input().split()
a=0
if(len(arr)!=n):
    print("there must be n elements")
else:
    for i in range(n):
        if(arr[i]==arr[i-1] and i-1!=-1):
            a+=1
    if(a>=1):
        print("YES")
    else:
        print("NO")
        