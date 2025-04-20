from flask import Flask, request, jsonify
from models import init_db
import sqlite3

app = Flask(__name__)
init_db()

@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    conn = sqlite3.connect("backend/database.db")
    c = conn.cursor()
    c.execute("SELECT * FROM users WHERE username = ? AND password = ?", (data["username"], data["password"]))
    user = c.fetchone()
    conn.close()
    if user:
        return jsonify({"success": True, "user_id": user[0]})
    return jsonify({"success": False, "message": "Kullanıcı bulunamadı"})

@app.route("/api/test", methods=["POST"])
def save_test_result():
    data = request.json
    conn = sqlite3.connect("backend/database.db")
    c = conn.cursor()
    c.execute("INSERT INTO test_results (user_id, result, date) VALUES (?, ?, datetime('now'))",
              (data["user_id"], data["result"]))
    conn.commit()
    conn.close()
    return jsonify({"success": True})

@app.route("/api/test/<int:user_id>", methods=["GET"])
def get_test_results(user_id):
    conn = sqlite3.connect("backend/database.db")
    c = conn.cursor()
    c.execute("SELECT result, date FROM test_results WHERE user_id = ?", (user_id,))
    results = c.fetchall()
    conn.close()
    return jsonify(results)

if __name__ == "__main__":
    app.run(debug=True)
