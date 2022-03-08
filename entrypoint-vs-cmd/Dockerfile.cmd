FROM busybox

WORKDIR /app

COPY run.sh ./

RUN chmod +x /app/run.sh

CMD ["sh", "run.sh"]
