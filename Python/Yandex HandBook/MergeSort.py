import time


def Merge(list1,list2):
    sortedList=[]
    while len(list1)+len(list2)!=0:
        flag1=0
        flag2=1
        if len(list1)==0:
            sortedList.append(min(list2))
            flag2=1
            list2 = list2[1:]
        elif len(list2)==0:
            sortedList.append(min(list1))
            list1 = list1[1:]
        else:
            if min(list1)<min(list2):
                sortedList.append(min(list1))
                flag1=1
            else:
                sortedList.append(min(list2))
            if flag1==1:
                list1=list1[1:]
            elif flag2==1:
                list2=list2[1:]
    return sortedList

def MergeSort(s):
    if len(s)==1:
        return s
    firsthalf=s[:len(s)//2]
    secondhalf=s[len(s)//2:]
    firstSortedHalf=MergeSort(firsthalf)
    secondSortedHalf=MergeSort(secondhalf)
    result=Merge(firstSortedHalf,secondSortedHalf)
    return result
st_time=time.time()
mas=[674, 627, 680, 993, 785, 248, 335, 731, 197, 588, 322, 313, 46, 297, 427, 968, 340, 12, 193, 706, 838, 863, 999, 563, 601, 791, 993, 310, 307, 505, 154, 894, 384, 512, 434, 321, 628, 130, 755, 49, 996, 219, 571, 126, 623, 147, 526, 265, 115, 1000, 194, 55, 287, 263, 317, 389, 875, 696, 548, 573, 822, 862, 234, 562, 379, 395, 177, 138, 384, 66, 196, 215, 165, 915, 195, 810, 734, 15, 325, 472, 871, 19, 502, 987, 216, 510, 261, 958, 756, 370, 632, 724, 981, 985, 137, 106, 591, 140, 499, 734]
print(time.time()-st_time)