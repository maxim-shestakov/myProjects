class Program
{
    public static void Main(string[] args)
    {
        int s = 0;
        Console.Write("k = ");
        int k = int.Parse(Console.ReadLine());
        Console.Write("m = ");
        int m = int.Parse(Console.ReadLine());
        for (int i = 1; i <= 100; i++)
        {
            if (i > k && i < m) continue;
            s += i;
        }
        Console.WriteLine(s);
        string test = Console.ReadLine();
    }

}