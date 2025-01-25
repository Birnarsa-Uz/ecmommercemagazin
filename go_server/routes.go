package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func miin() {
	router := gin.Default()

	// Define your routes here
	router.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	// Observer function to log all routes
	router.Use(func(c *gin.Context) {
		method := c.Request.Method
		path := c.Request.URL.Path
		c.Next()
		status := c.Writer.Status()
		c.Writer.Header().Set("X-Status", http.StatusText(status))
		c.Writer.Header().Set("X-Method", method)
		c.Writer.Header().Set("X-Path", path)
	})

	router.Run(":8080") // Run on port 8080
}