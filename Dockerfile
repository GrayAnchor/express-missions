FROM ubuntu:bionic

RUN su -c 'apt update'

RUN su -c 'apt install -y curl'

RUN su -c 'curl -sL https://deb.nodesource.com/setup_15.x | bash -'

RUN su -c 'apt update'

RUN mkdir -p /app

RUN apt-get install -y nodejs libvips build-essential

WORKDIR /app

CMD [ "gridsome develop" ]