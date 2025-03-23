def count_hi(str):
    count=0
    for i in range(len(str)-1):
        if str[i]+str[i+1]=="hi":
            count+=1
    return count

str=input()
print(count_hi(str))