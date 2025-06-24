count=0

if [ $1 -eq 0 ]; then
    echo "no argument supplied"
else
    for arg in "$@"; do
    if [ $count -ge 3 ]; then
        break
    fi
    echo "$arg"
    
    done
fi