class ArithmeticProgression: IProgression
{
    private double difference;
    public double firstElement { get; set; }
    public ArithmeticProgression(double difference, double firstElement)
    {
        this.difference = difference;
        this.firstElement = firstElement;
    }
    public ArithmeticProgression(double difference)
    {
        this.difference = difference;
    }
    public ArithmeticProgression() { }
    
    public double GetElement(int k)
    {
        return firstElement + difference * k;
    }
}