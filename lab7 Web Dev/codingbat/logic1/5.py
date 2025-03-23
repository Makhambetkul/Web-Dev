def sorta_sum(a, b):
    if 10<=a+b<=19:
        return 20
    else:
        return a+b
    
a=int(input())
b=int(input())
print(sorta_sum(a, b))