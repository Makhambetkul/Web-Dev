def make_bricks(small, big, goal):
    b=min(big, goal//5)
    s=goal-b*5
    if s<=small:
        return True
    else:
        return False
    
small=int(input())
big=int(input())
goal=int(input())
print(make_bricks(small, big, goal))