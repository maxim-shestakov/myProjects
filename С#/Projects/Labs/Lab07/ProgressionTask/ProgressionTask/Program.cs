class Program
{
    public static void Main(string[] args)
    {
        ArithmeticProgression ArPg = new ArithmeticProgression(1,1);
        GeometricProgression GrPg = new GeometricProgression(2, 1);
        Console.WriteLine(ArPg.GetElement(5));
        Console.WriteLine(GrPg.GetElement(5));
    }
}