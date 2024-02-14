abstract class Item: IComparable
{
    protected long invNumber;
    protected bool taken;
    public Item(long invNumber, bool taken)
    {
        this.invNumber = invNumber;
        this.taken = taken;
    }
    int IComparable.CompareTo(object obj)
    {
        Item it = (Item)obj;
        if (this.invNumber == it.invNumber) return 0;
        else if (this.invNumber > it.invNumber) return 1;
        else return -1;
    }
    public Item()
    {
        this.taken = true;
    }
    public bool IsAvailable()
    {
        if (taken==true) return true;
        else return false;
    }
    public long GetInvNumber()
    {
        return invNumber;
    }
    public void Take()
    {
        taken = false;
    }
    abstract public void Return();

    public virtual void Show()
    {
        Console.WriteLine("Состояние единицы хранения:\nИнвентарный номер: {0}\nНаличие: {1}", invNumber,taken);
    }
    public void TakeItem()
    {
        if (this.IsAvailable())
            this.Take();
    }
}