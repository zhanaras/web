A = [4]
A = list(map(int, input().split()))

def find_min(A):
    min = 500500
    for i in range(len(A)):
        if A[i] < min:
            min = A[i]
    print(min)

find_min(A)