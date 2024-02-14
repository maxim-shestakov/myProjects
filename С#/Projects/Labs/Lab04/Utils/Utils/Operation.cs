public static class Operation
{
    public static double Square(int a, int b, int c, out double s)
    {
        s = 0;
        if (Check(a, b, c)==true)
        {
            double p = (a + b + c) / 2;
            s = Math.Sqrt((p * (p - b) * (p - c) * (p - a)));
            return s;
        }
        else
        {
            return s;
        }
    }
    private static bool Check(int a, int b, int c)
    {
        if (a + b <= c || a + c <= b || b + c <= a) return false;
        else return true;
    }
    public static double Square(int a, out double s)
    {
        s = Math.Sqrt(3)*a*a/4;
        return s;
    }
}