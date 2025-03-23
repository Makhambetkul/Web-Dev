def power(a, b):
    m=1
    for i in range(b):
        m=m*a
    return m

a, b=map(int, input().split())
print(power(a, b))