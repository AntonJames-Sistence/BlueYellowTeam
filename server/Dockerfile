# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container to your app directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the container
COPY package.json .

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your app will run on (if needed)
EXPOSE 3000

# Define the command to start your Node.js application
CMD ["npm", "start"]