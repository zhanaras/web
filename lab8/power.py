A = [2]
A = input().split()

for i in range(len(A)):
    A[0] = float(A[0])
    A[1] = int(A[1])

def power(A):
    print(A[0]**A[1])

power(A)