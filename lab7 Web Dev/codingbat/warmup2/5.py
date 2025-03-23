def last2(str):
    if len(str)<2:
        return 0
    str2=str[len(str)-2:]
    count=0
    for i in range(len(str)-2):
        sub=str[i:i+2]
        if sub==str2:
            count+=1
    return count

str=input()
print(last2(str))