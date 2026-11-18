#!/bin/bash
echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
echo "▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▌"
echo "▐ ░▀▀█░█▀█░█░█░▀█▀░█▀▄░█▀█░█▄█░█▀█░█▀▀░█░░░█▀█░█▀▄  ▌"
echo "▐ ░░░█░█▀█░▀▄▀░░█░░█▀▄░█▀█░█░█░█░█░▀▀█░█░░░█▀█░█▀▄  ▌"
echo "▐ ░▀▀░░▀░▀░░▀░░▀▀▀░▀░▀░▀░▀░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀░  ▌"
echo "▐▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▌"
echo "Javier Ramos Nistal @JaviRamosLab                    "
echo "Website - https://JaviRamosLab.com                   "
echo "Github - https://www.github.com/JaviRamosLab         "
echo "YouTube - https://www.youtube.com/@JaviRamosLab      "
echo "Facebook - https://www.facebook.com/JaviRamosLab     "
echo "Telegram - https://telegram.me/JaviRamosLab          "
echo "Email - co2mm.esperanto@gmail.com                    "
echo "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"

issue_list=$(gh issue list)

E_ERROR=1

echo "Issues: $issue_list"

echo -e "$issue_list" > issue-list.csv
read
