import math
a=int(input())
b=int(input())
if(a<b):
    for i in range(a, b):
        if(math.sqrt(i)==round(math.sqrt(i))):
            print(i, end=" ")