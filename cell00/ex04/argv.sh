if [ $1 -eq 0 ]; then
    echo "no argument supplied"
else 
    for arg in "$@" ; do
    echo "$arg"
    
    done
fi