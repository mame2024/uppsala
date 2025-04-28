# uppsala

## Pre-requisites

1. **Mac Terminal Basics**
   - Open the Terminal app (search "Terminal" in Spotlight).
   - Try these commands:
     - `ls` — list files in current folder
     - `cd <folder>` — change directory
     - `touch test.txt` — create a file
     - `rm test.txt` — delete a file
     - `export MYVAR=hello` — set environment variable
     - `unset MYVAR` — remove environment variable

2. **Install Homebrew**  
   - Paste in Terminal:  
     ```sh
     /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
     ```

3. **Install Cursor**  
   - Download and install from [cursor.so](https://cursor.so/)

4. **Install Git**  
   - In Terminal:  
     ```sh
     brew install git
     ```

5. **Create a GitHub Account**  
   - Sign up at [github.com](https://github.com/)

6. **Set Up Your Project Folder**  
   - In Terminal:  
     ```sh
     mkdir -p ~/code
     cd ~/code
     git clone https://github.com/mame2024/uppsala.git
     cd uppsala/users
     mkdir your-name
     cd your-name
     touch tasks.md
     ```

7. **Edit and Push Your First File**
   - Open and edit the file:
     ```sh
     echo "Hello, this is my first edit!" > tasks.md
     ```
   - Push your changes:
     ```sh
     git add tasks.md
     git commit -m "Add my tasks file"
     git push
     ```

---

Let me know if you want this added to the README or want to refine further!
