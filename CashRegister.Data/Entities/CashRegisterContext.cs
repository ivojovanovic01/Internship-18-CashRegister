using CashRegister.Data.Entities.Models;
using Microsoft.EntityFrameworkCore;

namespace CashRegister.Data.Entities
{
    public class CashRegisterContext : DbContext
    {
        public CashRegisterContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Cashier> Cashiers { get; set; }
        public DbSet<Models.CashRegister> CashRegisters { get; set; }
        public DbSet<CashRegisterCashier> CashRegisterCashiers { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Receipt> Receipts { get; set; }
        public DbSet<ReceiptProduct> ReceiptProducts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CashRegisterCashier>()
                .HasKey(cs => new {cs.CashRegisterId, cs.CashierId});

            modelBuilder.Entity<CashRegisterCashier>()
                .HasOne(crs => crs.CashRegister)
                .WithMany(cr => cr.CashRegisterCashiers)
                .HasForeignKey(crs => crs.CashRegisterId);

            modelBuilder.Entity<CashRegisterCashier>()
                .HasOne(crs => crs.Cashier)
                .WithMany(c => c.CashRegisterCashiers)
                .HasForeignKey(crs => crs.CashierId);

            modelBuilder.Entity<ReceiptProduct>()
                .HasKey(rp => new {rp.ReceiptId, rp.ProductId});

            modelBuilder.Entity<ReceiptProduct>()
                .HasOne(rp => rp.Receipt)
                .WithMany(r => r.ReceiptProducts)
                .HasForeignKey(rp => rp.ReceiptId);

            modelBuilder.Entity<ReceiptProduct>()
                .HasOne(rp => rp.Product)
                .WithMany(p => p.ReceiptProducts)
                .HasForeignKey(rp => rp.ProductId);

            // database seed data is in migration
        }
    }
}