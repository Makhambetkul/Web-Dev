a=int(input())
b=0
for i in range(len(str(a))):
    b+=(a%10)*(2**i)
    a=a//10
print(b)