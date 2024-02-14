class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Введите первое число: ");
        int x = int.Parse(Console.ReadLine());
        Console.WriteLine("Введите второе число: ");
        int y = int.Parse(Console.ReadLine());
        int greater = Utils.Greater(x, y);
        Console.WriteLine("Большим из чисел {0} и {1} является {2} ", x, y, greater);
        Utils.Swap(ref x, ref y);
        Console.WriteLine("После swap: \t" + x + " "+ y);
        int f;
        bool ok;
        Console.WriteLine("Number for factorial:");
        x= int.Parse(Console.ReadLine());
        ok=Utils.Factorial(x, out f);
        if (ok) Console.WriteLine("Factorial(" + x + ") = " + f);
        else Console.WriteLine("Cannot compute this factorial");
        Console.WriteLine("Введите первую сторону: ");
        int a= int.Parse(Console.ReadLine());
        //Console.WriteLine("Введите вторую сторону: ");
        //int b = int.Parse(Console.ReadLine());
        //Console.WriteLine("Введите третью сторону: ");
        //int c = int.Parse(Console.ReadLine());
        double answer;
        //double ans = Operation.Square(a, b, c, out answer);
        double ans = Operation.Square(a, out answer);
        Console.WriteLine("S = {0}", ans);
        double x1 = 0;
        double x2 = 0;
        Console.WriteLine("Введите коэффициенты уравнения через enter:");
        float p = float.Parse(Console.ReadLine());
        float q = float.Parse(Console.ReadLine());
        float r = float.Parse(Console.ReadLine());
        int logic=Utils.Eql(p, q, r, ref x1, ref x2);
        if (logic == 0) Console.WriteLine("Корень уравнения с коэффициентами a = {0}, b = {1}, c\r\n= {2} равны: x1 = x2 = {3}\r\n", p, q, r, x1);
        else if (logic == 1) Console.WriteLine("Корни уравнения с коэффициентами a = {0}, b = {1}, c = {2} равны x1 = {3}, x2 = {4}", p, q, r, x1, x2);
        else Console.WriteLine("Корней уравнения с коэффициентами a = {0}, b = {1}, c\r\n= {2} нет.\r\n");
        string test = Console.ReadLine();


    }
}