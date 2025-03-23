def parrot_trouble(talking, hour):
    if talking and (hour<7 or hour>20):
        return True
    else:
        return False
    
talking=input()=='True'
hour=int(input())
print(parrot_trouble(talking, hour))