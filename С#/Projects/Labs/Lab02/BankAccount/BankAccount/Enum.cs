public enum AccountType { Checking, Deposit }
class Enum
{
    
    public static void Main(string[] args)
    {
        AccountType goldAccount = AccountType.Checking;
        AccountType platinumAccount = AccountType.Deposit;
        Console.WriteLine("The Customer Account Type is {0}", goldAccount);
        Console.WriteLine("The Customer account Type is {0}", platinumAccount);
        Console.ReadLine(); //Для того, чтоб программа не закрывалась сразу же
    }
}