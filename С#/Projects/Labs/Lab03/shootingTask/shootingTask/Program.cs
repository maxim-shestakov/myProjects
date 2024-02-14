class Program
{
    public static void Main(string[] args)
    {
        int n = int.Parse(Console.ReadLine());
        float x, y;
        Random rnd = new Random();
        float xCenter = rnd.Next();
        float yCenter = rnd.Next();
        int points = 0;
        for (int i = 0; i < n; i++)
        {
            float xBothering = rnd.Next();
            float yBothering = rnd.Next();
            Console.Write("x = ");
            x = float.Parse(Console.ReadLine());
            Console.Write("y = ");
            y = float.Parse(Console.ReadLine());
            if ((Math.Pow(x+ xBothering - xCenter,2)+Math.Pow(y + yBothering - yCenter,2))<=9)
            {
                if ((Math.Pow(x-xCenter, 2) + Math.Pow(y-yCenter, 2)) <= 4)
                {
                    if ((Math.Pow(x-xCenter, 2) + Math.Pow(y-yCenter, 2)) <= 1)
                    {
                        points += 10;
                    }
                    else { 
                        points += 5; 
                    }
                } else
                {
                    points += 1;
                }
            }
        }
        Console.WriteLine(points);
        string t = Console.ReadLine();
        
    }
}