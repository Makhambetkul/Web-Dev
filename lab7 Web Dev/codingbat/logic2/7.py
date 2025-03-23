def make_chocolate(small, big, goal):
    if goal-big*5<=small:
        return goal-big*5
    else:
        return -1
    
small=int(input())
big=int(input())
goal=int(input())
print(make_chocolate(small, big, goal))