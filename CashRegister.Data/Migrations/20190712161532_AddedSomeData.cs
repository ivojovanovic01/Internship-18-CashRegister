using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CashRegister.Data.Migrations
{
    public partial class AddedSomeData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Receipts_CashRegisters_CashRegisterId",
                table: "Receipts");

            migrationBuilder.DropForeignKey(
                name: "FK_Receipts_Cashiers_CashierId",
                table: "Receipts");

            migrationBuilder.AlterColumn<int>(
                name: "CashierId",
                table: "Receipts",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.AlterColumn<int>(
                name: "CashRegisterId",
                table: "Receipts",
                nullable: true,
                oldClrType: typeof(int));

            migrationBuilder.InsertData(
                table: "Receipts",
                columns: new[] { "Id", "CashRegisterId", "CashierId", "CreatedTime", "TaxFreePrice", "TotalDirectTax", "TotalExciseTax", "TotalPrice" },
                values: new object[,]
                {
                    { new Guid("cbd8f8ef-464d-4697-9c74-1ddc09bd1ddb"), 1, 1, new DateTime(2019, 7, 11, 11, 10, 31, 494, DateTimeKind.Local).AddTicks(377), 27.6, 5.00, 0.38, 32.98},
                    { new Guid("3a77e5ce-e34c-4098-93de-516f9548e4f2"), 1, 1, new DateTime(2019, 7, 11, 12, 22, 31, 494, DateTimeKind.Local).AddTicks(377), 25.52, 4.00, 0.48, 30.00},
                    { new Guid("0cd306d0-a444-4cf6-b178-e48622daa39d"), 1, 1, new DateTime(2019, 7, 11, 13, 12, 31, 494, DateTimeKind.Local).AddTicks(377), 38.53, 9.63, 0.00, 48.16},
                    { new Guid("ceb83fff-648c-4694-bf6e-95e1f3d5672d"), 1, 1, new DateTime(2019, 7, 11, 14, 32, 31, 494, DateTimeKind.Local).AddTicks(377), 7.62, 0.00, 0.38, 8.00},
                    { new Guid("bc668c47-784e-4a21-997c-732cadb4b945"), 1, 1, new DateTime(2019, 7, 11, 15, 32, 31, 494, DateTimeKind.Local).AddTicks(377), 7.62, 0.00, 0.38, 8.00},
                    { new Guid("17be26f6-62e7-49b2-8ce8-ad5fb7e6aaf9"), 1, 1, new DateTime(2019, 7, 12, 8, 12, 31, 494, DateTimeKind.Local).AddTicks(377), 7.62, 0.00, 0.38, 8.00},
                    { new Guid("5d8e3242-14b2-46eb-be95-d1cd3f2aca44"), 1, 1, new DateTime(2019, 7, 12, 9, 22, 31, 494, DateTimeKind.Local).AddTicks(377), 7.62, 0.00, 0.38, 8.00},
                    { new Guid("ada73a4c-0f8e-49cd-9623-db88099673a0"), 1, 1, new DateTime(2019, 7, 12, 12, 13, 31, 494, DateTimeKind.Local).AddTicks(377), 7.62, 0.00, 0.38, 8.00},
                    { new Guid("09900a22-7583-48a4-9b6f-b46ba3b20414"), 1, 1, new DateTime(2019, 7, 12, 13, 14, 31, 494, DateTimeKind.Local).AddTicks(377), 7.62, 0.00, 0.38, 8.00},
                    { new Guid("7ea1f0ed-4629-47f3-ba60-bfe82f841204"), 1, 1, new DateTime(2019, 7, 11, 14, 13, 31, 494, DateTimeKind.Local).AddTicks(377), 7.62, 0.00, 0.38, 8.00},
                    { new Guid("625cc9ac-ddb7-4d7b-871f-f589cd332a7e"), 1, 1, new DateTime(2019, 7, 12, 12, 23, 31, 494, DateTimeKind.Local).AddTicks(377), 9.52, 0.00, 0.48, 10.00},
                    { new Guid("462c114d-bd19-42ec-8e35-f20afe1d82ac"), 1, 1, new DateTime(2019, 7, 10, 12, 23, 31, 494, DateTimeKind.Local).AddTicks(377), 9.52, 0.00, 0.48, 10.00},
                    { new Guid("99430342-d0d4-4afc-8fb6-82f3069f3bc7"), 1, 1, new DateTime(2019, 7, 9, 12, 23, 31, 494, DateTimeKind.Local).AddTicks(377), 9.52, 0.00, 0.48, 10.00},
                    { new Guid("d0c0a6e1-551c-454d-a8bd-b95e9abe1965"), 1, 1, new DateTime(2019, 7, 9, 13, 23, 31, 494, DateTimeKind.Local).AddTicks(377), 8.00, 2.00, 0.00, 10.00},
                    { new Guid("e2b439ae-d797-4720-b125-0b8dff7539b5"), 1, 1, new DateTime(2019, 7, 9, 13, 23, 31, 494, DateTimeKind.Local).AddTicks(377), 8.00, 2.00, 0.00, 10.00},
                    { new Guid("8b045572-68a4-401d-897b-8607b4397901"), 1, 1, new DateTime(2019, 7, 9, 13, 23, 31, 494, DateTimeKind.Local).AddTicks(377), 15.92, 1.60, 0.48, 18.00}
                });

            migrationBuilder.InsertData(
                table: "ReceiptProducts",
                columns: new[] { "ReceiptId", "ProductId", "ProductQuantity", "ProductTaxType", "ProductUnitPrice" },
                values: new object[,]
                {
                    { new Guid("cbd8f8ef-464d-4697-9c74-1ddc09bd1ddb"), 1, 2, 1, 12.49},
                    { new Guid("cbd8f8ef-464d-4697-9c74-1ddc09bd1ddb"), 7, 1, 1, 8.00},
                    { new Guid("3a77e5ce-e34c-4098-93de-516f9548e4f2"), 9, 2, 1, 10.00},
                    { new Guid("3a77e5ce-e34c-4098-93de-516f9548e4f2"), 8, 1, 0, 10.00},
                    { new Guid("0cd306d0-a444-4cf6-b178-e48622daa39d"), 10, 1, 1, 8.00},
                    { new Guid("0cd306d0-a444-4cf6-b178-e48622daa39d"), 6, 2, 1, 12.49},
                    { new Guid("0cd306d0-a444-4cf6-b178-e48622daa39d"), 3, 2, 1, 6.99},
                    { new Guid("0cd306d0-a444-4cf6-b178-e48622daa39d"), 2, 2, 1, 0.60},
                    { new Guid("ceb83fff-648c-4694-bf6e-95e1f3d5672d"), 7, 1, 0, 8.00},
                    { new Guid("bc668c47-784e-4a21-997c-732cadb4b945"), 7, 1, 0, 8.00},
                    { new Guid("17be26f6-62e7-49b2-8ce8-ad5fb7e6aaf9"), 7, 1, 0, 8.00},
                    { new Guid("5d8e3242-14b2-46eb-be95-d1cd3f2aca44"), 7, 1, 0, 8.00},
                    { new Guid("ada73a4c-0f8e-49cd-9623-db88099673a0"), 7, 1, 0, 8.00},
                    { new Guid("09900a22-7583-48a4-9b6f-b46ba3b20414"), 7, 1, 0, 8.00},
                    { new Guid("7ea1f0ed-4629-47f3-ba60-bfe82f841204"), 7, 1, 0, 8.00},
                    { new Guid("625cc9ac-ddb7-4d7b-871f-f589cd332a7e"), 8, 1, 0, 10.00},
                    { new Guid("462c114d-bd19-42ec-8e35-f20afe1d82ac"), 8, 1, 0, 10.00},
                    { new Guid("99430342-d0d4-4afc-8fb6-82f3069f3bc7"), 8, 1, 0, 10.00},
                    { new Guid("d0c0a6e1-551c-454d-a8bd-b95e9abe1965"), 9, 1, 1, 10.00},
                    { new Guid("e2b439ae-d797-4720-b125-0b8dff7539b5"), 9, 1, 1, 10.00},
                    { new Guid("8b045572-68a4-401d-897b-8607b4397901"), 10, 1, 1, 8.00},
                    { new Guid("8b045572-68a4-401d-897b-8607b4397901"), 8, 1, 0, 10.00}
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Receipts_CashRegisters_CashRegisterId",
                table: "Receipts",
                column: "CashRegisterId",
                principalTable: "CashRegisters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Receipts_Cashiers_CashierId",
                table: "Receipts",
                column: "CashierId",
                principalTable: "Cashiers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Receipts_CashRegisters_CashRegisterId",
                table: "Receipts");

            migrationBuilder.DropForeignKey(
                name: "FK_Receipts_Cashiers_CashierId",
                table: "Receipts");

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("cbd8f8ef-464d-4697-9c74-1ddc09bd1ddb"), 1 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("cbd8f8ef-464d-4697-9c74-1ddc09bd1ddb"), 7 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("3a77e5ce-e34c-4098-93de-516f9548e4f2"), 9 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("3a77e5ce-e34c-4098-93de-516f9548e4f2"), 8 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("0cd306d0-a444-4cf6-b178-e48622daa39d"), 10 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("0cd306d0-a444-4cf6-b178-e48622daa39d"), 6 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("0cd306d0-a444-4cf6-b178-e48622daa39d"), 3 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("0cd306d0-a444-4cf6-b178-e48622daa39d"), 2 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("ceb83fff-648c-4694-bf6e-95e1f3d5672d"), 7 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("bc668c47-784e-4a21-997c-732cadb4b945"), 7 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("17be26f6-62e7-49b2-8ce8-ad5fb7e6aaf9"), 7 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("5d8e3242-14b2-46eb-be95-d1cd3f2aca44"), 7 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("ada73a4c-0f8e-49cd-9623-db88099673a0"), 7 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("09900a22-7583-48a4-9b6f-b46ba3b20414"), 7 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("7ea1f0ed-4629-47f3-ba60-bfe82f841204"), 7 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("625cc9ac-ddb7-4d7b-871f-f589cd332a7e"), 8 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("462c114d-bd19-42ec-8e35-f20afe1d82ac"), 8 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("99430342-d0d4-4afc-8fb6-82f3069f3bc7"), 8 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("d0c0a6e1-551c-454d-a8bd-b95e9abe1965"), 9});

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("e2b439ae-d797-4720-b125-0b8dff7539b5"), 9 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("8b045572-68a4-401d-897b-8607b4397901"), 10 });

            migrationBuilder.DeleteData(
                table: "ReceiptProducts",
                keyColumns: new[] { "ReceiptId", "ProductId" },
                keyValues: new object[] { new Guid("8b045572-68a4-401d-897b-8607b4397901"), 8 });

            migrationBuilder.DeleteData(
                table: "Receipts",
                keyColumn: "Id",
                keyValue: new Guid("cbd8f8ef-464d-4697-9c74-1ddc09bd1ddb"));

            migrationBuilder.DeleteData(
                table: "Receipts",
                keyColumn: "Id",
                keyValue: new Guid("3a77e5ce-e34c-4098-93de-516f9548e4f2"));

            migrationBuilder.DeleteData(
                table: "Receipts",
                keyColumn: "Id",
                keyValue: new Guid("0cd306d0-a444-4cf6-b178-e48622daa39d"));

            migrationBuilder.DeleteData(
                table: "Receipts",
                keyColumn: "Id",
                keyValue: new Guid("ceb83fff-648c-4694-bf6e-95e1f3d5672d"));

            migrationBuilder.DeleteData(
                table: "Receipts",
                keyColumn: "Id",
                keyValue: new Guid("bc668c47-784e-4a21-997c-732cadb4b945"));

            migrationBuilder.DeleteData(
                table: "Receipts",
                keyColumn: "Id",
                keyValue: new Guid("17be26f6-62e7-49b2-8ce8-ad5fb7e6aaf9"));

            migrationBuilder.DeleteData(
                table: "Receipts",
                keyColumn: "Id",
                keyValue: new Guid("5d8e3242-14b2-46eb-be95-d1cd3f2aca44"));

            migrationBuilder.DeleteData(
                table: "Receipts",
                keyColumn: "Id",
                keyValue: new Guid("ada73a4c-0f8e-49cd-9623-db88099673a0"));

            migrationBuilder.DeleteData(
                table: "Receipts",
                keyColumn: "Id",
                keyValue: new Guid("09900a22-7583-48a4-9b6f-b46ba3b20414"));

            migrationBuilder.DeleteData(
                table: "Receipts",
                keyColumn: "Id",
                keyValue: new Guid("7ea1f0ed-4629-47f3-ba60-bfe82f841204"));

            migrationBuilder.DeleteData(
                table: "Receipts",
                keyColumn: "Id",
                keyValue: new Guid("625cc9ac-ddb7-4d7b-871f-f589cd332a7e"));

            migrationBuilder.DeleteData(
                table: "Receipts",
                keyColumn: "Id",
                keyValue: new Guid("462c114d-bd19-42ec-8e35-f20afe1d82ac"));

            migrationBuilder.DeleteData(
                table: "Receipts",
                keyColumn: "Id",
                keyValue: new Guid("99430342-d0d4-4afc-8fb6-82f3069f3bc7"));

            migrationBuilder.DeleteData(
                table: "Receipts",
                keyColumn: "Id",
                keyValue: new Guid("d0c0a6e1-551c-454d-a8bd-b95e9abe1965"));

            migrationBuilder.DeleteData(
                table: "Receipts",
                keyColumn: "Id",
                keyValue: new Guid("e2b439ae-d797-4720-b125-0b8dff7539b5"));

            migrationBuilder.DeleteData(
                table: "Receipts",
                keyColumn: "Id",
                keyValue: new Guid("8b045572-68a4-401d-897b-8607b4397901"));

            migrationBuilder.AlterColumn<int>(
                name: "CashierId",
                table: "Receipts",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CashRegisterId",
                table: "Receipts",
                nullable: false,
                oldClrType: typeof(int),
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Receipts_CashRegisters_CashRegisterId",
                table: "Receipts",
                column: "CashRegisterId",
                principalTable: "CashRegisters",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Receipts_Cashiers_CashierId",
                table: "Receipts",
                column: "CashierId",
                principalTable: "Cashiers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
