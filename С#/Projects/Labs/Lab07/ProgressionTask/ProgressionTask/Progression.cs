abstract class Progression
{
    protected double firstElement;
    public Progression(double firstElement)
    {
        this.firstElement = firstElement;
    }
    abstract public double GetElement(int k);
}