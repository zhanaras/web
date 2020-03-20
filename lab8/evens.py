n = int(input())
A = []
A = list(map(int, input().split()))
for i in range(len(A)):
    if(A[i] % 2 == 0):
        print(A[i])