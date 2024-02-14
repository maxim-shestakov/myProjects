using System;


internal class Book: Item
{
    public delegate void ProcessBookDelegate(Book book);
    private bool returnSrok = false;
    public bool ReturnSrok
    {
        get
        {
            return returnSrok;
        }
        set { returnSrok = value;
            if (ReturnSrok == true)
                RetSrok(this);
        }
    }
    public void ProcessPaperbackBooks(ProcessBookDelegate processBook) 
    {
        if (ReturnSrok)
            processBook(this);
    }
    public static event ProcessBookDelegate RetSrok;

    private String author;
    public String title;
    private String publisher;
    private int pages;
    private int year;
    private static double price = 9;
    public void SetBook(String author, String title, String publisher, int pages, int year)
    {
        this.author = author;
        this.title = title;
        this.publisher = publisher;
        this.pages = pages;
        this.year = year;
    }
    public Book(String author, String title, String
publisher, int pages, int year, long invNumber, bool
taken) : base(invNumber, taken)
    {
        this.author = author;
        this.title = title;
        this.publisher = publisher;
        this.pages = pages;
        this.year = year;
    }
    public Book(String author, String title)
    {
        this.author = author;
        this.title = title;
    }
    public Book()
    { }
    public static void SetPrice(double price)
    {
        Book.price = price;
    }
    public override void Show()
    {
        Console.WriteLine("\nКнига:\n Автор: {0}\n Название:{1}\n Год издания: {2}\n {3}стр.\n Стоимость аренды:{4}", author, title, year, pages, Book.price);
        base.Show();
    }
    public double PriceBook(int s)
    {
        double cust = s * price;
        return cust;
    }
    public void TakeItem()
    {
        if (this.IsAvailable())
            this.Take();
    }
    public override void Return()
    {
        if (ReturnSrok==true)
            taken=true;
        else
            taken=false;
    }
    public override string ToString()
    {
        string str = this.title + ", " + this.author + " Инв.номер " + this.invNumber;
        return str;
    }

}
