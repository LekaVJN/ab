import os
import subprocess

cwd = r"C:\Users\юзер\Documents\WS Code\Вьюнов"
env = os.environ.copy()
env["GIT_TERMINAL_PROMPT"] = "0"
cmds = [
    ["git", "status", "--short"],
    ["git", "branch", "--show-current"],
    ["git", "log", "--oneline", "-5"],
    ["git", "rev-parse", "HEAD"],
    ["git", "rev-parse", "origin/main"],
    ["git", "push", "origin", "main"],
]
for cmd in cmds:
    proc = subprocess.run(cmd, cwd=cwd, env=env, capture_output=True, text=True)
    print("CMD:", cmd)
    print("RC:", proc.returncode)
    print("STDOUT:\n" + proc.stdout)
    print("STDERR:\n" + proc.stderr)
    print("---")
