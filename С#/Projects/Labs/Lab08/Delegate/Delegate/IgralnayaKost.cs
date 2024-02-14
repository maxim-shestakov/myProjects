class IgralnayaKost
{
    Random r;
    public IgralnayaKost()
    {
        r = new Random();
    }
    public delegate void ProcessIgrKostDelegate(IgralnayaKost kost);
    public static event ProcessIgrKostDelegate MaxPoints;
    private bool maxp = false;
    public bool IsMax
    {
        get
        {
            return maxp;
        }
        set
        {
            maxp = value;
            if (IsMax == true)
                MaxPoints(this);
        }
    }

    public int random()
    {
        int res = r.Next(6) + 1;
        return res;
    }
    public override string ToString()
    {
        string str =  "Выпало максимальное количество очков!";
        return str;
    }
    public static void MetodObrabotchik(IgralnayaKost k)
    {
        Console.WriteLine(k.ToString());
    }
}