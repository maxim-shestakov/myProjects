class GeometricProgression: Progression
{
    private double multiplier;
    public GeometricProgression(double multiplier, double firstElement): base(firstElement)
    {
        this.multiplier = multiplier;
    }
    public override double GetElement(int k)
    {
        return firstElement*Math.Pow(multiplier,k);
    }
}