FROM node:21

# Set the working directory inside the container
WORKDIR /app

COPY ./client/package*.json ./

COPY ./client .

RUN rm -rf ./node_modules

RUN npm install
RUN npm install yup
RUN npm install --force @emotion/styled

# Expose the port on which your application will run
EXPOSE 80

# Specify the command to run on container start
CMD ["npm", "run", "dev"]
