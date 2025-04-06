from flask import Blueprint, request, jsonify
import sqlite3

users_bp = Blueprint("users", __name__)

@users_bp.route("/", methods=["POST"])
def add_user():
    data = request.get_json()
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    cursor.execute("INSERT INTO users (name, email) VALUES (?, ?)", (data["name"], data["email"]))
    conn.commit()
    conn.close()
    return jsonify({"message": "Kullanıcı eklendi!"})

@users_bp.route("/", methods=["GET"])
def get_users():
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users")
    users = cursor.fetchall()
    conn.close()
    return jsonify(users)
