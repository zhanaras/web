n = int(input())
two_in_power = 2
power = 0
while two_in_power <= n:
    two_in_power *= 2
    power += 1
print(power+1)
