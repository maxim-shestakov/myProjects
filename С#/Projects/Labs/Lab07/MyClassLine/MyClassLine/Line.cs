class Line
{
    private Point pStart;
    private Point pEnd;
    public Line(Point pStart, Point pEnd)
    {
        this.pStart = pStart;
        this.pEnd = pEnd;
    }
    public Line()
    { }
    public double DlinL()
    {
        return pStart.Dlina(pEnd);
    }
    public void Show()
    {
        Console.WriteLine("Отрезок с координатами: ({0}) -({1})", pStart, pEnd);
}
}