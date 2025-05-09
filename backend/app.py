from flask import Flask, request, jsonify
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def get_db():
    conn = sqlite3.connect("database.db")
    conn.row_factory = sqlite3.Row
    return conn

@app.route("/api/login", methods=["POST"])
def login():
    data = request.json
    username = data.get("username")
    password = data.get("password")

    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT * FROM users WHERE username=? AND password=?", (username, password))
    user = cur.fetchone()
    conn.close()

    if user:
        return jsonify({"status": "success"})
    return jsonify({"status": "fail"}), 401

@app.route("/api/submit_test", methods=["POST"])
def submit_test():
    data = request.json
    username = data.get("username")
    result = data.get("result")
    score = 100 if "sql" in result.lower() else 50

    conn = get_db()
    cur = conn.cursor()
    cur.execute("INSERT INTO test_results (username, result, score) VALUES (?, ?, ?)", (username, result, score))
    conn.commit()
    conn.close()
    return jsonify({"status": "success", "score": score})

@app.route("/api/tests/<username>", methods=["GET"])
def get_tests(username):
    conn = get_db()
    cur = conn.cursor()
    cur.execute("SELECT result, score FROM test_results WHERE username=?", (username,))
    results = cur.fetchall()
    conn.close()
    return jsonify([dict(r) for r in results])

if __name__ == "__main__":
    app.run(debug=True)
