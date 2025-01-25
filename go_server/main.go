package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		// CORS headerlarini sozlaymiz
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*") // Hamma domenlarga ruxsat beramiz
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		// Agar OPTIONS so‘rovi kelgan bo‘lsa, 200 qaytaramiz
		if c.Request.Method == http.MethodOptions {
			c.AbortWithStatus(200)
			return
		}

		// Keyingi middleware yoki handler’ga o‘tamiz
		c.Next()
	}
}

type Foydal struct {
	ID uint `json:"id" gorm:"primaryKey"`
	Name string `json:"name"`
	Password string `json:"password"`

}

var DB *gorm.DB

func initDatabase() {
	// Database bilan ishlash uchun kerakli kodlar
	dsn := "root@tcp(127.0.0.1:3306)/foydal?charset=utf8mb4&parseTime=True&loc=Local"
	var err error
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	// Migratsiya
	err = DB.AutoMigrate(&Foydal{})
	if err != nil {
		log.Fatal(err)
	} else {
		fmt.Println("Foydalanuvchilar jadvali yaratildi")
	}

	fmt.Println("Database ishga tushdi")
}

func startServer() {
	
	r := gin.Default()
	r.Use(CORSMiddleware())
	initDatabase()
	r.GET("/", func(ctx *gin.Context) {
		fmt.Fprintf(ctx.Writer, "Hello, World!")	
	})
	fmt.Println("\nServer ishga tushdi, http://localhost:8080.")
	if err := r.Run(":8080"); err != nil {
		panic(err)
	}
	
}

func main() {
	startServer()
	// Create Model
}

// Create Model