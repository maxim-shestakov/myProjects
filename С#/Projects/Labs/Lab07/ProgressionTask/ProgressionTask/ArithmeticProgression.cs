class ArithmeticProgression: Progression
{
    private double difference;
    public ArithmeticProgression(double difference, double firstElement): base(firstElement)
    {
        this.difference = difference;
    }
    public override double GetElement(int k)
    {
        return firstElement + difference * k;
    }
}