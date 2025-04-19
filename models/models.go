package models

type AppConfig struct {
	App struct {
		Name  string `mapstructure:"NAME"`
		Env   string `mapstructure:"ENV"`
		Debug string `mapstructure:"DEBUG"`
		Port  string `mapstructure:"PORT"`
	}
	DB struct {
		Server   string `mapstructure: "SERVER"`
		Port     int    `mapstructure: "PORT"`
		Database string `mapstructure: "DATABASE"`
		User     string `mapstructure: "USER"`
		Password string `mapstructure: "PASSWORD"`
	}
}
