FROM node:lts-alpine
WORKDIR /usr/app
# Copy package.json and install Node.js dependencies
COPY package.json .
RUN npm install --quiet -g

# Copy the application code
COPY . .