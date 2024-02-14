class Loop
{
    public static void Main(string[] args)
    {
        /*int[] myArray = { 100, 1, 32, 3, 14, 25, 6, 17, 8, 99 };
        int i;
        for (i=0; i<=myArray.Length-1; i += 1)
        {
            if (myArray[i]%2==0) myArray[i] = 0;
            Console.Write(myArray[i] + " ");
        }*/
        int[] MyArray;
        int i;
        Console.WriteLine("n = ");
        int n = int.Parse(Console.ReadLine());
        MyArray = new int[n];
        for (i = 0;i<MyArray.Length;i++)
        {
            Console.Write("a[{0}]=", i);
            MyArray[i] = int.Parse(Console.ReadLine());
        }
        foreach (int x in MyArray) Console.Write("{0} ", x);
        Console.Write("\nwhile: \t\t");
        i = 1;
        while (i < n)
        {
            Console.Write(" " + i);
            i += 2;
        }
        Console.Write("\ndo while: \t");
        i = 1;
        do
        {
            Console.Write(" " + i);
            i += 2;
        }
        while (i <= n);
        Console.Write("\nFor: \t\t");
        for (i = 1; i <= n; i += 2)
        {
            Console.Write(" " + i);
        }  
        string te = Console.ReadLine();
    }
}