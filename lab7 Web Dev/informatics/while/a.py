import math
n=int(input())
i=1
while(i<=n):
    if(math.sqrt(i)==round(math.sqrt(i))):
        print(i)
    i+=1