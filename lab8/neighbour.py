n = int(input())
A = []
cnt = 0
A = list(map(int, input().split()))
for i in range(1, len(A)-1):
    if A[i]>A[i-1] and A[i]>A[i+1]:
        cnt+=1
print(cnt)
