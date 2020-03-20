A = [2]
A = list(map(int, input().split()))

def xor(A):
    return bool(A[0]) ^ bool(A[1])

if xor(A) == True:
    print(1)
else:
    print(0)

