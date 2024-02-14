def HanoiTowers(n,fromPeg,ToPeg):
    if n==1:
        print(f'Переместите диск с {fromPeg} стержня на {ToPeg} стержень')
        return
    unusedPeg=6-fromPeg-ToPeg
    HanoiTowers(n-1,fromPeg,unusedPeg)
    print(f'Переместите диск с {fromPeg} стержня на {ToPeg} стержень')
    HanoiTowers(n-1,unusedPeg,ToPeg)

HanoiTowers(3,1,3)