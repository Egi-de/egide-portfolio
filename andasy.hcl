app_name = "egide-portfolio"

app {
  port = 3000

  env = {
    NODE_ENV = "production"
  }

  compute {
    cpu = 1
    memory = 512
    cpu_kind = "shared"
  }

  process {
    name = "web"
  }
}
