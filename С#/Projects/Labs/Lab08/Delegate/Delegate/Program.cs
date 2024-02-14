class Program
{
    public static void Main(string[] args)
    {
        /*Book b4 = new Book("Толстой Л.Н.", "Анна Каренина","Знание", 1204, 2014, 103, true);
        Book b5 = new Book("Неш Т", "Программирование для профессионалов", "Вильямс", 1200, 2014, 108, true);
        Book.RetSrok += new Book.ProcessBookDelegate(Operation.MetodObrabotchik);
        b4.ReturnSrok = true;
        b5.ReturnSrok = true;
        Console.WriteLine("\nКниги возвращены в срок: ");
        b4.ProcessPaperbackBooks(Operation.PrintTitle);
        b5.ProcessPaperbackBooks(Operation.PrintTitle);*/
        Gamer g1 = new Gamer("Niko");
        IgralnayaKost ig1 = new IgralnayaKost();
        IgralnayaKost.MaxPoints += new IgralnayaKost.ProcessIgrKostDelegate(IgralnayaKost.MetodObrabotchik);
        for (int i = 1; i <= 6; i++)
        {
            int points = g1.SeansGame();
            Console.WriteLine("Выпало количество очков {0} для игрока {1}",points, g1.ToString());
            if (points==6) {
                ig1.IsMax = true;
            }
        }
    }
}