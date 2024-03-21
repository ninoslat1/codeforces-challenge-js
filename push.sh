git add .

echo 'Enter the commit message:'

read commitMessage

git commit -m "$commitMessage"

echo 'Enter the name of the branch:'

git push origin main

echo 'Thank you for committing into your loved repo'