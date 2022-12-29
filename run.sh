#! /usr/bin/env bash

cd backend/ && ./run.sh && cd .. && cd frontend/ && ./run.sh && echo "Inicializado.. T.E 40 seg." && sleep 40 && open http://localhost:3000