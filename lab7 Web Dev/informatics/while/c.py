n=int(input())
i=0
j=0
while(j<n):
    j=pow(2, i)
    if(j<=n):
        print(j, end=" ")
    i+=1