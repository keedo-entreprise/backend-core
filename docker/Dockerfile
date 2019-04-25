FROM node:carbon
ARG folder=backend
# Create app directory

RUN npm cache clear --force
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY app ./$folder/app
COPY bin ./$folder/bin
COPY config ./$folder/config
COPY db ./$folder/db

## run seeders

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./$folder/


WORKDIR ./$folder

RUN npm install --only=production


EXPOSE 8001
#CMD [ "sh", "-c", "ls -a /backend"]
# Run app
ENTRYPOINT npm start