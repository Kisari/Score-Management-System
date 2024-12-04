# Development Stage
FROM node:16-alpine as development
WORKDIR /usr/src/app

# Install dependencies and build the app
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build

# Check if the build directory exists after the build
RUN ls -alh /usr/src/app

# Production Stage
FROM node:16-alpine as production
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /usr/src/app

# Install only production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy built files from the development stage (updated to use 'build' directory)
COPY --from=development /usr/src/app/build ./build

# Command to run the application
CMD ["node", "build/index.js"]
