a = int(input())
sum = 0
for i in range (1, (int(a**0.5) + 1)):
    if(a%i == 0):
        sum += 2
if(a**0.5 - int(a**0.5) == 0):
    print(sum -1)
else:
    print(sum)