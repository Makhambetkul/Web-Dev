def cat_dog(str):
    c=0
    d=0
    for i in range(len(str)):
        if str[i:i+3]=="cat":
            c+=1
        elif str[i:i+3]=="dog":
            d+=1
    if c==d:
        return True
    else:
        return False
    
str=input()
print(cat_dog(str))