FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY ./app/package*.json ./

# Install dependencies including Vite and React plugin
RUN npm install && \
    npm install -g vite && \
    npm install @vitejs/plugin-react && \
    npm install typescript @types/node @types/react @types/react-dom

# Copy the rest of the application
COPY ./app .

# Build the project
RUN npm run build || true

# Expose ports
EXPOSE 3000
EXPOSE 5173

# Start development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]