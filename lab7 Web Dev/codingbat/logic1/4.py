def cought_speeding(speed, is_birthday):
    if (speed<=60) or (speed<=65 and is_birthday==True):
        return 0
    if (61<=speed<=80) or (61<=speed<=85 and is_birthday==True):
        return 1
    else:
        return 2
    
speed=int(input())
is_birthday=input()=='True'
print(cought_speeding(speed, is_birthday))