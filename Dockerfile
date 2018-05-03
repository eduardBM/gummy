FROM alpine:latest
MAINTAINER pariscc "parisc@protonmail.com"
RUN apk update && apk upgrade && apk add python3 py-pip
ENV APP_PATH /gummy
ADD . APP_PATH
WORKDIR APP_PATH
EXPOSE 5000
RUN pip install -r requirements.txt
ENTRYPOINT ["python3"]
CMD ["app.py"]

