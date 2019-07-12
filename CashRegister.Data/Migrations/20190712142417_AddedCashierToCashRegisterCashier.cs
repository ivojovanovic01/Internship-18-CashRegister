using Microsoft.EntityFrameworkCore.Migrations;

namespace CashRegister.Data.Migrations
{
    public partial class AddedCashierToCashRegisterCashier : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "CashRegisters",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Blagajna 1" },
                    { 2, "Blagajna 2" },
                    { 3, "Blagajna 3" }
                });

            migrationBuilder.InsertData(
                table: "Cashiers",
                columns: new[] { "Id", "FirstName", "LastName", "Password", "Username" },
                values: new object[,]
                {
                    { 1, "Ana", "Anic", "2212ana", "aanic123" },
                    { 2, "Lidija", "Bacic", "lidijalile123", "lile123" },
                    { 3, "Lana", "Lanic", "12301lanica", "lanci123" }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "AvailableQuantity", "Barcode", "Name", "Price", "TaxType" },
                values: new object[,]
                {
                    { 1, 1000, "9007352892847", "Coca-Cola", 12.49, 1 },
                    { 2, 100000, "1279642523276", "vrecica treger", 0.59999999999999998, 1 },
                    { 3, 1000, "2582141461919", "pivo Karlovacko 0.5l", 6.9900000000000002, 1 },
                    { 4, 20000, "1973408785484", "rajcica pasirana", 7.9900000000000002, 1 },
                    { 5, 30000, "6582196977316", "kecap blagi", 10.99, 1 },
                    { 6, 70000, "2165881107496", "cedevita limun", 12.49, 1 },
                    { 7, 20, "5776819685170", "bijeli kruh", 8.0, 0 },
                    { 8, 3, "8250035889203", "crni kruh", 10.0, 0 },
                    { 9, 1000, "7431679019460", "cokolada Milka 100g", 10.0, 1 },
                    { 10, 100, "8147969019356", "sladoled Snjeguljica", 8.0, 1 }
                });

            migrationBuilder.InsertData(
                table: "CashRegisterCashiers",
                columns: new[] { "CashRegisterId", "CashierId" },
                values: new object[,]
                {
                    { 1, 1 },
                    { 2, 1 },
                    { 1, 2 },
                    { 2, 2 },
                    { 1, 3 },
                    { 3, 3 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "CashRegisterCashiers",
                keyColumns: new[] { "CashRegisterId", "CashierId" },
                keyValues: new object[] { 1, 1 });

            migrationBuilder.DeleteData(
                table: "CashRegisterCashiers",
                keyColumns: new[] { "CashRegisterId", "CashierId" },
                keyValues: new object[] { 1, 2 });

            migrationBuilder.DeleteData(
                table: "CashRegisterCashiers",
                keyColumns: new[] { "CashRegisterId", "CashierId" },
                keyValues: new object[] { 1, 3 });

            migrationBuilder.DeleteData(
                table: "CashRegisterCashiers",
                keyColumns: new[] { "CashRegisterId", "CashierId" },
                keyValues: new object[] { 2, 1 });

            migrationBuilder.DeleteData(
                table: "CashRegisterCashiers",
                keyColumns: new[] { "CashRegisterId", "CashierId" },
                keyValues: new object[] { 2, 2 });

            migrationBuilder.DeleteData(
                table: "CashRegisterCashiers",
                keyColumns: new[] { "CashRegisterId", "CashierId" },
                keyValues: new object[] { 3, 3 });

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Products",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "CashRegisters",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "CashRegisters",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "CashRegisters",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Cashiers",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Cashiers",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Cashiers",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
