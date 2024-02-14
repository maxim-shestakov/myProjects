class Program
{
    public static void Main(string[] args)
    {
        Console.Write("Year = ");
        int year = int.Parse(Console.ReadLine());
        if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0))
        {
            Console.WriteLine("YES");
        }
        else Console.WriteLine("NO");
        string test = Console.ReadLine();
    }
}