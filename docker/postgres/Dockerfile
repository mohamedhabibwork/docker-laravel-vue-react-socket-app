FROM postgres:13

LABEL maintainer="PostGIS Project - https://postgis.net"

ENV POSTGIS_MAJOR 3
ENV POSTGIS_VERSION 3

RUN apt-get update \
      && apt-cache showpkg postgresql-postgis \
      && apt-get install -y --no-install-recommends postgis  postgresql-13-postgis-3  postgresql-13-postgis-3-scripts  \
      && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /docker-entrypoint-initdb.d
COPY ./initdb-postgis.sh /docker-entrypoint-initdb.d/postgis.sh
COPY ./update-postgis.sh /usr/local/bin
