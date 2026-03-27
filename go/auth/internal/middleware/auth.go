package middleware

import (
	"go-auth/internal/auth"
	"net/http"
	"strings"

	"github.com/gin-gonic/gin"
)


const (
	ctxUserIDKey = "auth.userId"
	ctxRoleKey = "auth.role"
)

func AuthRequired(jwtSecret string ) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		authHeader := strings.TrimSpace(ctx.GetHeader("Authorization"))
		if authHeader == ""{
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"error":"Missing Authorization token",
			})
			return 
		}

		parts := strings.SplitN(authHeader, " ", 2)
		if len(parts) != 2 {
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"error":"Invalid Authorization format",
			})
			return 
		}
		scheme := strings.TrimSpace(parts[0])
		tokenString := strings.TrimSpace(parts[1])

		if !strings.EqualFold(scheme, "Bearer"){
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"error":"Authorization Schema must be bearer",
			})
			return 
		}
		if tokenString == ""{
			ctx.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
				"error":"Authorization Schema must be bearer",
			})
			return 
		}

		claims, err := auth.ParseToken(jwtSecret, tokenString)
		if err != nil {
			ctx.AbortWithStatusJSON(http.StatusUnauthorized , gin.H{
				"error":"Invalid or exprired token",
			})
			return 
		}
		ctx.Set(ctxUserIDKey, claims.Subject)
		ctx.Set(ctxRoleKey, claims.Role)
	}
}

func GetUserId(c *gin.Context) (string, bool){
	res, ok := c.Get(ctxUserIDKey)
	if !ok {
		return "", false 
	} 

	userId, ok := res.(string)
	return userId, ok
}

func GetRole(c *gin.Context) (string, bool){
	res, ok := c.Get(ctxRoleKey)
	if !ok {
		return "", false 
	}
	role ,ok := res.(string)
	return role, ok
}
