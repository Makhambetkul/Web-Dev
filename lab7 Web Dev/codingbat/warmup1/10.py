def missing_char(str, n):
    return str[:n]+str[n+1:]

str=input()
n=int(input())
print(missing_char(str, n))