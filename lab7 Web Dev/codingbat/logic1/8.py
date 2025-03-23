def in1to10(n, outside_mode):
    return 1<=n<=10 or outside_mode==True

n=int(input())
outside_mode=input()=='True'
print(in1to10(n, outside_mode))