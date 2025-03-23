a=int(input())
if(0<a<30000):
    if(a%4==0 and a%100!=0) or (a%400==0):
        print("YES")
    else:
        print("NO")
else:
    print("Number must be positive and less than 30000")
