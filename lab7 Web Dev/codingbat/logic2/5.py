def round10(num):
    if num%10<5:
        num=num-num%10
    else:
        num=num+10-num%10
    return num

def round_sum(a, b, c):
    return round10(a)+round10(b)+round10(c)

a=int(input())
b=int(input())
c=int(input())
print(round_sum(a, b, c))