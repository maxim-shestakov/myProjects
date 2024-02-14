class whileType
{
    public static void Main(string[] args)
    {
        int a, b, temp;
        Console.Write("a = ");
        a = int.Parse(Console.ReadLine());
        Console.Write("b = ");
        b = int.Parse(Console.ReadLine());
        temp = a;
        while (temp!=b)
        {
            a = temp;
            if (a<b)
            {
                temp = a;
                a= b;
                b= temp;
            }
            temp=a-b;
            a = b;
        }
        Console.WriteLine("while answer: {0}",temp);
        Console.Write("doWhile answer: ");
        do
        {
            if (temp!=b)
            {
                a = temp;
                if (a < b)
                {
                    temp = a;
                    a = b;
                    b = temp;
                }
                temp = a - b;
                a = b;
            }
        }
        while (temp != b);
        Console.Write(temp);
        string test = Console.ReadLine();
    }
}