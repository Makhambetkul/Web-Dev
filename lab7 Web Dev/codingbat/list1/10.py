def middle_way(a, b):
    c=[]
    c.append(a[1])
    c.append(b[1])
    return c

a=list(map(int, input().split()))
b=list(map(int, input().split()))
print(middle_way(a, b))