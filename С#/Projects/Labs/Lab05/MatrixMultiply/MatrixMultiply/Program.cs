using System.Numerics;
using System.Security.Cryptography;

class Program
{
    public static void Main(string[] args)
    {
        int[,] a = new int[2, 2];
        Input(a);
        int[,] b = new int[2, 2];
        Input(b);
        int[,] result = new int[2, 2];
        MatrMul(a, b, result);
        Output(result);
        int s = 0;
        int[,] c = new int[2, 2];
        s = MatrSum(s, c);
        double sAverage=s/c.GetLength(0)/c.GetLength(1);
        int[] test = { 1, 2, 3, 4, 5, 6 };
        Console.WriteLine("Multiply Between = {0}",MatrMulBtw(test));
        string stop = Console.ReadLine();

    }

    private static int MatrSum(int s, int[,] c)
    {
        for (int i = 0; i < c.GetLength(0); i++)
        {
            for (int j = 0; j < c.GetLength(1); j++)
            {
                s += (c[i, j]);
            }
        }

        return s;
    }
    private static int MatrPlusOrMinusSum(int s, int[,] c)
    {
        for (int i = 0; i < c.GetLength(0); i++)
        {
            for (int j = 0; j < c.GetLength(1); j++)
            {
                if (c[i,j]>0) s += (c[i, j]);
                //if (c[i,j]<0) s += (c[i, j]);
            }
        }

        return s;
    }
    private static int MatrOdd(int s, int[,] c)
    {
        for (int i = 0; i < c.GetLength(0); i++)
        {
            for (int j = 0; j < c.GetLength(1); j++)
            {
                if ((i+j)%2==0) s += (c[i, j]);
                //if ((i+j)%2==0) s += (c[i, j]);
            }
        }

        return s;
    }
    private static int MatrMax(int s, int[,] c)
    {
        int m = -1000;
        for (int i = 0; i < c.GetLength(0); i++)
        {
            for (int j = 0; j < c.GetLength(1); j++)
            {
                if (c[i,j]>m) m= c[i,j];
            }
        }

        return m;
    }
    private static int MatrMinInd(int[] c, out int m, out int iInd)
    {
        m = 10000000;
        iInd = 0;
        for (int i = 0; i < c.GetLength(0); i++)
        {
            if (c[i] < m)
            {
                m = c[i];
                iInd = i;
            }
            }

        return 0;
    }
    private static int MatrMaxInd(int[] c, out int m, out int iInd)
    {
        m = 0;
        iInd = 0;
        for (int i = 0; i < c.GetLength(0); i++)
        {
            if (c[i] > m)
            {
                m = c[i];
                iInd = i;
            }
            
        }

        return 0;
    }
    private static int MatrMulBtw(int[] c)
    {
        int s = 1;
        int iMin, iMax, jMin, jMax;
        int m = 0;
        int start = MatrMinInd(c, out m, out iMin);
        int end = MatrMaxInd(c, out m, out iMax);
        Console.WriteLine("{0}, {1} ", iMin, iMax);
        for (int i = iMin; i < iMax; i++)
        {
                s *= c[i];
        }
        return s;
    }

    private static void MatrMul(int[,] a, int[,] b, int[,] result)
    {
        result[0, 0] = a[0, 0] * b[0, 0] + a[0, 1] * b[1, 0]; result[0, 1] = a[0, 0] * b[0, 1] + a[0, 1] * b[1, 1];
        result[1, 0] = a[1, 0] * b[0, 0] + a[1, 1] * b[1, 0]; result[1, 1] = a[1, 0] * b[0, 1] + a[1, 1] * b[1, 1];
    }
    private static void Input(int[,] a)
    {
        for (int r = 0; r < a.GetLength(0); r++)
        {
            for (int c = 0; c < a.GetLength(1); c++)
            {
                Console.Write("Enter value for [{0}, {1}] : ", r, c);
                string s = Console.ReadLine();
                a[r, c] = int.Parse(s);
            }
        }
        Console.WriteLine();
    }

    private static void Output(int[,] result)
    {
        for (int i = 0; i < result.GetLength(0); i++)
        {
            for (int j = 0; j < result.GetLength(1); j++)
            {
                Console.Write(result[i, j] + " ");
            }
            Console.WriteLine();
        }
    }
}