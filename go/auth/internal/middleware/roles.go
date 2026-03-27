package middleware

import (
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)

func RequireAdmin() gin.HandlerFunc{
	return  func(c *gin.Context){
		role, ok := GetRole(c)
		if !ok {
			c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"error":"Unautherized",
			})
			return 
		}

		if !strings.EqualFold(role, "admin"){
			c.AbortWithStatusJSON(http.StatusForbidden, gin.H{
				"error":"You dont have enough permission to access this resource",
			})
			return 
		}
		c.Next()
	}
}
