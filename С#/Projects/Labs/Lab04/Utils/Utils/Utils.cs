public static class Utils
{
    public static int Greater(int a, int b)
    {
        if (a > b) return a;
        else return b;
    }
    public static void Swap(ref int a, ref int b)
    {
        int temp = a;
        a= b;
        b= temp;
    }
    public static bool Factorial(int n, out int answer)
    {
        int k;
        int f = 1;
        bool ok = true;
        try
        {
            checked
            {
                for (k = 2; k <= n; k++)
                {
                    f *= k;
                }
            }
        }
        catch (Exception)
        {
            f = 0;
            ok=false;
        }
        answer = f;
        return ok;
    }
    public static int Eql(float a, float b, float c, ref double x1, ref double x2)
    {
        double d = b * b - 4 * a * c;
        if (d > 0)
        {
            x1 = (-b + Math.Sqrt(d)) / 2 / a;
            x2 = (-b - Math.Sqrt(d)) / 2 / a;
            return 1;
        }
        else if (d < 0)
        {
            return -1;
        }
        else
        {
            x1 = (-b + Math.Sqrt(d)) / 2 / a;
            x2 = x1;
            return 0;
        }
        
    }
}

