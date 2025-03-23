n=int(input())
i=2
if(n>=2):
    while(i<=n):
        if(n%i==0):
            print(i)
            break
        i+=1