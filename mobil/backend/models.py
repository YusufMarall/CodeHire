import sqlite3

def init_db():
    conn = sqlite3.connect("backend/database.db")
    c = conn.cursor()

    # Kullanıcılar tablosu
    c.execute("""
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )
    """)

    # Kiralamalar tablosu
    c.execute("""
    CREATE TABLE IF NOT EXISTS rentals (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        item_name TEXT,
        date TEXT,
        FOREIGN KEY(user_id) REFERENCES users(id)
    )
    """)

    # Test sonuçları tablosu
    c.execute("""
    CREATE TABLE IF NOT EXISTS test_results (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        result TEXT,
        date TEXT,
        FOREIGN KEY(user_id) REFERENCES users(id)
    )
    """)

    conn.commit()
    conn.close()
