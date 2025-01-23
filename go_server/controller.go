package main

import (
	"github.com/gin-gonic/gin"
	"net/http"
)
 
func HelloWorldController(c *gin.Context) {
	c.String(http.StatusOK, "Hello, World!")
}
