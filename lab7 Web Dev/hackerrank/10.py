import textwrap

def wrap(string, max_width):
    return textwrap.fill(string, width=max_width)

a=input()
b=int(input())
print(wrap(a, b))