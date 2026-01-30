app = "egide-portfolio"
region = "sfo-1"

build {
  context = "./portfolio-2026"
  dockerfile = "Dockerfile"
}

env {
  "NODE_ENV" = "production"
}
