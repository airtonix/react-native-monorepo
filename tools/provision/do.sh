#!/bin/sh
# Stop unpredictible behavior
set -o errexit # Exit on most errors
set -o nounset # Disallow expansion of unset variables
set -o pipefail # Use last non-zero exit code in a pipeline

source ./lib.sh

function setup_ansible () {
  is_installed ansible-playbook &> /dev/null && {
    echo "👍 Ansible already installed";
    return;
  }

  setup_file=get_setupfile
  echo "🚧 Installing Ansible"
  echo "> ${setup_file}";
  $setup_file
}

function install_requirements () {
  echo "💬 Installing Requirements"
  echo "💻 Platform: ${OSINFO_PLATFORM}"
  playbook_file="playbooks/galaxy.yml"
  echo "📒 Playbook: ${playbook_file}"
  ansible-playbook \
    --verbose \
    $playbook_file
}

function list_tags () {
  playbook_file=$(get_playbook_file)
  echo "🔖 ${playbook_file}"

  output=$(ansible-playbook --list-tags $playbook_file 2>&1)

  echo $output |
    grep "TASK TAGS" |
    cut -d":" -f2 |
    awk '{sub(/\[/, "")sub(/\]/, "")}1' |
    sed -e 's/,//g' |
    xargs -n 1 |
    sort -u |
    column
}

function print_help () {
  echo """
  == Help ==

  ./run.sh [command] [args]

  -- Commands --
  provision|start         install all the things
  info                    print environment info
  setup                   setup ansible and dependencies
  requiremenst|deps       setup dependencies
  tags                    list all the tags in the playbook
  help                    this text.

  -- Args --

  provision --tags=
  """
}

function provision () {
  echo "💬 Provisioning"
  [ -z "${NO_SETUP:-}" ] && setup_ansible
  [ -z "${NO_DEPS:-}" ] && install_requirements

  echo "💻 Platform: ${OSINFO_PLATFORM}"
  playbook_file=$(get_playbook_file)
  echo "📒 Playbook: ${playbook_file}"

  CMD="ansible-playbook \
    --verbose
    --ask-become-pass
    $@
    $playbook_file
  "
  echo $CMD
  $CMD
}

function main () {
  local operation="${1:-}"
  echo "operation: $operation"

  local count="${#@}"

  [ "$count" -gt "0" ] && shift 1;
  [ "$count" -gt "0" ] && args=("${@}");

  case $operation in
      info)
          echo "== Info =="
          osinformation
          echo """
  platform: ${OSINFO_PLATFORM}
      arch: ${OSINFO_ARCH}
      name: ${OSINFO_NAME}
    version: ${OSINFO_VERSION}
          """
      ;;
      help)
          print_help
      ;;
      setup)
          setup_ansible
          install_requirements
      ;;
      requirements|deps)
          install_requirements
      ;;
      tags)
          list_tags
      ;;
      tagged)
          provision --tags ${args[@]:-}
      ;;
      *)
          provision ${args[@]:-}
      ;;
  esac
}


# Run the script
main "$@"
