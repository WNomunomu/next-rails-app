FROM mcr.microsoft.com/devcontainers/javascript-node:22

WORKDIR "/workspaces/client"

RUN yarn install