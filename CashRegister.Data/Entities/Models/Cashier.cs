﻿using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace CashRegister.Data.Entities.Models
{
    public class Cashier
    {
        public Cashier()
        {
        }
        public Cashier(int id, string firstName, string lastName, string username, string password)
        {
            Id = id;
            FirstName = firstName;
            LastName = lastName;
            Username = username;
            Password = password;
        }
        public int Id { get; set; }

        [StringLength(20, MinimumLength = 3)]
        [Required]
        public string FirstName { get; set; }
        [StringLength(20, MinimumLength = 3)]
        [Required]
        public string LastName { get; set; }
        [StringLength(30, MinimumLength = 3)]
        [Required]
        public string Username { get; set; }
        [StringLength(30, MinimumLength = 3)]
        [Required]
        public string Password { get; set; }

        public ICollection<CashRegisterCashier> CashRegisterCashiers { get; set; }
        public ICollection<Receipt> Receipts { get; set; }
    }
}