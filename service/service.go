package service

import (
	models "Zheng-Bote/web-server-template/models"
	"fmt"
	"strings"

	"github.com/spf13/viper"
)

func GetEnv() models.AppConfig {

	//viper.SetConfigName("config") // name of config file (without extension)
	viper.SetConfigFile("./config/.toml")
	viper.SetConfigType("toml")

	// Read the config file
	if err := viper.ReadInConfig(); err != nil {
		fmt.Println("Error reading config file:", err)
		//log.Fatal(err)
		//panic(fmt.Errorf("fatal error reading config: %w", err))
	}

	viper.AutomaticEnv()
	viper.SetEnvPrefix("WST")
	viper.SetEnvKeyReplacer(strings.NewReplacer(".", "_"))

	// Unmarshal into struct
	var config models.AppConfig
	if err := viper.Unmarshal(&config); err != nil {
		panic(fmt.Errorf("unable to decode into struct: %w", err))
	}
	fmt.Printf("%+v\n", config)
	return config
}
