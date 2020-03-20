n = int(input())
A = []
A = list(map(int, input().split()))
cnt = 0
for i in range(1, len(A)):
    if (A[i]>0 and A[i-1]>0) or (A[i]<0 and A[i-1]<0):
        cnt+=1
if cnt>0:
    print('YES')
else:
    print('NO')