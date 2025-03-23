x=int(input())
count=0
for i in range(len(str(x))):
    count+=x%10
    x=x//10
print(count)