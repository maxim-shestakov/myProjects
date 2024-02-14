def PisanoPeriod(n):
    period=0
    current=0
    next=1
    while True:
        oldnext=next
        next=(current+next) % n
        current=oldnext
        period+=1
        if current==0 and next==1:
            return period

print(PisanoPeriod(10))