FROM node:lts-alpine
WORKDIR /src
# Copy package.json and install Node.js dependencies
COPY package.json .
RUN npm install --quiet

# Copy the application code
COPY . ./src
EXPOSE 3000

CMD ["node", "app.js"]