from flask_restful import Resource
from flask import redirect, url_for, send_from_directory


class Root(Resource):
    def get(self):
        return send_from_directory('static', 'index.html')
