# Step 1: Use the specified Node.js runtime as the parent image
FROM node:19.3.0

# Step 2: Set the working directory to /app
WORKDIR /app
# Step 3: Copy package.json and package-lock.json (if available) into the working directory
COPY package*.json ./

# Step 4: Install any needed packages
RUN npm install

# Step 5: Copy the rest of the project into the working directory
COPY . .

# Step 6: Build the project
RUN npm run build

# Step 7: Expose the desired port for your app
EXPOSE 3000

# Step 8: Start the app using the http-server
CMD ["npm", "run", "serve"]
