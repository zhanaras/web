n = int(input())
A = []
A = list(map(int, input().split()))
cnt = 0
for i in range(1, len(A)):
    if A[i] > A[i-1]:
        cnt += 1
print(cnt)