package main

import (
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/gzip"
	"github.com/gin-contrib/multitemplate"
	"github.com/gin-gonic/gin"
)

/* ##### */
var Version string
var Date string
var Go_Version string

type version struct {
	VERSION   string
	DATE      string
	GoVersion string
}

/* ##### */

type userdata struct {
	ID        int32  `json:"id"`
	FIRSTNAME string `json:"firstname"`
	LASTNAME  string `json:"lastname"`
	EMAIL     string `json:"email"`
}
type user struct {
	ID       int32  `json:"id"`
	USERNAME string `json:"username"`
	PASSWORD string `json:"password"`
	TOKEN    string `json:"token"`
	EXPIRES  string `json:"expires"`
}

/* ##### */
var users = []user{
	{USERNAME: "Jeru", PASSWORD: "Gerry Mulligan", TOKEN: "", EXPIRES: ""},
}

/* ##### */
func getVersion(c *gin.Context) {
	data := map[string]interface{}{
		"Version":   Version,
		"Date":      Date,
		"GoVersion": Go_Version,
	}
	c.IndentedJSON(http.StatusOK, data)
}

func createMyRender() multitemplate.Renderer {
	r := multitemplate.NewRenderer()
	//r.AddFromFiles("index", "templates/base_i.html", "templates/index_i.html")
	r.AddFromFiles("lsignin", "templates/lsignin_base.htm", "templates/header.htm", "templates/footer.htm")
	return r
}

/* ##### */

func getUsers(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, users)
}
func getUserByUserName(c *gin.Context) {
	user := c.Param("user")

	for _, a := range users {
		fmt.Printf("users: %v\n", a.USERNAME)
		if a.USERNAME == user {
			c.IndentedJSON(http.StatusOK, a)
			return
		}
	}
	c.IndentedJSON(http.StatusNotFound, gin.H{"message": "user not found"})
}
func postNewUser(c *gin.Context) {
	var newUser user

	if err := c.BindJSON(&newUser); err != nil {
		return
	}
	users = append(users, newUser)
	c.IndentedJSON(http.StatusCreated, newUser)
}

// create simple json
func loginEndpoint_v2_1(c *gin.Context) {
	data := map[string]interface{}{
		"function": "v1_1",
	}
	c.IndentedJSON(http.StatusOK, data)
}

func main() {
	config := cors.DefaultConfig()
	// AllowOrigins:     []string{"https://foo.com"},
	config.AllowAllOrigins = true
	config.AllowMethods = []string{"POST", "GET", "PUT", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Authorization", "Accept", "User-Agent", "Cache-Control", "Pragma"}
	config.ExposeHeaders = []string{"Content-Length"}
	config.AllowCredentials = true
	config.MaxAge = 12 * time.Hour

	router := gin.Default()
	router.Use(gzip.Gzip(gzip.DefaultCompression))
	router.Use(cors.New(config))
	router.HTMLRender = createMyRender()

	/* ##### */
	router.GET("/version", getVersion)

	// Simple group: v1
	{
		v1 := router.Group("/v1")
		v1.GET("/users", getUsers)
		v1.GET("/users/:user", getUserByUserName)
		v1.POST("/users", postNewUser)
		v1.GET("/lsignin", func(c *gin.Context) {
			c.HTML(200, "lsignin", gin.H{
				"title": "local sign-in",
			})
		})
	}

	// Simple group: v2
	{
		v2 := router.Group("/v2")
		v2.GET("/loginep", loginEndpoint_v2_1)
		v2.GET("/users", getUsers)
		v2.GET("/users/:user", getUserByUserName)
	}

	if err := router.Run(":8080"); err != nil {
		log.Fatal(err)
	}
}
