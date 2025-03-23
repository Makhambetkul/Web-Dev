def monkey_trouble(a_smile, b_smile):
    if(a_smile and b_smile) or (not a_smile and not b_smile):
        return True
    else:
        return False
    
a_smile=input()=='True'
b_smile=input()=='True'
print(monkey_trouble(a_smile, b_smile))