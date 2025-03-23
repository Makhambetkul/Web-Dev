def not_string(str):
    if(str[:3]!="not"):
        return "not "+str
    return str

str=input()
print(not_string(str))