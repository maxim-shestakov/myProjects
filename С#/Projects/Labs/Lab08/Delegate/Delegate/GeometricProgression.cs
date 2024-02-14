class GeometricProgression: IProgression
{
    private double multiplier;
    public double firstElement { get; set; }
    public GeometricProgression(double multiplier, double firstElement) 
    {
        this.multiplier = multiplier;
        this.firstElement = firstElement;
    }
    public GeometricProgression(double multiplier)
    {
        this.multiplier=multiplier;
    }
    public GeometricProgression() { }
    public double GetElement(int k)
    {
        return firstElement*Math.Pow(multiplier,k);
    }
}