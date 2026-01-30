app_name = "egide-portfolio"

app {
  build {
    context = "./portfolio-2026"
    dockerfile = "Dockerfile"
  }

  env {
    NODE_ENV = "production"
  }
  
  port = 3000
}
