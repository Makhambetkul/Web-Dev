n=int(input())
arr=input().split()
arr2=[]
m=0
m2=0
for i in range(n):
    if(int(arr[i])>m):
        m=int(arr[i])
for i in range(n):
    if(int(arr[i])!=m):
        arr2.append(arr[i])
for i in range(len(arr2)):
    if(int(arr2[i])>m2):
        m2=int(arr2[i])
print(m2)