if [ "$#" -eq 0 ]; then
  echo "Nenhum argumento fornecido"
fi

[ -n "$1" ] && echo $1
[ -n "$2" ] && echo $2
[ -n "$3" ] && echo $3
