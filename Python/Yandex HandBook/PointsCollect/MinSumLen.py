def SegmentsCover(segments):
    points=[]
    segments_copy=segments.copy()
    while len(segments)!=0:
        l_m,r_m = min(segments, key=lambda x:x[1])
        points.append(r_m)
        for i in segments:
            if i[0]>=l_m and i[0]<=r_m:
                segments_copy.remove(i)
        segments=segments_copy.copy()
    return points

n=int(input())
segments=input().split()

for i in range(n):
    firstEl,secondEl=map(int,input().split())
    segments.append([firstEl,secondEl])
result=SegmentsCover(segments)
print(len(result))
print(*result)
