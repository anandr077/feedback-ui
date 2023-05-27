# Step 1: Use the specified Node.js runtime as the parent image
FROM node:19.3.0


ARG APP_ENV
ENV APP_ENV=$APP_ENV
# Step 2: Set the working directory to /app
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if available) into the working directory
COPY package*.json ./

# Step 4: Install any needed packages
RUN npm install && npm ci

# Step 5: Copy the rest of the project into the working directory
COPY . .

# Step 6: Build the project
RUN npm run build

# Step 7: Expose the desired port for your app
EXPOSE 3000

# Step 8: Create a custom script to read environment variables and start the development server
COPY start.sh /app
RUN chmod +x /app/start.sh

# Step 9: Start the app using the custom script
CMD ["/app/start.sh"]