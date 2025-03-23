def string_bits(str):
    str2=""
    for i in range(len(str)):
        if i%2==0:
            str2+=str[i]
    return str2

str=input()
print(string_bits(str))