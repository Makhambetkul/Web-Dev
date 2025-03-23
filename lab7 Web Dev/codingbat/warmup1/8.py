def pos_neg(a, b, negative):
    return (a<0 and b<0) or ((a<0 or b<0) and negative!=True)

a=int(input())
b=int(input())
negative=input()=="True"
print(pos_neg(a, b, negative))