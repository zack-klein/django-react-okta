FROM python:3.8.3-alpine

# set work directory
WORKDIR /srv/app

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install dependencies
RUN pip install --upgrade pip
COPY ./requirements.txt .
RUN apk add --update --no-cache postgresql-client
# install temp dependencies for build of pyscopg2 etc
RUN apk add --update --no-cache --virtual .tmp-build-deps \
  gcc \
  libc-dev \
  linux-headers \
  postgresql-dev \
  musl-dev \
  zlib zlib-dev \
  gcc \
  musl-dev \
  libffi-dev \
  openssl-dev \
  python3-dev \
  && pip install -r requirements.txt \
  && apk del --no-cache .tmp-build-deps

RUN apk add xmlsec

# copy entrypoint.sh
COPY ./entrypoint.sh .

# copy project
COPY . .

# run entrypoint.sh
ENTRYPOINT ["/srv/app/entrypoint.sh"]