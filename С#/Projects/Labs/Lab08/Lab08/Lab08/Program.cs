using System.Runtime.Intrinsics.X86;

class Program
{
    public static void Main(string[] args)
    {
        Book b2 = new Book("Толстой Л.Н.", "Война и мир", "Наука и жизнь", 1234, 2013, 101, true);
        Book b1 = new Book();
        b1.SetBook("Пушкин А.С.", "Капитанская дочка","Вильямс", 123, 2012);
        Book b3 = new Book("Лермонтов М.Ю.", "Мцыри");
        //b2.TakeItem();
        //b2.Show();
        //Magazine mag1 = new Magazine("О природе", 5, "Земля имы", 2014, 1235, true);
        //mag1.Show();
        //Console.WriteLine("\n Тестирование полиморфизма");
        //Item it;
        /*it = b2;
        it.TakeItem();
        it.Return();
        it.Show();
        it = mag1;
        it.TakeItem();
        it.Return();
        it.Show();*/
        /*Magazine mag1 = new Magazine("О природе", 5, "Земля имы", 2014, 1235, true);
        mag1.TakeItem();
        mag1.Show();
        mag1.IfSubs = true;
        mag1.Subs();
        Item[] itmas = new Item[4];
        itmas[0] = b1;
        itmas[1] = b2;
        itmas[2] = b3;
        itmas[3] = mag1;
        Array.Sort(itmas);
        Console.WriteLine("\nСортировка по инвентарному номеру");
        foreach (Item x in itmas)
        {
            x.Show();
        }
        */
        ArithmeticProgression ArPg = new ArithmeticProgression(1, 1);
        GeometricProgression GrPg = new GeometricProgression(2, 1);
        Console.WriteLine(ArPg.GetElement(5));
        Console.WriteLine(GrPg.GetElement(5));
        string test = Console.ReadLine();

    }
}