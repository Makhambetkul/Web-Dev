def near_ten(num):
    return num%10<=2 or 10-num%10<=2

num=int(input())
print(near_ten(num))