package main

import (
	"fmt"
	"net/http"
	"github.com/gin-gonic/gin"
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

func startServer() {
	r := gin.Default()
	r.Use(CORSMiddleware())

	r.GET("/", func(ctx *gin.Context) {
	fmt.Fprintf(ctx.Writer, "Hello, World!")	
	})
	r.POST("/user", func(c *gin.Context) {
		
		type User struct {
			Name string `json:"name"`
			Password string `json:"password"`
		}
		var user User
		if err := c.ShouldBindJSON(&user); err != nil {
			c.JSON(400, gin.H{"error": err.Error()})
			return
		} else {
			fmt.Println(" Ism:   ", user.Name, "\n", "Parol: ", user.Password)
		}
		
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