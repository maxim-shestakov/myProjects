﻿public enum AccountType { Checking, Deposit }
public struct BankAccount
{
    public long accNo;
    public decimal accBal;
    public AccountType accType;
}
class Struct
{
    public static void Main(string[] args)
    {
        BankAccount goldAccount;
        //goldAccount.accNo = 123;
        Console.Write("Enter account number: ");
        goldAccount.accNo = long.Parse(Console.ReadLine());
        goldAccount.accBal = (decimal)3200.00;
        goldAccount.accType = AccountType.Checking;
        Console.WriteLine("*** Account Summary ***");
        Console.WriteLine("Acct Number {0}", goldAccount.accNo);
        Console.WriteLine("Acct Type {0}", goldAccount.accType);
        Console.WriteLine("Acct Balance ${0}", goldAccount.accBal);
        string test = Console.ReadLine();

    }
}