def end_other(a, b):
    a=a.lower()
    b=b.lower()
    return a.endswith(b) or b.endswith(a)
        
a=input()
b=input()
print(end_other(a, b))