#!/bin/sh

set -e

ME=$(basename $0)

auto_envsubst() {
  local origin_dir="/usr/share/nginx/html"
  local main_file=$(find $origin_dir/static/js -type f -name "main.*.js")
  local tmp_dir="/tmp"
  local tmp_file="$tmp_dir/${main_file##*/}"
  
  local defined_envs=$(printf '${%s} ' $(env | cut -d= -f1))
  if [ ! -w "$origin_dir" ]; then
    echo >&3 "$ME: ERROR: $origin_dir is not writable"
    return 0
  fi
  if [ ! -w "$tmp_dir" ]; then
    echo >&3 "$ME: ERROR: $tmp_dir is not writable"
    return 0
  fi
  echo >&3 "$ME: Running envsubst on $main_file"
  envsubst "$defined_envs" < "$main_file" > "$tmp_file"
  rm $main_file
  mv "$tmp_file" $main_file
}

auto_envsubst

exit 0