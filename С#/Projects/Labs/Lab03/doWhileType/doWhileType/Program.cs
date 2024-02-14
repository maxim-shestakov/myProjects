class doWhileLoop
{
    public static void Main(string[] args)
    {
        //Цикл с постусловием:
        Console.Write("x1 = ");
        float x1 = float.Parse(Console.ReadLine());
        Console.Write("x2 = ");
        float x2 = float.Parse(Console.ReadLine());
        double x = x1;
        do
        {
            double y = Math.Sin(x);
            Console.WriteLine("sin({0}) = {1}", x, y);
            x += 0.01;
        }
        while (x <= x2);
        /*while (x<=x2)
        {

            double y = Math.Sin(x);
            Console.WriteLine("sin({0}) = {1}", x, y);
            x += 0.01;
        }*/
        string test = Console.ReadLine();
    }
}