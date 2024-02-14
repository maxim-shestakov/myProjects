﻿class Magazine: Item
{
    private String volume; // том
    private int number; // номер
    private String title; // название
    private int year; // год выпуска

    public Magazine(String volume, int number, String
title, int year, long invNumber, bool taken) : base(invNumber, taken)
    {
        this.volume = volume;
        this.number = number;
        this.title = title;
        this.year = year;
    }
    public Magazine()
    { }
    public override void Show()
    {
        Console.WriteLine("\nЖурнал:\n Том: {0}\n Номер:{1}\n Название: {2}\n Год выпуска: {3}",volume,number, title, year);
        base.Show();
    }
    public override void Return() // операция "вернуть"
    {
        taken = true;
    }
}