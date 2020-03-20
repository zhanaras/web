a = int(input())
b = int(input())
for i in range (a, b+1):
    root = i**0.5
    if(i//root == root and i%root == 0):
        print(i)