def sleep_in(weekday, vacation):
    if(not weekday or vacation):
        return True
    else:
        return False

weekday=input()=='True'
vacation=input()=='True'
print(sleep_in(weekday, vacation))