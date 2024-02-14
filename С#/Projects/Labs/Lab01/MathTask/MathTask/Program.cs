class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Enter the perimeter");
        double halfPerimeter = Int32.Parse(Console.ReadLine())/2;
        Console.WriteLine("Enter the first side: ");
        int firstSide = Int32.Parse(Console.ReadLine());
        Console.WriteLine("Enter the second side: ");
        int secondSide = Int32.Parse(Console.ReadLine());
        Console.WriteLine("Enter the third side: ");
        int thirdSide = Int32.Parse(Console.ReadLine());
        double Square = Math.Sqrt((halfPerimeter * (halfPerimeter - firstSide)
            * (halfPerimeter - secondSide) * 
            (halfPerimeter - thirdSide)));
        Console.WriteLine("Your result = {0:F2}", Square);

    }
}