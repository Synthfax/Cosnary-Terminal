#!/usr/bin/env python3

from flask import Flask, request, jsonify, render_template
import sqlite3
import os
import sys

app = Flask(__name__,
            template_folder="templates",
            static_folder="static")

DATABASE = os.path.join(os.path.dirname(__file__), "kaikki_dictionary.db")

def get_db_connection():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/languages')
def languages():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("SELECT lang, COUNT(*) FROM entries GROUP BY lang ORDER BY lang")
    languages = cur.fetchall()
    conn.close()
    return jsonify([{ "label": f"{lang} ({count})", "value": lang } for lang, count in languages])

@app.route('/search', methods=['POST'])
def search():
    data = request.json
    word = data.get('word', '').strip()
    lang = data.get('lang', None)

    if not word:
        return jsonify({"error": "Please enter a word to search."}), 400

    conn = get_db_connection()
    cur = conn.cursor()

    query = "SELECT pos, ipa, definition, lang FROM entries WHERE LOWER(word) = LOWER(?)"
    params = [word]

    if lang and lang.lower() != "all galaxies":
        query += " AND lang = ?"
        params.append(lang)

    cur.execute(query, params)
    results = cur.fetchall()
    conn.close()

    if not results:
        return jsonify({"results": [], "message": f"No definitions found for '{word}'."})

    formatted = [{
        "pos": row["pos"],
        "ipa": row["ipa"],
        "definition": row["definition"],
        "lang": row["lang"]
    } for row in results]

    return jsonify({"results": formatted})

def run_app_on_port(port):
    app.run(host="0.0.0.0", port=port, debug=False, use_reloader=False)

if __name__ == "__main__":
    # Default port = 5000
    port = 5000

    # If user provides a port as argument (like `python app.py 1207`)
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print("❌ Invalid port. Using default 5000.")

    run_app_on_port(port)
