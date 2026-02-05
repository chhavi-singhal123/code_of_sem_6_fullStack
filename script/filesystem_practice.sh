#!/bin/bash

# 1) Create Directory Structure
mkdir -p practice/2026/january/week1

# 2) Create Files
cd practice/2026/january/week1 || exit 1
touch file1.txt file2.txt

# Add sample content
echo "This is file1" > file1.txt
echo "This is file2" > file2.txt

# 3) List Files with Inode Numbers and Permissions
echo "Listing files with inode numbers and permissions:"
ls -li

# 4) Create a Hard Link
ln file1.txt file1_link.txt

# 5) Verify Hard Link Behavior
echo "Deleting original file1.txt"
rm file1.txt

echo "Checking if hard link still exists:"
ls -li

echo "Displaying contents of file1_link.txt:"
cat file1_link.txt
