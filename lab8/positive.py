n = int(input())
A = []
cnt = 0
A = list(map(int, input().split()))
for i in range(len(A)):
    if A[i]>0:
        cnt += 1
print(cnt)