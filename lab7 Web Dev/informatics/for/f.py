x=int(input())
for i in range(len(str(x))):
    if(x%10!=0):
        print(x%10, end="")
    x=x//10
    
    