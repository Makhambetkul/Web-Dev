def common_end(a, b):
    return a[0]==b[0] or a[len(a)-1]==b[len(b)-1]

a=input().split()
b=input().split()
print(common_end(a, b))