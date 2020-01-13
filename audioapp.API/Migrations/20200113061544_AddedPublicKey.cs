using Microsoft.EntityFrameworkCore.Migrations;

namespace audioapp.API.Migrations
{
    public partial class AddedPublicKey : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Path",
                table: "Tracks");

            migrationBuilder.AddColumn<string>(
                name: "PublicId",
                table: "Tracks",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Url",
                table: "Tracks",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PublicId",
                table: "Tracks");

            migrationBuilder.DropColumn(
                name: "Url",
                table: "Tracks");

            migrationBuilder.AddColumn<string>(
                name: "Path",
                table: "Tracks",
                type: "TEXT",
                nullable: true);
        }
    }
}
