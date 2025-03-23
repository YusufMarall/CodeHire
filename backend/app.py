from flask import Flask, request, jsonify
import sqlite3
import jwt
import datetime

app = Flask(__name__)
app.config["SECRET_KEY"] = "supersecretkey"

@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE username = ? AND password = ?", (username, password))
    user = cursor.fetchone()
    conn.close()

    if user:
        token = jwt.encode({"username": username, "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)}, app.config["SECRET_KEY"], algorithm="HS256")
        return jsonify({"success": True, "token": token})
    else:
        return jsonify({"success": False, "message": "Kullanıcı adı veya şifre yanlış"}), 401

if __name__ == "__main__":
    app.run(debug=True)
