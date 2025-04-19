package main

import (
	"Zheng-Bote/web-server-template/service"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/gzip"
	"github.com/gin-contrib/multitemplate"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
)

/* ##### */
var Version string = "v0.0.1"
var Date string = "2025-04-18"
var Go_Version string = "go1.24.2"

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
	ID       int32  `json:"id,omitempty"`
	USERNAME string `json:"user"`
	PASSWORD string `json:"pwd"`
	TOKEN    string `json:"token,omitempty"`
	EXPIRES  string `json:"expires,omitempty"`
}

/* ##### */
var userdatas = []userdata{
	{ID: 0, FIRSTNAME: "Bugs", LASTNAME: "Bunny", EMAIL: "no.spam@hotmail.com"},
}
var users = []user{
	{ID: 0, USERNAME: "BBP", PASSWORD: "Top$ecre!", TOKEN: "", EXPIRES: ""},
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
	r.AddFromFiles("main", "templates/main_base.htm", "templates/header.htm", "templates/footer.htm")
	return r
}

func CookieTool() gin.HandlerFunc {
	return func(c *gin.Context) {
		// Get cookie
		if cookie, err := c.Cookie("csrf_cookie"); err == nil {
			if cookie == "ok" {
				c.Next()
				return
			}
		}

		// Cookie verification failed
		c.JSON(http.StatusForbidden, gin.H{"error": "Forbidden with no cookie"})
		c.Abort()
	}
}

/* ##### */

func getUsers(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, userdatas)
}
func getUserByUserName(c *gin.Context) {
	user := c.Param("user")

	for _, a := range userdatas {
		fmt.Printf("users: %v\n", a.LASTNAME)
		if a.LASTNAME == user {
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
	// c.JSON(200, gin.H{"count": count})
	data := map[string]interface{}{
		"function": "v2_1",
	}
	c.IndentedJSON(http.StatusOK, data)
}

func getCookie(c *gin.Context) {
	session := sessions.Default(c)
	c.JSON(200, gin.H{"hello": session.Get("hello")})
}

func goHome(c *gin.Context) {
	c.JSON(200, gin.H{"data": "Your home page"})
}

func main() {
	appConfig := service.GetEnv()
	fmt.Printf("appConfig:: %+v\n", appConfig)

	config := cors.DefaultConfig()
	// AllowOrigins:     []string{"https://foo.com"},
	config.AllowAllOrigins = true
	config.AllowMethods = []string{"POST", "GET", "PUT", "OPTIONS"}
	config.AllowHeaders = []string{"Origin", "Content-Type", "Authorization", "Accept", "User-Agent", "Cache-Control", "Pragma"}
	config.ExposeHeaders = []string{"Content-Length"}
	config.AllowCredentials = true
	config.MaxAge = 12 * time.Hour

	router := gin.Default()
	router.Static("/assets", "./assets")
	router.Use(cors.New(config))
	router.Use(gzip.Gzip(gzip.DefaultCompression, gzip.WithExcludedExtensions([]string{".png", ".webp"})))
	router.HTMLRender = createMyRender()
	store := cookie.NewStore([]byte("secret"))
	router.Use(sessions.Sessions("mysession", store))

	/* ##### */
	router.GET("/version", getVersion)
	router.GET("/", func(c *gin.Context) {
		c.HTML(200, "main", gin.H{
			"title": "Home",
		})
	})

	// Simple group: v1
	{
		v1 := router.Group("/v1")
		v1.GET("/home", CookieTool(), goHome)
		v1.GET("/cookie", getCookie)
		v1.GET("/users", getUsers)
		v1.GET("/users/:user", getUserByUserName)
		v1.POST("/users", postNewUser)
		v1.GET("/", func(c *gin.Context) {
			c.HTML(200, "main", gin.H{
				"title": "Home",
			})
		})
		v1.GET("/v1", func(c *gin.Context) {
			c.HTML(200, "main", gin.H{
				"title": "Home",
			})
		})
		v1.GET("/lsignin", func(c *gin.Context) {
			// Set cookie {"label": "ok" }, maxAge 30 seconds.
			c.SetCookie("csrf_cookie", "ok", 30, "/", "localhost", false, true)

			session := sessions.Default(c)
			if session.Get("hello") != "world" {
				session.Set("hello", "world")
				session.Save()
			}

			c.HTML(200, "lsignin", gin.H{
				"title": "local sign-in",
			})
		})
	}

	// Simple group: v2
	{
		v2 := router.Group("/v2")
		v2.GET("/version", getVersion)
		v2.GET("/ep2", loginEndpoint_v2_1)
	}

	if err := router.Run(appConfig.App.Port); err != nil {
		log.Fatal(err)
	}
}
