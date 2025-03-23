def alarm_clock(day, vacation):
    if(1<=day<=5):
        if vacation==True:
            return '10:00'
        else:
            return '7:00'
    elif(day==0 or day==6):
        if vacation==True:
            return 'off'
        else:
            return '10:00'
        
day=int(input())
vacation=input()=='True'
print(alarm_clock(day, vacation))
