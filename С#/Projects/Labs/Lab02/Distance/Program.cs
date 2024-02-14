public struct Distance
{
    public float foot;
    public float inch;
}
class Program
{
    public static void Main(string[] args)
    {
        Distance firstDistance;
        Distance secondDistance;
        Distance thirdDistance;
        Console.WriteLine("Write the qnty of inches: ");
        firstDistance.inch = float.Parse(Console.ReadLine());
        Console.WriteLine("Write the qnty of foots: ");
        firstDistance.foot = float.Parse(Console.ReadLine());
        Console.WriteLine("Write the second qnty of inches: ");
        secondDistance.inch = float.Parse(Console.ReadLine());
        Console.WriteLine("Write the second qnty of foots: ");
        secondDistance.foot = float.Parse(Console.ReadLine());
        thirdDistance.foot = firstDistance.foot+secondDistance.foot+(int)(firstDistance.inch+secondDistance.inch)/12;
        thirdDistance.inch = (firstDistance.inch + secondDistance.inch) % 12;
        Console.WriteLine("Third Distance is {0}'-{1}''", thirdDistance.foot, thirdDistance.inch);
        string test = Console.ReadLine();
    }
}