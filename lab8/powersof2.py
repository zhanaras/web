a = int(input())
i = 0
while a:
    i += a%2
    a //= 2
if (i == 1):
    print('YES')
else:
    print('NO')
