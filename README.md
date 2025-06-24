# 🌌 Cosnary (Terminal Version)

**Cosnary** is a fast, offline multilingual dictionary you run right in your terminal. Search word definitions, IPA pronunciations, and parts of speech from **thousands of languages** — all without internet.

---

## 💾 Installation

### 📱 On **Termux** (Android)

1. Install required packages:

   ```bash
   pkg update
   pkg install git python git-lfs
   ```

2. Clone the repo:

   ```bash
   git clone https://github.com/Synthfax/Cosnary-Terminal.git
   cd Cosnary-Terminal
   ```

3. Install Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Set executable permissions:

   ```bash
   chmod +x cosnary.py
   ```

5. Initialize Git LFS and pull large files:

   ```bash
   git lfs install
   git lfs pull
   ```

6. Run the app:

   ```bash
   ./cosnary.py 1207
   ```

---

### 🐧 On **Linux** (Ubuntu, Kali, Debian, etc.)

1. Install Git LFS:

   ```bash
   sudo apt update
   sudo apt install git-lfs
   ```

2. Clone the repo:

   ```bash
   git clone https://github.com/Synthfax/Cosnary-Terminal.git
   cd Cosnary-Terminal
   ```

3. Set up Git LFS and pull large files:

   ```bash
   git lfs install
   git lfs pull
   ```

4. Install Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

5. Make the launcher executable:

   ```bash
   chmod +x cosnary.py
   ```

6. Run the app:

   ```bash
   ./cosnary.py 1207
   ```

---

### 🪟 On **Windows**

1. Install Python:
   [https://www.python.org/downloads/](https://www.python.org/downloads/)

2. Install Git and Git LFS:
   [https://git-scm.com/downloads](https://git-scm.com/downloads)
   [https://git-lfs.github.com](https://git-lfs.github.com)

3. Clone the repo using Git Bash or PowerShell:

   ```bash
   git clone https://github.com/Synthfax/Cosnary-Terminal.git
   cd Cosnary-Terminal
   ```

4. Set up Git LFS and pull large files:

   ```bash
   git lfs install
   git lfs pull
   ```

5. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

6. Run the app:

   ```bash
   python cosnary.py 1207
   ```

---

### 🍏 On **macOS**

1. Install [Homebrew](https://brew.sh) if not already installed.

2. Install Git, Git LFS, and Python:

   ```bash
   brew install git git-lfs python
   ```

3. Clone the repo:

   ```bash
   git clone https://github.com/Synthfax/Cosnary-Terminal.git
   cd Cosnary-Terminal
   ```

4. Set up Git LFS and pull the DB:

   ```bash
   git lfs install
   git lfs pull
   ```

5. Install Python dependencies:

   ```bash
   pip3 install -r requirements.txt
   ```

6. Make the launcher executable:

   ```bash
   chmod +x cosnary.py
   ```

7. Run Cosnary:

   ```bash
   ./cosnary.py 1207
   ```

---

## 🔧 Features

* Works offline in your terminal or command line
* Supports fast word search with language filtering
* Includes IPA pronunciation and parts of speech info
* Runs on Linux, macOS, Windows, and Termux
* No internet required once set up

---

## 📜 License

This project is licensed under the **Apache License 2.0**.
See the [**LICENSE**](./LICENSE) file for details.

---

## 👤 Author

Made with 💙 by **Synthfax**
