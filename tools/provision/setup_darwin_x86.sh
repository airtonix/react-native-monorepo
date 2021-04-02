#!/bin/sh
source ./lib.sh

echo "installing homebrew"
check_sudo_access
bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)";

echo "installing python3"
brew list python@3.9 &>/dev/null || brew install python@3.9;
brew link python@3.9 --overwrite;

echo "installing pip3"
curl -fsSL https://bootstrap.pypa.io/get-pip.py | $(which python3);

echo "installing ansible"
CFLAGS=-Qunused-arguments CPPFLAGS=-Qunused-arguments pip install --user ansible;

export PATH=$PATH:~/Library/Python/3.9/bin
