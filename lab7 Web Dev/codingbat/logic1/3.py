def squirrel_play(temp, is_summer):
    return (60<=temp<=90) or (is_summer==True and 60<=temp<=100)

temp=int(input())
is_summer=input()=='True'
print(squirrel_play(temp, is_summer))