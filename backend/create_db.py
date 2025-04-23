import sqlite3

conn = sqlite3.connect("database.db")
cur = conn.cursor()

cur.execute('''
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT
)
''')

cur.execute('''
CREATE TABLE IF NOT EXISTS test_results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    result TEXT,
    score INTEGER
)
''')

cur.execute("INSERT OR IGNORE INTO users (username, password) VALUES (?, ?)", ("yusuf", "1234"))

conn.commit()
conn.close()
