using System;

internal class  Triangle
{
    private double firstSide;
    private double secondSide;
    private double thirdSide;
    public Triangle(double firstSide, double secondSide, double thirdSide)
	{
		this.firstSide = firstSide;
		this.secondSide=secondSide;
		this.thirdSide=thirdSide;
	}
    public void setTriangle(double firstSide, double secondSide, double thirdSide)
    {
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
    }
    public Triangle() { }
    public void getSides()
    {
        Console.WriteLine("Стороны треугольника равны, соответственно: {0},{1},{2}", firstSide, secondSide, thirdSide);
    }
    public double Perimeter()
    {
        return firstSide+secondSide+thirdSide;
    }
    public double Square()
    {
        double p = Perimeter() / 2;
        return (Math.Sqrt(p*(p-firstSide)*(p-secondSide)*(p-thirdSide)));
    }
    public bool Check()
    {
        if ((firstSide +secondSide <= thirdSide) || (firstSide + thirdSide <= secondSide) ||(secondSide + thirdSide <= firstSide)) return false;
        else
        {
            return true;
        }
    }
}
