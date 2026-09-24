if [ "$#" -eq 0 ]; then
  echo "Nenhum argumento fornecido"
fi

for arg in "$@"; do
  mkdir "ex$arg"
done
